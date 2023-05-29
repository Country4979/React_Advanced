/* eslint-disable react/prop-types */

import FetchData from './FetchData';


function Teams({ color }) {
    return (
        <>
            <h2>Teams</h2>
            <FetchData url='https://www.balldontlie.io/api/v1/teams'>
                {(teams) => (
                    <ul style={{ color }}>
                        {teams.map((team) => (
                            <li key={team.id}>{team.full_name}</li>
                        ))}
                    </ul>
                )}
            </FetchData>
        </>
    );
}

export default Teams;
