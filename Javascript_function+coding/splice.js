var a = [0,1,2,3,4,5];

// 2번 배열 부터 3개 제거

var b = a.splice(2,3);

console.log(a); // 결과 : [0,1,5]
console.log(b); // 결과 : [2,3,4]

var d = [0,1,2,3,4,5];

// 1과 2를 지우고 거기에 7을 넣어보겠습니다. 

var c = d.splice(2,0,"7");

console.log(d); // 결과 : [0,1,2,3,4,5]

// 2번 자리에 들어갑니다. 

console.log(c); // 결과 : [0,1,7,2,3,4,5]

// 끼어 넣기 이용 가능 

