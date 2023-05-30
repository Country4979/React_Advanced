/* eslint-disable react/prop-types */

import pipe from './pipe';
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
//Las dos const que siguen las comentamos porque las usamos directamente en PIPE
/*const configureWithPropName = withPropName('players');

const configuredWithData = withData({
    url: 'https://www.balldontlie.io/api/v1/players',
});*/
//const PlayersWithData = configuredWithData(configureWithPropName(Players)); // nuevo componente creado por withData

//Aplicando PIPE
/*const PlayersWithData = pipe(
    configuredWithData,
    configureWithPropName
)(Players);*/

//APLICANDO PIPE DIRECTAMENTE CON LAS FUNCIONES
const PlayersWithData = pipe(
    withData({
        url: 'https://www.balldontlie.io/api/v1/players',
    }),
    withPropName('players'),
)(Players)


export default PlayersWithData;
