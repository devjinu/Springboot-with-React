import logo from './logo.svg';
import './App.css';

// 1. return시에 하나의 Dom만 리턴할 수 있다
// 2. 변수선언은 let 혹은 const로만 해야함
// 3. if사용 불가능 -> 삼항연산자(조건? true:false)
// 4. 조건부 렌더링 -> (조건 && 값)
// 5. css디자인 -> 1) 내부에 적는방법
//                2) 외부파일에 적는 방법
//                3) 라이브러리 사용(부트스트랩, component-styled)

let a = 10; // 변수
const b = 20; // 상수

function App() {
    let c;
    let d = undefined;
    console.log(1, c);

    const myStyle ={
      color: "red",
    };

    return (
        <div>
            <div style={myStyle}>안녕{a === 10 ? " a는 10입니다." : " a는 10이 아닙니다."}</div>
            <h1 className={"box-style"}>헤딩태크{b === 20 && '20입니다'}</h1>
            <hr/>
        </div>
    );
}

export default App;
