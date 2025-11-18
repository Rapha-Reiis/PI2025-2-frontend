/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from '@styles/global';
import {
  GameAsideCard,
  GameDescription,
  GameGallery,
  GameInfos,
  StyledGameContainer,
  StyledGameDetailsContainer,
  StyledGamePageMain,
  StyledGameTitle
} from './styles.gamePage';
import useGames from '@hooks/useGames';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import parseHtmlToText from '@utils/parseHtmlToText';
import { Loading } from '@components/Loading/Loading.component';
import { FaRegCircleCheck, FaRegCircleXmark } from 'react-icons/fa6';
import { IoGameControllerOutline } from 'react-icons/io5';
import { RiBookShelfLine } from 'react-icons/ri';

const GamePage = () => {
  const param = useParams();
  const { getGamesByID, gameByID, gameLoading } = useGames();

  useEffect(() => {
    gameByID.background_image = ''; //Para prevenir que o fundo do jogo aberto anteriormente apareca quando se abre um novo jogo.
    window.scrollTo(0, 0);

    if (param.id) {
      getGamesByID(param.id);
    }
  }, [param.id]);

  return (
    <StyledGamePageMain
      style={{
        ['--bg-image' as string]: `url(${gameByID.background_image})`
      }}
    >
      <Container>
        {gameLoading ? (
          <Loading />
        ) : (
          <StyledGameContainer>
            <StyledGameDetailsContainer>
              <StyledGameTitle>
                <h1>{gameByID.name}</h1>
              </StyledGameTitle>
              <GameDescription>
                <p>{parseHtmlToText.htmlToText(gameByID.description)}</p>
              </GameDescription>
              <GameGallery>
                {gameByID.screen_shots?.map((image) => {
                  return <img src={`${image.image}`} key={image.id} />;
                })}
              </GameGallery>
              <GameInfos>
                <div className='column'>
                  <div>
                    <p className='minorDetails-title'>Gêneros:</p>
                    <ul>
                      {gameByID.genres?.map((genre) => (
                        <li key={genre.id}>
                          <p>{genre.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className='minorDetails-title'>Desenvolvedores:</p>
                    <ul>
                      {gameByID.developers?.map((developer) => (
                        <li key={developer.id}>
                          <p>{developer.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className='minorDetails-title'>Editora:</p>
                    <ul>
                      {gameByID.publishers?.map((publisher) => (
                        <li key={publisher.id}>
                          <p>{publisher.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className='column'>
                  <div>
                    <p className='minorDetails-title'>Lançamento: </p>
                    <p>{gameByID.released?.split('-').reverse().join('/')}</p>

                    {/* 
                    Comentei porque muitos jogos não tem tempo de jogo ou vem com tempos totalmente errados.
                    
                    {gameByID.playtime != 0 && <p>Tempo de jogo: {gameByID.playtime} horas</p>} 
                    */}
                  </div>
                </div>

                <div className='column'>
                  <div>
                    <p className='minorDetails-title'>Plataformas:</p>
                    <ul>
                      {gameByID.paltforms?.map((platform) => (
                        <li key={platform.id}>
                          <p>{platform.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className='column'>
                  <div>
                    <p className='minorDetails-title'>Links</p>
                    <ul>
                      <li key={'webSite'}>
                        <a href={gameByID.website}>Site Oficial</a>
                      </li>
                      <li key={'reddit'}>
                        <a href={gameByID.reddit_url}>Reddit</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </GameInfos>
            </StyledGameDetailsContainer>
            <GameAsideCard>
              <img src={gameByID.background_image} />
              <ul>
                {/* <li key={'addToList'}>
                  <FaRegStar />
                  <p>Adicionar à lista</p>
                </li> */}

                <li key={'addToBacklog'}>
                  <RiBookShelfLine />
                  <p>Backlog</p>
                </li>

                <li key={'playing'}>
                  <IoGameControllerOutline />
                  <p>Jogando</p>
                </li>

                <li key={'addToFinished'}>
                  <FaRegCircleCheck />
                  <p>Finalizado</p>
                </li>

                <li key={'abandoned'}>
                  <FaRegCircleXmark />
                  <p>Abandonado</p>
                </li>

                {/* <li key={''}>
                  <MdOutlinePlaylistAdd />
                  <p>Lista</p>
                </li> */}

                {/* <li key={'rateGame'}>
                  <TbEdit />
                  <p>Avaliar</p>
                </li> */}
              </ul>
            </GameAsideCard>
          </StyledGameContainer>
        )}
      </Container>
    </StyledGamePageMain>
  );
};

export default GamePage;
