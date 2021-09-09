import './InputName.css';

const InputName = ({label, onChange}) => {
    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return(
        <div>
            <p className={'label'}>{label}</p>
            <input className={'input-name'} type="text" onChange={handleChange}></input>
        </div>
    );
};

export default InputName;