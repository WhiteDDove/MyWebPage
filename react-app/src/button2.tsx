interface Text {
    textAtr: string;
    onButtonClick: () => void;
  }
  

function MyButton2({textAtr,onButtonClick}: Text) {

  return (
      <>
          <button className="mybutton" onClick={onButtonClick}> {textAtr}</button>
      </>
  );
}

export default MyButton2;