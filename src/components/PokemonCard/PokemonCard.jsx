import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardStyle, ButtonStyle, TitleName, IdStyle, DetailBtnStyle, TypesStyle, ImgStyle, PokeballLogo } from './styled';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext } from 'react';
import { goToDetails } from '../../Router/coordinator';

function PokemonCard({ name, id, sprites, pokemon, types, onClick, value }) {

  const typeNames = types.map((type) => type.type);

  const navigate = useNavigate();

  const context = useContext(GlobalContext)

  const { addToPokedex, removeFromPokedex, handlePokemonClick } = context

  const getColor = (typeName) => {
    switch (typeName) {
      case 'poison':
        return '#AD61AE';
      case 'grass':
        return '#70B873';
      case 'fire':
        return '#EAAB7D';
      case 'flying':
        return '#6892B0';
      case 'water':
        return '#71C3FF';
      case 'dark':
        return '#5C5365';
      case 'bug':
        return '#76A866';
      case 'normal':
        return '#BF9762';
      case 'dragon':
        return '#0A6CBF';
      case 'electric':
        return '#F4D23B';
      case 'fairy':
        return '#EC8FE6';
      case 'fighting':
        return '#CE4069';
      case 'ghost':
        return '#5269AC';
      case 'ground':
        return '#D97745';
      case 'ice':
        return '#74CEC0';
      case 'psychic':
        return '#F67176';
      case 'rock':
        return '#C7B78B';
      case 'steel':
        return '#BBBBBB';
      default:
        return 'Color not found';
    }
  }

  const collors = getColor(typeNames[0].name)

  return (
    <CardStyle colors={collors}>
      <div>
        <IdStyle>#{id.toString().padStart(2, '0')}</IdStyle>
        <TitleName>{name.charAt(0).toUpperCase() + name.slice(1)}</TitleName>
        {typeNames.map((type) => (
          <ol key={type.name}>
            <TypesStyle>
              <img src={`${type.name}.png`} alt={`type-${type.name}`} />
            </TypesStyle>
          </ol>
        ))}
        <DetailBtnStyle onClick={() => { goToDetails(navigate); handlePokemonClick(pokemon); }}>Detalhes</DetailBtnStyle>
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
