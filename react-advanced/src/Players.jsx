/* eslint-disable react/prop-types */

import useFetch from './useFetch';

function Players({ backgroundColor }) {
    const { data: players, isLoading } = useFetch({
        url: 'https://www.balldontlie.io/api/v1/players',
        initialState: [],
    });
    if (isLoading) return 'Loading...';
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

export default Players;
