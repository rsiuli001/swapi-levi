import { useQuery } from '@apollo/client';
import { ChangeEvent, FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setSearchQuery } from '../redux/searchSlice';
import { CHARACTER_DETAILS_QUERY, CHARACTER_QUERY } from '../graphql/queries';
import CharacterPopup from './CharacterPopup';

const CharacterList: FC = () => {
  const { data, loading, error } = useQuery<any>(CHARACTER_QUERY);
  const [selectedCharacterUrl, setSelectedCharacterUrl] = useState<string | null>(null);
  const { data: characterDetailsData, loading: characterDetailsLoading } = useQuery(
    CHARACTER_DETAILS_QUERY,
    {
      variables: { url: selectedCharacterUrl },
      skip: !selectedCharacterUrl, // Skip query if no character is selected
    }
  );

  const searchQuery = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleCardClick = (url: string): void => {
    setSelectedCharacterUrl(url);
  };

  const handleClosePopup = (): void => {
    setSelectedCharacterUrl(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredData = data.characters.filter((character: any) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Seacrh by name"
        className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={handleSearch}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredData.map((character: any) => (
          <div
            key={character.url}
            onClick={() => handleCardClick(character.url)}
            className={`bg-white rounded-lg shadow-lg p-6 flex flex-col items-start space-y-4 hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer ${
              selectedCharacterUrl === character.url ? 'bg-blue-100' : ''
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-800">{character.name}</h2>
            <p className="text-gray-600">Height: {character.height} cm</p>
            <p className="text-gray-600">Eye Color: {character.eye_color}</p>
            <p className="text-gray-600">Birth Year: {character.birth_year}</p>
          </div>
        ))}
      </div>

      {selectedCharacterUrl && characterDetailsData && !characterDetailsLoading && (
        <CharacterPopup character={characterDetailsData.character} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default CharacterList;
