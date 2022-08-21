import {gql} from "@apollo/client";

export const GET_DATA_ABOUT_LINKS = gql`
    query Feed($takeCount: Int!, $skipCount: Int!){
        feed(take: $takeCount, skip: $skipCount) {
            count
            links {
                id
                description
                url
                postedBy {
                    id
                    name
                }
                votes {
                    id
                    user {
                        id
                        name
                    }
                }
            }
        }
    }
`