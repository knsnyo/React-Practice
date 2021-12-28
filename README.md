# React-Practice

just do it.
- Book: 초보자를 위한 REACT 200제

---

함수컴포넌트로 바꾸기

class -> function

state관리-> useState()

componentDidmount, ... -> useEffect()

reducer -> useReducer()

context -> useContext()

---

redux 느낌
1. Provider에서 export const Context = React.createContext()
2. init, reducer 만들고 const [state, dispatch] = useReducer(reducer, init)
3. <Context value={{state, dispatch}}/>
4. Consumer에서 const {state, dispatch} = useContext(Context)
5. dispatch({ type: '실행할 거' value: '넘겨줄 거'})
6. value 받은 것은 reducer에서 action.value로 받음.

---

SPA(Single Page Application)을 위한 react-router-dom
1. npm install react-router-dom --save
2. Route, Routes, BrowserRouter, (Link) import
3. BrowserRouter > Routes > Route
4. Route의 path에 경로, element에 component를 prop으로 넣고 exact를 넣는다.
5. Link to={path}하면 이동 된다.
