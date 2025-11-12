import type { Game } from '@interfaces/game.interface';
import { Card, CardImage, CardInfos, CardsContainer } from './gameCard.style';
import { useNavigate } from 'react-router-dom';

interface GameCardProp {
  gameList: Array<Game>;
}

const GameCardList = ({ gameList }: GameCardProp) => {
  const gameCards = gameList.map((gameCard) => {
    const { id, background_image, name, released, platforms, slug, rating } =
      gameCard;

    return (
      <GameCard
        key={id}
        background_image={background_image}
        name={name}
        released={released}
        id={id}
        slug={slug}
        rating={rating}
        genres={[]}
        platforms={platforms}
      />
    );
  });

  return <CardsContainer>{gameCards}</CardsContainer>;
};

const GameCard = ({
  background_image,
  name,
  released,
  id,
  platforms
}: Game) => {
  const navigate = useNavigate();

  const gamePlatforms = platforms?.map((platform) => {
    return (
      <li>
        <p>· {platform.name}</p>
      </li>
    );
  });

  return (
    <Card key={id} onClick={() => navigate(`/game/${id}`)}>
      <CardImage>
        <img src={background_image} alt={`${name} image`} />
      </CardImage>
      <CardInfos>
        <p className='gameTitle'>{name}</p>
        <small className='gameRelease'>{released}</small>
        <ul className='game-platforms'>{gamePlatforms}</ul>
      </CardInfos>
    </Card>
  );
};

export { GameCard, GameCardList };
