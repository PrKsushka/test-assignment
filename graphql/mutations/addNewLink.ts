import {gql} from "@apollo/client";

export const ADD_NEW_LINK = gql`
    mutation post($url: String!, $description: String!){
        post(
            url: $url,
            description: $description
        ) {
            id
        }
    }
`