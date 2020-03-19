// 어떤 수를 입력받아 그 수의 약수를 모두 더한 수 sumDivisor 함수를 완성해 보세요.
// 예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고, 총 합은 28이 되므로 28을 반환해 주면 됩니다.

function sumDivisor(inputNum) {
    let sum =0;
    for(let i=1; i<=inputNum; i++){
        if(inputNum % i === 0)
        sum+=i;
    }
    return sum;
}

console.log(sumDivisor(12));
