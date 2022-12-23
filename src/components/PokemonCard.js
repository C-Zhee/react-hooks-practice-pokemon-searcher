import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  return (
    <Card itemsPerRow={6}>
      <div>
        <div className="image">
          <img alt="" src={pokemon.sprites.front} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
