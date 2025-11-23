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
  PlatformIcon,
  PlatformRow,
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
  StatsColumn
} from './perfil.styles';
import { useEffect, useState } from 'react';
import { normalizeUrl } from '@utils/normalizeUrl';
import useGames from '@hooks/useGames';
import { Loading } from '@components/Loading/Loading.component';

export default function Perfil() {
  const { userData, userLoading } = useAuth();
  const { getTotalStatusUser, totalGameStatusUser, getUserGames, userGames, gameLoading } = useGames();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (userLoading || !userData?.id) return;
    if (userData.profile_image_url) setAvatarUrl(normalizeUrl(userData.profile_image_url));

    getTotalStatusUser(userData.id);
    getUserGames(userData.id, 1, 10, statusFilter, search);
  }, [userLoading, userData, statusFilter, search]);

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
                  <SmallButton>Minhas reviews</SmallButton>
                  <SmallButton>Editar perfil</SmallButton>
                </ButtonGroup>
              </StatsColumn>

              <FavoriteBox>
                <FavoriteTitle>Jogo favorito</FavoriteTitle>

                <FavoriteCard>
                  <FavoriteImage src='https://media.rawg.io/media/games/bba/bba9dff323894856be2b2638f2b8aed0.jpg' />
                  <FavoriteGameName> The Witcher 3 </FavoriteGameName>
                </FavoriteCard>
              </FavoriteBox>
            </HeaderRight>
          </HeaderWrapper>

          {/* ----------------------------- COLEÇÃO -------------------------------- */}

          <SectionTitle>Coleção</SectionTitle>

          <TabRow>
            <Tab color='jogando' active={statusFilter === 'PLAYING'} onClick={() => setStatusFilter('PLAYING')}>
              Jogando
            </Tab>

            <Tab color='backlog' active={statusFilter === 'BACKLOG'} onClick={() => setStatusFilter('BACKLOG')}>
              Backlog
            </Tab>

            <Tab color='finalizado' active={statusFilter === 'FINISHED'} onClick={() => setStatusFilter('FINISHED')}>
              Finalizado
            </Tab>

            <Tab color='abandonado' active={statusFilter === 'DROPPED'} onClick={() => setStatusFilter('DROPPED')}>
              Abandonado
            </Tab>
          </TabRow>

          <SearchRow>
            <SearchInput placeholder='Buscar jogo...' value={search} onChange={(e) => setSearch(e.target.value)} />

            <SelectWrapper>
              <Select>
                <option>Selecione uma opção</option>
                <option>Rascunho</option>
                <option>Publicados</option>
              </Select>
            </SelectWrapper>
          </SearchRow>

          <Divider />

          {gameLoading ? (
            <Loading />
          ) : (
            <CardsGrid>
              {userGames?.length === 0 && <span>Nenhum jogo encontrado</span>}

              {userGames?.map((game) => (
                <GameCard key={game.idGame}>
                  <GameImage src={normalizeUrl(game.background_image ?? undefined)} />
                  <GameTitle>{game.name}</GameTitle>

                  <PlatformRow>
                    <PlatformIcon>🎮</PlatformIcon>
                    <PlatformIcon>🎮</PlatformIcon>
                    <PlatformIcon>🎮</PlatformIcon>
                  </PlatformRow>
                </GameCard>
              ))}
            </CardsGrid>
          )}
        </>
      )}
    </Page>
  );
}
