import { ReviewContext } from '@contexts/Review.context';
import type { IDefaultProviderProp, IErrorResponse } from '@interfaces/providerProps.interface';
import type { ICreateReview, IReviewListParam, IReviewResponse } from '@interfaces/review.interface';
import { api } from '@services/api';
import handleAxiosErrors from '@utils/axiosErrorStandard';
import type { AxiosError } from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ReviewProvider = ({ children }: IDefaultProviderProp) => {
  const [reviewLoading, setReviewLoading] = useState(false);
  const [reviewFeed, setReviewFeed] = useState<IReviewResponse[]>([]);

  const createReview = async (data: ICreateReview) => {
    try {
      await api.post('/review', data);
      toast.success('Review adicionado com sucesso!');
    } catch (error) {
      const axiosError = error as AxiosError<IErrorResponse>;
      if (axiosError.response) {
        toast.error(axiosError.response.data.message);
      }
    }
  };

  const reviewlistFeed = async (data: IReviewListParam) => {
    const { userId, gameId, limit, page } = data;
    try {
      setReviewLoading(true);
      const getReview = await api.get(
        `/review/list/feed?gameId=${gameId}&page=${page}&limit=${limit}&userId=${userId}`
      );
      setReviewFeed(getReview.data);
    } catch (error) {
      handleAxiosErrors(error);
    } finally {
      setReviewLoading(false);
    }
  };

  return (
    <ReviewContext.Provider value={{ reviewFeed, reviewLoading, createReview, reviewlistFeed }}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
