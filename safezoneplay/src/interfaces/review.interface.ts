export interface ICreateReview {
  userId: string;
  gameId: number;
  title: string;
  body: string;
  isPublic: boolean;
  rating?: number | null;
  status: 'DRAFT' | 'PUBLISHED';
}

export interface IReviewListParam {
  gameId: number;
  page: number;
  limit: 4;
  userId: string;
}

export interface IReviewListUserParam {
  page: number;
  limit: number;
  status: 'DRAFT' | 'PUBLISHED';
  title: string;
}

export interface IDeleteReviewParam {
  reviewId: string;
}

export interface IReviewLikeParam {
  reviewId: string;
  userId: string;
}

// Responses Review

export interface IReviewResponse {
  reviewId: string;
  gameId: number;
  title: string;
  body: string;
  rating: number;
  status: string;
  isPublic: boolean;
  published_at: Date;
  author: {
    id: string;
    username: string;
    profile_image_url: string;
  };
  likedByUser: boolean;
  likesCount: number;
}

export interface IReviewContextProps {
  reviewLoading: boolean;
  reviewFeed: IReviewResponse[];
  reviewUser: IReviewResponse[];
  createReview: (data: ICreateReview) => Promise<void>;
  reviewlistFeed: (data: IReviewListParam) => Promise<void>;
  reviewListByUser: (data: IReviewListParam) => Promise<void>;
  deleteReview: (data: IDeleteReviewParam) => Promise<void>;
  CreateLike: (data: IReviewLikeParam) => Promise<void>;
  DeleteLike: (data: IReviewLikeParam) => Promise<void>;
}
