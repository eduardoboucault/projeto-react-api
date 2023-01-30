import { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../variables/BASE_URL"
import axios from "axios";
import { ChakraProvider } from '@chakra-ui/react'

import React from 'react'

//* Criar estado global recebendo props(usaremos props.children);

function GlobalStates(props) {

    //* Criar estados necessários;

    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokeDex] = useState([]);
    const [loading, setLoading] = useState(false);

    //* Criar useEffect necessário; useEffect só podem ser utilizados em hooks ou componentes;

    useEffect(() => {
        getPokemonData();
    }, []);

    //* Criar função de requisição para consumir API; Necessário estrutura completa(async/await, try/catch) para evitar bugs futuros.

    const getPokemonData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/pokemon`);
            setPokelist(response.data.results);
            setLoading(true);
        } catch (error) {
            console.log("Erro ao buscar lista de pokemons");
            console.log(error);
        }
    };

    //* Criar funções necessárias;

    const addToPokedex = (pokemonToAdd) => {
        const isAlreadyOnPokedex = pokedex.find(
            (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
        );

        if (!isAlreadyOnPokedex) {
            const newPokedex = [...pokedex, pokemonToAdd];
            setPokeDex(newPokedex);
        }
    };

    const removeFromPokedex = (pokemonToRemove) => {
        const newPokedex = pokedex.filter(
            (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
        );

        setPokeDex(newPokedex);
    };

    //* Criar objeto de contexto global;

    const context = {
        pokelist: pokelist,
        pokedex: pokedex,
        addToPokedex: addToPokedex,
        removeFromPokedex: removeFromPokedex,
        loading: loading
    }

    //* Englobar no App o GlobalContext.Provider com valor do objeto de contexto;

    //* props.children Garante acesso a todas as informações(filhos do global state)

    return (
        <GlobalContext.Provider
            value={context}
        >
            <ChakraProvider>
                {props.children}
            </ChakraProvider>

        </GlobalContext.Provider>
    )
}

export default GlobalStates;