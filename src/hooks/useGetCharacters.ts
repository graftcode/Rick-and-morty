import { useLazyQuery } from "@apollo/client";

import { GET_CHARACTERS } from "../graphql/Queries";

export const useGetCharacters = () => useLazyQuery(GET_CHARACTERS);
