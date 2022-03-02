
import './App.css';
import {useState} from "react";

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

    const [num, setNum] = useState(5);

    let sample=[
        {id:1,name:"홍길동"},
        {id:2,name:"임꺽정"},
        {id:3,name:"장보고"},
        {id:4,name:"이순신"}
    ]
    console.log("App 실행됨")
    const [users, setUsers] = useState(sample); // 레퍼런스 변경되야 동작

    const download= ()=>{
        // fetch().then().then();
        // 기존 데이터 세팅
        setUsers([...sample,{id:num,name:"길동"}]);
        setNum(num +1);
    }

    // 렌더링 시점 = 상태값 변경
    return (
        <div>
        <button onClick={download}>다운로드</button>
            {users.map(u=><h1>{u.id},{u.name}</h1>)}
        </div>
    );
}

export default App;
