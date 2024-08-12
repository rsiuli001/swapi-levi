import { FC } from 'react';

type CharacterPopupProps = {
  character: any;
  onClose: () => void;
};

const CharacterPopup: FC<CharacterPopupProps> = ({ character, onClose }) => {
  const { homeworld = {}, films = [], vehicles = [], starships = [] } = character;
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div onClick={handleClick}>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full relative">
          <button onClick={onClose} className="text-gray-500 absolute top-5 right-10 text-3xl">
            &times;
          </button>
          <h2 className="text-3xl font-bold mb-4">{character.name}</h2>
          <p className="mb-2">
            <strong>Birth Year:</strong> {character.birth_year}
          </p>
          <p className="mb-2">
            <strong>Height:</strong> {character.height} cm
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Homeworld</h3>
            <p>Name: {homeworld.name}</p>
            <p>Climate: {homeworld.climate}</p>
            <p>Terrain: {homeworld.terrain}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Films</h3>
            <ul className="list-disc ml-6">
              {films.map((film: any) => (
                <li key={film.episode}>
                  {film.title} (Episode {film.episode})
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Vehicles</h3>
            <ul className="list-disc ml-6">
              {vehicles.map((vehicle: any) => (
                <li key={vehicle.name}>
                  Vehicle Details: {vehicle.name} - {vehicle.model} ({vehicle.class})
                  <br />
                  Cost: {vehicle.cost !== null ? vehicle.cost : 'Unknown'}
                </li>
              ))}
            </ul>
          </div>
          {
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Starships</h3>
              <ul className="list-disc ml-6">
                {starships.map((starship: any) => (
                  <li key={starship.name}>
                    Starship Details: {starship.name} - {starship.model} ({starship.class})
                    <br />
                    Cost: {starship.cost !== null ? starship.cost : 'Unknown'}
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default CharacterPopup;
