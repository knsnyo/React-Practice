## 요약본
  * 진짜 공부하기 싫다.

***
변수

---

* props = 부모 컴포넌트한테 받아온 거(변경 불가)
* state = 내 안에 있는 변수(변경 가능)

***

1. 함수컴포넌트도 Hooks을 쓰면 state가 생긴다.
```
import React, { useState } from 'react';

export default () => {
  const [state, setState] = useState('열심히 ');

  return(
    <>
      <h1>{state}</h1>
      <button onClick={()=>setState('알아서 하자')}>변경버튼</button>
    </>
  )
}
```
state는 setState()로 변경하자.

---

2. 함수 컴포넌트 componentDidMount(), componentDidUpdate() 는 useEffect를 쓰자
- componentDidMount()
맨 처음 한 번만 실행
```
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
```
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
    <p>{state}</p>
  )
}
```

5. reducer -> useReducer()
6. context -> useContext()

***

redux 느낌
1. Provider에서 export const Context = React.createContext()
2. init, reducer 만들고 const [state, dispatch] = useReducer(reducer, init)
3. <Context value={{state, dispatch}}/>
4. Consumer에서 const {state, dispatch} = useContext(Context)
5. dispatch({ type: '실행할 거' value: '넘겨줄 거'})
6. value 받은 것은 reducer에서 action.value로 받음.

---

SPA(Single Page Application)을 위한 react-router-dom

---

```
npm install react-router-dom --save
```
2. Route, Routes, BrowserRouter, (Link) import
3. BrowserRouter > Routes > Route
4. Route의 path에 경로, element에 component를 prop으로 넣고 exact를 넣는다.
5. Link to={path}하면 이동 된다.

---

Ajax(Asynchronous javascript and xml)
* fetch
1. get
```
