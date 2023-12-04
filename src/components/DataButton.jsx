import PropTypes from 'prop-types';
import './DataButton.css';

const DataButton = ({active, data, onClick}) => {
    //Change the color of the button depending on the active prop
    return (
        <button className={active ? 'active' : ''} onClick={onClick}>
            {data}
        </button>
    );
};

DataButton.propTypes = {
    active: PropTypes.bool.isRequired,
    data: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default DataButton;