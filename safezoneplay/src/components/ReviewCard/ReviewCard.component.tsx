// ReviewCard.tsx
import type React from 'react';
import {
  Avatar,
  Body,
  Card,
  Cover,
  Description,
  Footer,
  Header,
  LikeButton,
  LikeCount,
  PublishDate,
  Stars,
  Title,
  UserInfo,
  Username
} from './reviewCard.style';

const MAX_STARS = 5;

type ReviewCardProps = {
  reviewId: string;
  title: string;
  rating: number;
  username: string;
  body: string;
  publishedAt: Date | null;
  likes: number;
  coverUrl?: string | null;
  avatarUrl: string | null;
  likedByUser: boolean;
  onClick?: () => void;
  onToggleLike?: (reviewId: string, likedByUser: boolean) => void;
};

function StarRating({ rating }: { rating: number }) {
  const value = Math.round(rating);

  return (
    <Stars>
      {Array.from({ length: MAX_STARS }).map((_, index) => (
        <span key={index}>{index < value ? '★' : '☆'}</span>
      ))}
    </Stars>
  );
}

export function ReviewCard({
  reviewId,
  title,
  rating,
  username,
  body,
  publishedAt,
  likes,
  coverUrl,
  avatarUrl,
  likedByUser,
  onToggleLike,
  onClick
}: ReviewCardProps) {
  function handleLikeClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    onToggleLike?.(reviewId, likedByUser);
  }

  let publishedDate = '';
  if (publishedAt) publishedDate = new Date(publishedAt).toLocaleDateString();

  return (
    <Card onClick={onClick}>
      <Cover css={{ backgroundImage: `url(${coverUrl})` }}>{!coverUrl && 'capa'}</Cover>

      <Body>
        <Header>
          <div>
            <Title>{title}</Title>
            <StarRating rating={rating} />
          </div>

          <UserInfo>
            <Avatar src={avatarUrl ?? undefined} />
            <Username>{username}</Username>
          </UserInfo>
        </Header>

        <Description>{body}</Description>

        <Footer>
          <PublishDate>Publicado: {publishedDate}</PublishDate>

          <LikeButton
            onClick={handleLikeClick}
            css={{
              background: likedByUser ? '#960a23' : 'transparent',
              borderColor: likedByUser ? '#500412' : '#fff',
              color: '#fff'
            }}
          >
            <span>{likedByUser ? '❤️' : '♡'}</span>
            <LikeCount>{likes}</LikeCount>
          </LikeButton>
        </Footer>
      </Body>
    </Card>
  );
}
