import { gql } from "@apollo/client";

// Filter characters by providing inputs specified in the filter obj

// gender should be enum - [female, male, genderless, unknown].
export const SEARCH_CHARACTER = gql`
  query SearchCharacter($filter: FilterCharacter) {
    # filter info needs to be passed in dynamically
    characters(filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        status
        gender
        image
        # url
        created
      }
    }
  }
`;
