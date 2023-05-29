/* eslint-disable react/prop-types */

import useFetch from './useFetch';

function Teams({ color }) {
    const { data: teams, isLoading } = useFetch({
        url: 'https://www.balldontlie.io/api/v1/teams',
        initialState: [],
    });

    if (isLoading) return 'Loading...';
    
    return (
        <>
            <h2>Teams</h2>
            <ul style={{ color }}>
                {teams.map((team) => (
                    <li key={team.id}>{team.full_name}</li>
                ))}
            </ul>
        </>
    );
}

export default Teams;
