import {useState} from "react";
import './NotAbutton.scss';


type NotAButtonProps = {
    onClick: (isChecked: boolean) => void;
}

const NotAButton: React.FC<NotAButtonProps> = ({onClick}) => {
    const [isChecked, setIsChecked] = useState(false);



    const handleClick = () => {
        setIsChecked(!isChecked);
        onClick(!isChecked)
    }


    return (
        <div className= {`notabutton-button ${isChecked ? 'checked' : ""}`} onClick={handleClick}>
            I am not a button
        </div>
    )
}

export default NotAButton;
