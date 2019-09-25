import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

// https://graphql-pokemon.now.sh
const query = gql`
    {
        pokemon(name: "Pikachu") {
            image
        }
    }
`;

const ApolloExample = () => {
    return (
        <div>
            <h2>ApolloExample</h2>
        </div>
    );
};

export default ApolloExample;
