import './Button.css';

const Button = ({label, route, onClick}) => {
    

    return(
        <button className={'button'} onClick={onClick}>{label}</button>
    );
};

export default Button;