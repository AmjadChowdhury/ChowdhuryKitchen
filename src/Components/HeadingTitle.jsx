import PropTypes from "prop-types";

const HeadingTitle = ({subHeading,heading}) => {
    return (
        <div className="text-center my-4">
            <h1 className="text-[#D1A054] font-bold mb-2">--- {subHeading} ---</h1>
            <div className="w-4/5 lg:w-1/3 mx-auto">
                <p className="py-2 pt-2 px-2 text-lg lg:text-2xl font-bold border-b-2 border-[#D1A054] rounded-lg uppercase">{heading}</p>
            </div>
        </div>
    );
};

HeadingTitle.propTypes = {
    subHeading: PropTypes.string,
    heading: PropTypes.string
}

export default HeadingTitle;