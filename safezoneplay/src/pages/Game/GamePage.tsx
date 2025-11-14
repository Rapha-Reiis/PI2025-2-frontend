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
import { gameresponse } from './gamebyiddata';
import parseHtmlToText from '@utils/parseHtmlToText';
import { MdOutlineCollectionsBookmark, MdOutlinePlaylistAdd } from 'react-icons/md';
import { BiJoystickAlt } from 'react-icons/bi';
import { TbEdit } from 'react-icons/tb';
import { FaRegStar } from 'react-icons/fa';

const GamePage = () => {
  const param = useParams();
  const { getGamesByID, gameByID, gameLoading } = useGames();

  useEffect(() => {
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
          <p>Carregando</p>
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
                  return <img src={`${image.image}`} />;
                })}
              </GameGallery>
              <GameInfos>
                <div className='column'>
                  <div>
                    <p className='minorDetails-title'>Gêneros:</p>
                    <ul>
                      {gameByID.genres?.map((genre) => (
                        <li>
                          <p>{genre.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className='minorDetails-title'>Desenvolvedores:</p>
                    <ul>
                      {gameByID.developers?.map((developer) => (
                        <li>
                          <p>{developer.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className='minorDetails-title'>Editora:</p>
                    <ul>
                      {gameByID.publishers?.map((publisher) => (
                        <li>
                          <p>{publisher.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className='column'>
                  <div>
                    <p className='minorDetails-title'>Lançamento: </p>
                    <p>{gameByID.released}</p>
                    {gameByID.playtime != 0 && <p>Tempo de jogo: {gameByID.playtime} horas</p>}
                  </div>
                </div>

                <div className='column'>
                  <div>
                    <p className='minorDetails-title'>Plataformas:</p>
                    <ul>
                      {gameByID.paltforms?.map((platform) => (
                        <li>
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
                      <li>
                        <a href={gameByID.website}>Site Oficial</a>
                      </li>
                      <li>
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
                <li>
                  <FaRegStar />
                  <p>Adicionar à lista</p>
                </li>
                <li>
                  <MdOutlineCollectionsBookmark />
                  <p>Backlog</p>
                </li>
                <li>
                  <BiJoystickAlt />
                  <p>Finalizado</p>
                </li>
                <li>
                  <MdOutlinePlaylistAdd />
                  <p>Lista</p>
                </li>
                <li>
                  <TbEdit />
                  <p>Avaliar</p>
                </li>
              </ul>
            </GameAsideCard>
          </StyledGameContainer>
        )}
      </Container>
    </StyledGamePageMain>
  );
};

export default GamePage;
