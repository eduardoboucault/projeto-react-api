import React from 'react';
import { CardDetailsStyle } from './styled'

function CardDetails({ id, name, sprites, types, stats, moves }) {

  const typeNames = types.map((type) => type.type);
  const statsPokemon = stats.map((stat) => stat.base_stat);
  const attackNames = moves.slice(0, 4).map((move) => move.move.name);
  const statsName = stats.map((stat) => stat.stat.name);

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
    <CardDetailsStyle colors={collors}>
      <div>#{id.toString().padStart(2, '0')}</div>
      <div>{name.charAt(0).toUpperCase() + name.slice(1)}</div>
      {typeNames.map((type) => (
        <ol key={type.name}>
          <li>
            <img src={`${type.name}.png`} alt={`type-${type.name}`} />
          </li>
        </ol>
      ))}
      <img src={sprites?.front_default} alt={`image-${name}`} />
      <img src={sprites?.back_default} alt={`image-${name}`} />
      <img src={sprites?.other['official-artwork'].front_default} alt={`image-${name}`} />
      <div>
        <ol>
          {statsPokemon.map((stat) => (
            <li key={Math.random()}>{stat}</li>
          ))}
        </ol>
      </div>
      <div>
        <h3>Ataques Principais:</h3>
        <ol>
          {attackNames.map((attack) => (
            <li key={attack}>{attack.charAt(0).toUpperCase() + attack.slice(1)}</li>
          ))}
        </ol>
      </div>
    </CardDetailsStyle>
  );
}

export default CardDetails;
