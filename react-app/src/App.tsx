import { useState } from "react"
import MyButton2 from "./button2";
import "./App.css"


function App() {
  const [boardState,useboardState] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true);
  const [winnerTitle,SetWinnerTitle] = useState("");

  function ClickHandler(position:number) {
    let tempBoard = boardState;
    

    if (tempBoard[position] || winnerTitle != "")
      return null;

    if(xIsNext)
      tempBoard[position] = "X";
    else
      tempBoard[position] = "O";

    setXIsNext(!xIsNext);
    useboardState(tempBoard);
    winner();

  }

  function winner() {
    let winPos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i=0; i<=7; i++)
    {
      if(boardState[winPos[i][0]] && boardState[winPos[i][1]] === boardState[winPos[i][2]] && boardState[winPos[i][0]] === boardState[winPos[i][1]] )
      {
        SetWinnerTitle("The winner is " + boardState[winPos[i][0]]);
        return boardState[winPos[i][0]];
      }
    }
  }

  return (
    <> 
      <div className="divLine">
        <MyButton2 textAtr={boardState[0]} onButtonClick={() => ClickHandler(0)}></MyButton2>
        <MyButton2 textAtr={boardState[1]} onButtonClick={() => ClickHandler(1)}></MyButton2>
        <MyButton2 textAtr={boardState[2]} onButtonClick={() => ClickHandler(2)}></MyButton2>
      </div>
      <div className="divLine">
        <MyButton2 textAtr={boardState[3]} onButtonClick={() => ClickHandler(3)}></MyButton2>
        <MyButton2 textAtr={boardState[4]} onButtonClick={() => ClickHandler(4)}></MyButton2>
        <MyButton2 textAtr={boardState[5]} onButtonClick={() => ClickHandler(5)}></MyButton2>
      </div>
      <div className="divLine">
        <MyButton2 textAtr={boardState[6]} onButtonClick={() => ClickHandler(6)}></MyButton2>
        <MyButton2 textAtr={boardState[7]} onButtonClick={() => ClickHandler(7)}></MyButton2>
        <MyButton2 textAtr={boardState[8]} onButtonClick={() => ClickHandler(8)}></MyButton2>
      </div>
      <h2 className="center">{winnerTitle}</h2>
    </>
  );
}

export default App
