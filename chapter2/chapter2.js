/* 변수 */
var pizza=true; // 변수
const ham=true; // 상수
let topic="지역변수"

/* 문자열 */
var last_name = "Kim"
var first_name = "Jang"
var middle_name = "Hyun"

// 예전 vs 지금
console.log(last_name+", "+first_name+middle_name)
console.log(`${last_name}, ${first_name}${middle_name}`)

// 공백도 유지 됨
var article=`
${first_name} Hello

${last_name} Hello

${middle_name} Hello
`
console.log(article)

/* 기본 설정 파라미터 */
function logActivity1(name='kim', activity='tennis'){
    console.log(`${name}is like ${activity}.`)
}

/* 구조체 느낌 */
var default_people={
    name:{
        first:'Hoon',
        last:'Oh'
    },
    activity:'Tennis'
}
function logActivity2(p=default_people){
    console.log(`${p.name.first} is like ${p.activity}.`)
}

/* 화살표 함수 */
var lordify=function(first_name, land) {
    return `${first_name} of ${land}.`
}
var lordify=(first_name, land)=>`${first_name} of ${land}.`

