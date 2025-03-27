import errorGif from '../../assets/404.gif'

const ErrorElement = () => {
    return (
        <div>
            <img src={errorGif} alt="" />
        </div>
    );
};

export default ErrorElement;