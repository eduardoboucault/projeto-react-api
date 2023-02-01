import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardStyle, ButtonStyle, TitleName, IdStyle, DetailBtnStyle, TypesStyle, ImgStyle, ContainerButton } from './styled';

//* Colocar requisição de API URL Pokémon no GlobalStates;

//* Para acessar um diretório de objeto que tenha caracteres especiais, basta acessá-lo com string dentro de array;

//* chartAt() é um método que pega um caracter a partir do índice x;

function PokemonCard({ name, id, sprites, addToPokedex, pokemon, pokedex, types, goToDetails }) {

  const typeNames = types.map((type) => type.type);

  const navigate = useNavigate();

  return (

    <CardStyle>

      <IdStyle>#{id.toString().padStart(2, '0')}</IdStyle>
      <TitleName>{name.charAt(0).toUpperCase() + name.slice(1)}</TitleName>

      <ol>
        {typeNames.map((type) =>
          <TypesStyle key={type.name}>
            <img src={`${type.name}.png`} alt={`type-${type.name}`} />
          </TypesStyle>)}
      </ol>

      <ImgStyle
        src={sprites?.other["official-artwork"].front_default}
        alt={`image-${name}`}
      />

      <ContainerButton>
        <DetailBtnStyle onClick={() => goToDetails(navigate)}>Details</DetailBtnStyle>
        <ButtonStyle onClick={() => addToPokedex(pokemon)}>Catch!</ButtonStyle>
      </ContainerButton>
      
    </CardStyle>

  );
}

export default PokemonCard;
