import { gql } from "@apollo/client";

// The API will automatically paginate the responses. You will receive up to 20 documents per page.
// List Rick & Morty characters using pagination. Page size should be limited to 20 items per page.
export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    # page needs to be passed in dynamically
    characters(page: $page) {
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
