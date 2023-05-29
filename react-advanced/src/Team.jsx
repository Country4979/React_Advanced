/* eslint-disable react/prop-types */

import withData from './withData';

function Teams({ data: teams , color}) {
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

const configuredWithData = withData({
    url: 'https://www.balldontlie.io/api/v1/teams',
});
const TeamsWithData = configuredWithData(Teams);

export default TeamsWithData;
