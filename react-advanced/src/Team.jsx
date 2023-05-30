/* eslint-disable react/prop-types */

import withData from './withData';
import withPropName from './withPropName';

function Teams({ teams, color }) {
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
const configureWithPropName = withPropName('teams');

const configuredWithData = withData({
    url: 'https://www.balldontlie.io/api/v1/teams',
});
const TeamsWithData = configuredWithData(configureWithPropName(Teams));

export default TeamsWithData;
