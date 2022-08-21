import {gql} from "@apollo/client";

export const CREATE_NEW_USER = gql`
    mutation signup($name: String!, $email: String!, $password: String!){
        signup(name: $name, email: $email, password: $password) {
            token
        }
    }
`