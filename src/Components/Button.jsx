import PropTypes from "prop-types";

const Button = ({name}) => {
    return (
        <button className="btn text-xs font-bold text-[#D1A054] hover:text-white hover:border-none bg-black hover:bg-[#D1A054]">{name}</button>
    );
};

Button.propTypes = {
    name: PropTypes.string
}

export default Button;