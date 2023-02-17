import React from 'react'
import axios from 'axios';
import { GlobalContext } from './GlobalContext';
import { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { BASE_URL } from '../variables/BASE_URL'

//* Criar estado global recebendo props(usaremos props.children);

function GlobalStates(props) {

    //* Criar estados necessários;

    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokeDex] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pokemon, setPokemon] = useState([]);

    //* Criar useEffect necessário; useEffect só podem ser utilizados em hooks ou componentes; Ele armazena algo para rodar assim que chamado;

    useEffect(() => {
        fetchPokemon();
    }, []);

    //* Criar função de requisição para consumir API; Necessário estrutura completa(async/await, try/catch) para evitar bugs futuros;

    const fetchPokemon = async () => {
        try {
            const response = await axios.get(`${BASE_URL}`);
            setPokelist(response.data.results);
            setLoading(true);
            getPokemon(response.data.results);
        } catch (error) {
            console.log("Erro ao buscar lista de pokemons");
            console.log(error);
        }
    };

    //* Função de criar requisição das urls com Promise.all;

    async function getPokemon(urls) {
        const pokemonData = await Promise.all(urls.map(async url => {
            const response = await axios.get(url.url);
            return response.data;
        }));

        setPokemon([...pokemon, ...pokemonData]);
    }

    //* Criar funções necessárias; (Adicionar pokémon a pokedex(carrinho)); (Remover o pokémon da pokedex);

    const addToPokedex = (pokemonToAdd) => {
        const isAlreadyOnPokedex = pokedex.find(
          (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
        );
    
        if (!isAlreadyOnPokedex) {
          const newPokedex = [...pokedex, pokemonToAdd];
          setPokeDex(newPokedex);
          alert('pokemon adicionado')
        }
      };
    
    //* Remover pokémon

    const removeFromPokedex = (pokemonToRemove) => {
        const newPokedex = pokedex.filter((pokemonInPokedex) => console.log(pokemonInPokedex.name) !== console.log(pokemonToRemove.name));
        setPokeDex(newPokedex);
      };
      
      
    //* Criar objeto de contexto global;

    const context = {
        pokelist: pokelist,
        pokedex: pokedex,
        addToPokedex: addToPokedex,
        removeFromPokedex: removeFromPokedex,
        loading: loading,
        pokemon: pokemon
    }

    //* Englobar no App o GlobalContext.Provider com valor do objeto de contexto;

    //* props.children Garante acesso a todas as informações(filhos do global state);

    //* O chakra provider deve estar no GlobalStates também, para que possa ser consumido no aplicativo inteiro;

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