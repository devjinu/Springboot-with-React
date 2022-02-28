import logo from './logo.svg';
import './App.css';

// 1. return시에 하나의 Dom만 리턴할 수 있다
// 2. 변수선언은 let 혹은 const로만 해야함

let a= 10; // 변수
const b = 20; // 상수
function App() {
    return (
        <div>
            <div>안녕{a}</div>
            <h1>헤딩태크{b}</h1>
        </div>
    );
}

export default App;
