import useAuth from '@hooks/useAuth';
import {
  Avatar,
  Bio,
  ButtonGroup,
  CardsGrid,
  Divider,
  FavoriteBox,
  FavoriteCard,
  FavoriteGameName,
  FavoriteImage,
  FavoriteTitle,
  GameCard,
  GameImage,
  GameTitle,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  MemberSince,
  Page,
  SearchInput,
  SearchRow,
  SectionTitle,
  Select,
  SelectWrapper,
  SmallButton,
  StatItem,
  StatLabel,
  StatNumber,
  StatsBox,
  Tab,
  TabRow,
  UserInfo,
  UserName,
  StatsColumn,
  ReviewGrid
} from './perfil.styles';
import { useEffect, useRef, useState } from 'react';
import { normalizeUrl } from '@utils/normalizeUrl';
import useGames from '@hooks/useGames';
import { Loading } from '@components/Loading/Loading.component';
import { useNavigate } from 'react-router-dom';
import useReview from '@hooks/useReview';
import { ReviewCard } from '@components/ReviewCard/ReviewCard.component';
import type { IReviewResponse } from '@interfaces/review.interface';
import { toast } from 'react-toastify';

export default function Perfil() {
  const navigate = useNavigate();
  const { userData, userLoading } = useAuth();
  const { getTotalStatusUser, totalGameStatusUser, getUserGames, userGames, gameLoading } = useGames();
  const { reviewListByUser, reviewUser, reviewLoading } = useReview();

  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);
  const [search, setSearch] = useState('');
  const [showReviews, setShowReviews] = useState(false);
  const [reviewStatusFilter, setReviewStatusFilter] = useState<'DRAFT' | 'PUBLISHED' | undefined>(undefined);
  const [menuOpenId, setMenuOpenId] = useState<number | null>(null);
  const cardAreaRef = useRef<HTMLDivElement | null>(null);

  function handleClickOutside(e: MouseEvent) {
    if (menuOpenId !== null) setMenuOpenId(null);
  }
  useEffect(() => {
    if (menuOpenId === null) return;

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpenId]);

  useEffect(() => {
    if (userLoading || !userData?.id) return;

    if (userData.profile_image_url) {
      setAvatarUrl(normalizeUrl(userData.profile_image_url));
    }

    getTotalStatusUser(userData.id);

    if (showReviews) {
      reviewListByUser(
        {
          page: 1,
          limit: 10,
          status: reviewStatusFilter ?? 'PUBLISHED',
          title: search
        },
        userData.id
      );
    } else {
      getUserGames(userData.id, 1, 10, statusFilter, search);
    }
  }, [userLoading, userData, statusFilter, search, showReviews, reviewStatusFilter]);

  const totalGames = totalGameStatusUser?.reduce((acc, item) => acc + item.total, 0) ?? 0;
  const playing = totalGameStatusUser?.find((item) => item.status === 'PLAYING')?.total ?? 0;
  const finished = totalGameStatusUser?.find((item) => item.status === 'FINISHED')?.total ?? 0;
  const dropped = totalGameStatusUser?.find((item) => item.status === 'DROPPED')?.total ?? 0;
  const backlog = totalGameStatusUser?.find((item) => item.status === 'BACKLOG')?.total ?? 0;

  return (
    <Page>
      {userLoading ? (
        <Loading />
      ) : (
        <>
          <HeaderWrapper>
            <HeaderLeft>
              <Avatar src={avatarUrl ?? undefined} />

              <UserInfo>
                <UserName>{userData?.username}</UserName>
                {userData?.premium === true && (
                  <MemberSince>Premium até {new Date(userData?.plan_expires_at).toLocaleDateString()}</MemberSince>
                )}

                <Bio>{userData?.bio ?? ' Sem bio por aqui...'}</Bio>
              </UserInfo>
            </HeaderLeft>

            <HeaderRight>
              <StatsColumn>
                <StatsBox>
                  <StatItem>
                    <StatNumber>{totalGames}</StatNumber>
                    <StatLabel>Games</StatLabel>
                  </StatItem>

                  <StatItem>
                    <StatNumber>{playing}</StatNumber>
                    <StatLabel>Jogando</StatLabel>
                  </StatItem>

                  <StatItem>
                    <StatNumber>{finished}</StatNumber>
                    <StatLabel>Finalizado</StatLabel>
                  </StatItem>

                  <StatItem>
                    <StatNumber>{dropped}</StatNumber>
                    <StatLabel>Abandonado</StatLabel>
                  </StatItem>

                  <StatItem>
                    <StatNumber>{backlog}</StatNumber>
                    <StatLabel>Backlog</StatLabel>
                  </StatItem>
                </StatsBox>

                <ButtonGroup>
                  <SmallButton
                    onClick={() => {
                      if (!userData?.premium) {
                        toast.warning('Você precisa ser premium para utilizar essa função', {
                          style: {
                            color: '#000',
                            fontWeight: 'bold'
                          }
                        });
                        return;
                      }

                      setShowReviews((prev) => !prev);
                    }}
                    disabled={false}
                  >
                    {showReviews ? 'Ver meus jogos' : 'Minhas reviews'}
                  </SmallButton>

                  <SmallButton disabled={showReviews}>Editar perfil</SmallButton>
                </ButtonGroup>
              </StatsColumn>

              <FavoriteBox>
                <FavoriteTitle>Jogo favorito</FavoriteTitle>

                <FavoriteCard>
                  <FavoriteImage
                    src={
                      userData?.favoriteGame?.background ??
                      'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'
                    }
                  />

                  <FavoriteGameName>{userData?.favoriteGame?.name ?? 'The Witcher 3'}</FavoriteGameName>
                </FavoriteCard>
              </FavoriteBox>
            </HeaderRight>
          </HeaderWrapper>

          <SectionTitle>{showReviews ? 'Minhas reviews' : 'Coleção'}</SectionTitle>

          <TabRow>
            <Tab color='tudo' active={statusFilter === ''} disabled={showReviews} onClick={() => setStatusFilter('')}>
              Tudo
            </Tab>

            <Tab
              color='jogando'
              active={statusFilter === 'PLAYING'}
              disabled={showReviews}
              onClick={() => setStatusFilter('PLAYING')}
            >
              Jogando
            </Tab>

            <Tab
              color='backlog'
              active={statusFilter === 'BACKLOG'}
              disabled={showReviews}
              onClick={() => setStatusFilter('BACKLOG')}
            >
              Backlog
            </Tab>

            <Tab
              color='finalizado'
              active={statusFilter === 'FINISHED'}
              disabled={showReviews}
              onClick={() => setStatusFilter('FINISHED')}
            >
              Finalizado
            </Tab>

            <Tab
              color='abandonado'
              active={statusFilter === 'DROPPED'}
              disabled={showReviews}
              onClick={() => setStatusFilter('DROPPED')}
            >
              Abandonado
            </Tab>
          </TabRow>

          <SearchRow>
            <SearchInput
              placeholder={showReviews ? 'Buscar review...' : 'Buscar jogo...'}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {showReviews && (
              <SelectWrapper>
                <Select
                  value={reviewStatusFilter ?? ''}
                  onChange={(e) => setReviewStatusFilter(e.target.value as 'DRAFT' | 'PUBLISHED' | '')}
                >
                  <option value=''>Ambos</option>
                  <option value='PUBLISHED'>Publicados</option>
                  <option value='DRAFT'>Rascunho</option>
                </Select>
              </SelectWrapper>
            )}
          </SearchRow>

          <Divider />

          {showReviews ? (
            reviewLoading ? (
              <Loading />
            ) : (
              <ReviewGrid>
                {reviewUser?.length === 0 && <span>Nenhuma review encontrada</span>}
                {reviewUser?.map((review: IReviewResponse) => (
                  <ReviewCard
                    key={review.reviewId}
                    reviewId={review.reviewId}
                    title={review.title}
                    rating={review.rating}
                    username={review.author.username}
                    body={review.body}
                    publishedAt={review.published_at}
                    likes={review.likesCount}
                    avatarUrl={review.author.profile_image_url}
                    likedByUser={review.likedByUser}
                  />
                ))}
              </ReviewGrid>
            )
          ) : gameLoading ? (
            <Loading />
          ) : (
            <CardsGrid ref={cardAreaRef}>
              {userGames?.length === 0 && <span>Nenhum jogo encontrado</span>}

              {userGames?.map((game) => (
                <GameCard key={game.idGame} onClick={() => navigate(`/game/${game.idGame}`)}>
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpenId(game.idGame);
                      }}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'white',
                        fontSize: '20px',
                        cursor: 'pointer'
                      }}
                    >
                      ⋯
                    </button>
                  </div>

                  {menuOpenId === game.idGame && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        openNoteModal(() => console.log('oi'));
                      }}
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: 30,
                        background: '#2f2f4c',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                        zIndex: 10,
                        cursor: 'pointer'
                      }}
                    >
                      Anotação
                    </div>
                  )}

                  <GameImage src={normalizeUrl(game.background_image ?? undefined)} />
                  <GameTitle>{game.name}</GameTitle>
                </GameCard>
              ))}
            </CardsGrid>
          )}
        </>
      )}
    </Page>
  );
}
