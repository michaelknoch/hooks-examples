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

function usePikachuImageWithDefault() {
    const { data } = useQuery(query);
    return (
        data?.pokemon?.image ||
        "https://www.njlifehacks.com/wp-content/uploads/2017/04/how-to-do-something-consistently.png"
    );
}

const ApolloExample = () => {
    const imageUrl = usePikachuImageWithDefault();

    return (
        <div>
            <h2>ApolloExample</h2>
            <img src={imageUrl} />
        </div>
    );
};

export default ApolloExample;
