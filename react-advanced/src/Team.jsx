/* eslint-disable react/prop-types */

import pipe from './pipe';
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
/*Las dos const que siguen las comentamos porque las usamos directamente en PIPE
const configureWithPropName = withPropName('teams');

const configuredWithData = withData({
    url: 'https://www.balldontlie.io/api/v1/teams',
});*/

//const TeamsWithData = configuredWithData(configureWithPropName(Teams));

const TeamsWithData = pipe(
    withData({
        url: 'https://www.balldontlie.io/api/v1/teams',
    }),withPropName('teams')

)(Teams)


export default TeamsWithData;
