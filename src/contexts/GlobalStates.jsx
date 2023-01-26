import { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../variables/BASE_URL"
import axios from "axios";

import React from 'react'

//* Criar estado global recebendo props(usaremos props.children);

function GlobalStates(props) {

    //* Criar estados necessários;

    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokedex] = useState([]);

    //* Criar useEffect necessário; useEffect só podem ser utilizados em hooks ou componentes;



    //* Criar função de requisição para consumir API; Necessário estrutura completa(async/await, try/catch) para evitar bugs futuros.


    //* Criar funções necessárias;

    const addToPokedex = (pokemonToAdd) => {
        const isAlreadyOnPokedex = pokedex.find(
            (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
        );

        if (!isAlreadyOnPokedex) {
            const newPokedex = [...pokedex, pokemonToAdd];
            setPokedex(newPokedex);
        }
    };

    const removeFromPokedex = (pokemonToRemove) => {
        const newPokedex = pokedex.filter(
            (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
        );

        setPokedex(newPokedex);
    };

    //* Criar objeto de contexto global;

    const context = {
        pokelist: pokelist,
        pokedex: pokedex,
        setPokelist: setPokelist,
        addToPokedex: addToPokedex,
        removeFromPokedex: removeFromPokedex
    }

    //* Englobar no App o GlobalContext.Provider com valor do objeto de contexto;

    //* props.children Garante acesso a todas as informações(filhos do global state)

    return (
        <GlobalContext.Provider
            value={context}
        >
            {props.children} 

        </GlobalContext.Provider>
    )
}

export default GlobalStates;