/* eslint-disable react/prop-types */

import withData from './withData';
import withPropName from './withPropName';

function Players({ players, backgroundColor }) {
    return (
        <>
            <h2>Players</h2>
            <ul style={{ backgroundColor }}>
                {players.map((player) => (
                    <li key={player.id}>
                        {player.first_name} {player.last_name}
                    </li>
                ))}
            </ul>
        </>
    );
}
const configureWithPropName = withPropName('players');

const configuredWithData = withData({
    url: 'https://www.balldontlie.io/api/v1/players',
});
const PlayersWithData = configuredWithData(configureWithPropName(Players)); // nuevo componente creado por withData

export default PlayersWithData;
