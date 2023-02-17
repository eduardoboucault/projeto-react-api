import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardStyle, ButtonStyle, TitleName, IdStyle, DetailBtnStyle, TypesStyle, ImgStyle, PokeballLogo } from './styled';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext } from 'react';
import { goToDetails } from '../../Router/coordinator';

//* Colocar requisição de API URL Pokémon no GlobalStates;

//* Para acessar um diretório de objeto que tenha caracteres especiais, basta acessá-lo com string dentro de array;

//* chartAt() é um método que pega um caracter a partir do índice x;

function PokemonCard({ name, id, sprites, pokemon, types, onClick, value }) {
  
  const typeNames = types.map((type) => type.type);

  const navigate = useNavigate();

  const context = useContext(GlobalContext)

  const { addToPokedex, removeFromPokedex } = context
  
  return (

    <CardStyle>

      <div>
        <IdStyle>#{id.toString().padStart(2, '0')}</IdStyle>
        <TitleName>{name.charAt(0).toUpperCase() + name.slice(1)}</TitleName>
        <ol>
          {typeNames.map((type) =>
            <TypesStyle key={type.name}>
              <img src={`${type.name}.png`} alt={`type-${type.name}`} />
            </TypesStyle>)}
        </ol>
        <DetailBtnStyle onClick={() => goToDetails(navigate)}>Details</DetailBtnStyle>
      </div>

      <div>
        <ImgStyle
          src={sprites?.other["official-artwork"].front_default}
          alt={`image-${name}`}
        />

        <ButtonStyle onClick={onClick === 'addToPokedex' ? () => addToPokedex(pokemon) : () => removeFromPokedex(pokemon)}>{value}</ButtonStyle>
      </div>

      <PokeballLogo src={'pokeballlogo.png'} />

    </CardStyle>

  );
}

export default PokemonCard;
