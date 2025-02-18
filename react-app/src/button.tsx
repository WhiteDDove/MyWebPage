import "./button.css"

interface Text {
    textAtr: string;
    onButtonClick: () => void;
}

function MyButton({textAtr,onButtonClick}: Text) {

    return (
        <>
            <button className="mybutton" onClick={onButtonClick}> {textAtr}</button>
        </>
    );
}

export default MyButton;