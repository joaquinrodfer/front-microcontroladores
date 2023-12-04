import PropTypes from 'prop-types';
import './DataIndividual.css'

const DataIndividual = ({ data }) => {
    let { temperatura, nivel, hora } = data;

    hora = hora ? hora.slice(0, 8) : null;
    return (
        <div className="data">
            <article className="hour">
                <h4>Hora</h4>
                <p>{hora ? hora : "No hay datos disponibles"}</p>
            </article>
            <article className="temp">
                <h4>Temperatura</h4>
                <p>{temperatura ? temperatura + "ºC" : "No hay datos disponibles"}</p>
            </article>
            <article className="level">
                <h4>Nivel</h4>
                <p>{nivel ? nivel + "%" : "No hay datos disponibles"}</p>
            </article>
        </div>
    );
}

DataIndividual.propTypes = {
    data: PropTypes.shape({
        temperatura: PropTypes.number,
        nivel: PropTypes.number,
        hora: PropTypes.string
    }).isRequired
}

export default DataIndividual;