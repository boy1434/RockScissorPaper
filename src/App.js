import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 1. 박스 2개(타이틀, 사진,결과)
// 2. 가위바위보 버튼이있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨ㅓ는 랜덤하게 아이템 선택이 된다
// 5. 3 4 결과로 승패를 따진다
// 6. 승패 결과에 따라 테두리 색이 바뀐다(이기면 초록, 지면 빨강, 비기면 검정)

const choice = {
  rock:{
    name: "Rock",
    img:"https://feelstory.com/gnu/nori/img/2_on.png" 
  },
  scissors:{
    name: "Scissor",
    img:"https://feelstory.com/gnu/nori/img/1_on.png"
  },
  paper:{
    name: "Paper",
    img:"https://feelstory.com/gnu/nori/img/3_on.png"
  },

};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice)=>{
   setUserSelect(choice[userChoice]);
   let computerChoice = randomChoice() ;
   setComputerSelect(computerChoice);
   setResult(judgement(choice[userChoice],computerChoice));
  }

  const judgement = (user, computer) => {
    
    // user === computer = tie
    // user == rock, computer == scissor user Win
    // user == rock, computer == paper user Lose

    if(user.name === computer.name){
      return "tie"
    } else if(user.name == "Rock") {
      return computer.name == "Scissor" ? "win" : "lose"
    } else if(user.name == "Scissor"){
      return computer.name == "Paper" ? "win" : "lose"
    } else if(user.name == "Paper"){
      return computer.name == "Rock" ? "win" : "lose"
    }
  }

  const randomChoice = () => {
    let itemArr = Object.keys(choice); // 객체에 키값만 뽑아서 어레이로 만들어주는 함수
    console.log(itemArr)
    let randomItem = Math.floor(Math.random()*itemArr.length);
    let final = itemArr[randomItem]
    return choice[final];
  }

  return (
    <div>
      <div className='box-area'>
        <Box name="You" item={userSelect} result={result}/>
        <Box name="Computer" item={computerSelect} result={result}/>
      </div>

      <div className='button-area'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  )
}

export default App;
