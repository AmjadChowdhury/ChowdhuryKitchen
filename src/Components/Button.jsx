import PropTypes from "prop-types";

const Button = ({name}) => {
    return (
        <button className="btn btn-outline border-b-2 text-yellow-600 hover:border-none hover:text-yellow-600">{name}</button>
    );
};

Button.propTypes = {
    name: PropTypes.string
}

export default Button;