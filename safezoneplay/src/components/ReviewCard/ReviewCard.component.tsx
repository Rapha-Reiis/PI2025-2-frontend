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
  title: string;
  rating: number;
  username: string;
  description: string;
  publishedAt: string | null;
  likes: number;
  coverUrl: string | null;
  avatarUrl: string | null;
  likedByUser: boolean;
  onClick?: () => void;
  onToggleLike?: (likedByUser: boolean) => void;
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
  title,
  rating,
  username,
  description,
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
    onToggleLike?.(likedByUser);
  }

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

        <Description>{description}</Description>

        <Footer>
          <PublishDate>Publicado: {publishedAt}</PublishDate>

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
