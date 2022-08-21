import {gql} from "@apollo/client";

export const VOTE_FOR_POST = gql`
    mutation vote($linkId: ID!){
        vote(linkId: $linkId) {
            id
        }
    }
`