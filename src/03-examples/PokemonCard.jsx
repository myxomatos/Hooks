import React from 'react';

export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section style={{ height: 200 }} className='text-capitalize'>
      #{id} - {name}
      <div>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>
    </section>
  );
};
