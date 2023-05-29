/* eslint-disable react/prop-types */

import FetchData from './FetchData';

function Players({ backgroundColor }) {
    return (
        <>
            <h2>Players</h2>
            <FetchData url='https://www.balldontlie.io/api/v1/players'>
                {(players) => (
                    <ul style={{ backgroundColor }}>
                        {players.map((player) => (
                            <li key={player.id}>
                                {player.first_name} {player.last_name}
                            </li>
                        ))}
                    </ul>
                )}
            </FetchData>
        </>
    );
}

export default Players;
