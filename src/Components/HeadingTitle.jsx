import PropTypes from "prop-types";

const HeadingTitle = ({subHeading,heading}) => {
    return (
        <div className="text-center my-4">
            <h1 className="text-yellow-600 mb-2">---{subHeading}---</h1>
            <div className="w-3/5 md:w-1/3 mx-auto">
                <p className="py-4 px-2 text-4xl border-y-2 uppercase">{heading}</p>
            </div>
        </div>
    );
};

HeadingTitle.propTypes = {
    subHeading: PropTypes.string,
    heading: PropTypes.string
}

export default HeadingTitle;