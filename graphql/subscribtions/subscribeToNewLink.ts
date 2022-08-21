import {gql} from "@apollo/client";

export const SUBSCRIBE_TO_NEW_LINK=gql`
    subscription {
        newLink {
            id
            description
            url
            postedBy {
                id
                name
            }
        }
    }
`