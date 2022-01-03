## 요약본
  * 진짜 공부하기 싫다.
  * 그런 미래의 나를 위해 준비했습니다.
  * JS 할 줄 모르면 힘드니까 파이팅 ^^

***

## 설치
1. node.js 설치하셈.
- 손 있으면 구글 검색해서 다운로드 하셈.

2. 콘솔창 띄우고 원하는 작업 디렉터리로 가셈.
```
cd 니가 원하는 작업 디렉터리 장소
```

3. node.js 깔렸는지 확인하셈.
```
node -v
npm -v
```

4. create-react-app (CRA) 설치하셈.
```
npm install -g create-react-app
```

5. 프로젝트 만드셈
```
create-react-app 프로젝트명
```

6. 프로젝트로 디렉터리 이동하고 실행하셈
```
cd 프로젝트명
npm start
```

그러면 뜰 거임.

* 나 안 뜨는데?
  * yarn 깔아서 하거나 나도 모름 구글링하셈.

***

## 변수
* props = 부모 컴포넌트한테 받아온 거(변경 불가)
* state = 내 안에 있는 변수(변경 가능)

***

## 함수 컴포넌트는 state 없는데?
-> useState 쓰셈. 생김.
```
// 이거 App.js 임.
import React, { useState } from 'react';

export default () => {
  // state는 변수고 setState로 변경해
  const [state, setState] = useState('어떻게 하지?');

  return(
    <>
      <h1> {state} </h1>
      <button onClick={()=>setState('알아서 하자')}> 변경 버튼 </button>
    </>
  )
}
```
state는 setState()로 변경하자.

---

## 함수 컴포넌트는 componentDidMount(), componentDidUpdate() 이거 어떻게 함?
-> useEffect 쓰셈.
- componentDidMount()
맨 처음 한 번만 실행
```
// 이거 App.js 임.
import React, { useEffect } from 'react'

export default () => {
  useEffect(()=>{
    alert('하고싶은 거 알아서 하자');
  }, []);
  
  return(
    <h1> 알아서 하자 </h1>
  )
}
```
- componentDidUpdate()
무언가 변경시 실행
```
// 이거 App.js 임.
import React, { useState, useEffect } from 'react'

export default () => {
  const [state, setState] = useState(0)
  useEffect(()=>{
    progressbar();
  }, [state]);
  
  const progressbar = () = {
    setTimeout(() => {
      setState(state + 1)
    }, 1000);
  }
  
  return(
    <h1> 알아서 하자 </h1>
    <p> {state} </p>
  )
}
```

***

## Context, Redux 같은 거 왜 씀?

만약 부모의 부모의 부모의 <핸드폰>을 받아와야 한다면?

- Context, Redux 없을 때
```
나: (증조할머니 폰 필요함)
나: "엄마! 나 증조 할머니 폰 좀."
엄마: "엄마! 나 할머니 폰 좀."
할머니: "엄마! 나 폰 좀."
증조할머니: "이거 가져가라."
할머니: "이거 가져가라."
엄마: "이거 가져가라."
나: (속 터져 죽음)
```
- Context, Redux 쓰면
```
나: (증조할머니 폰 필요함)
나: "증조할머니 나 폰 좀"
증조할머니: "서랍에 있다"
나: (서랍에서 꺼내감)
```

핸드폰이 state 임.

-> 귀찮기 싫으면 useReducer랑 useContext 쓰셈.

1. 제공자
```
// 제공자.js 만드셈.
import React, { useReducer } from 'react';
import 소비자 from '소비자 경로';

// React 적기 싫으면 import 하셈
export const Context = React.createContext();

// 이거 초기 값 설정임.
const initialState = {
   point: 0,
}

export default () => {
  // reducer랑 초기 값 넣으셈.
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return(
    <Context.Provider value={{state, dispatch}}>
      <h1> 알아서 하자 </h1>
      <p> {state.str} </p>
      <소비자/>
    </Context.Provider>
  )
}

// 어려우면 useState 모아 놓은 거라고 생각하셈.
const reducer = (state, action) => {
 switch(action.type){
   case 'PLUS':
     return{
       ...state,
       point: action.value,
     };
   case 'MINUS':
     return{
       ...state,
       point: action.value,
     };
   default:
     return {initialState};
 }
}
```
2. 소비자
```
// 소비자.js 만드셈.
import React, { useContext } from 'react';
import { Context } from '제공자 경로';

export default () => {
  const {state, dispatch} = useContext(Context);
  
  return(
    <>
      <button onClick={()=>{dispatch({type: 'PLUS', value: state.point + 1})}> 누르면 커짐 </button>
      <button onClick={()=>{dispatch({type: 'MINUS', value: state.point - 1})}> 누르면 작아짐 </button>
    </>
  )
}
```
예제가 안 이쁨. 더 이쁘게 만들어 봄.

* Hooks 쓰기 싫은데?

-> 딴 거 쓰셈.

1. Context API
알아서 쓰셈.

2. reducer
console에 치셈.
```
npm insatll redux --save
```
알아서 쓰셈.

3. react-redux
console에 치셈.
```
npm install react-redux --save
```
알아서 쓰셈.
***

## SPA(Single Page Application)을 위한 react-router-dom

console에 치셈.
```
npm install react-router-dom --save
```
App.js에 추가하셈.
```
// 이거 App.js 임.
import React from 'react'
// BrowerRouter 기니까 Router 만 적을 거임. 
import { BrowserRouter as Router, Routes, Route Link } from 'react-router-dom'
import 라우터1 from '라우터1 경로

export default () => {
  return(
    <Router>
      {/* header 넣으셈 */}
      <Link to={'./라우터1'}> 라우터1로 이동 </Link>
      <Routes>
        <Route exact path='/라우터1' element={<라우터1/>}/>
      </Routes>
      {/* footer 넣으셈 */}
    </Router>
  }
}
```
라우터1.js 만드셈
```
import React from 'react'

export default () => {
  return(
    <h1> 보여주고 싶은 거 알아서 좀 적으셈 </h1>
  )
}
```
Route 속성 중에 exact 안 적으면 겹치는 거 다 나옴 적으셈.
path 는 주소창 경로임.
element에 띄우고 싶은 컴포넌트 적으면 됨.
랜더링 안 버벅거림 ^^7

---

Ajax(Asynchronous javascript and xml)

나중에 적자 귀찮다.
