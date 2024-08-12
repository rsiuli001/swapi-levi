import { gql } from '@apollo/client';

const CHARACTER_QUERY = gql`
  query Characters {
    characters {
      birth_year
      eye_color
      name
      height
      url
    }
  }
`;

const CHARACTER_DETAILS_QUERY = gql`
  query Character($url: String!) {
    character(url: $url) {
      name
      birth_year
      height
      homeworld {
        climate
        name
        terrain
      }
      films {
        episode
        title
      }
      vehicles {
        class
        cost
        model
        name
      }
      starships {
        class
        cost
        model
        name
      }
    }
  }
`;

export { CHARACTER_DETAILS_QUERY, CHARACTER_QUERY };
