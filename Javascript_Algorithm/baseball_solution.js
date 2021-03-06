function solution(baseball) {
    let answer = 0;
    const len = baseball.length;
    
    //123~987까지의 숫자 중 정답가능성이 있는 숫자를 찾는다.
    for (let i = 123; i <= 987; i++) {
        const number = i+"";
        //중복되는 숫자, 십의자리/일의 자리에 0이 존재하는 경우는 건너뛴다.
        if (number.charAt(0) == number.charAt(1) || number.charAt(1) == number.charAt(2) || number.charAt(2) == number.charAt(0) || number.charAt(1) == "0" || number.charAt(2) == "0")
            continue;
        
        let bflag = true;
        //사용자가 질문한 배열에 현재의 숫자를 대입하여 동일한 결과를 얻는지 체크한다.
        for (let j = 0; j < len; j++) {
            const callNumber = baseball[j][0]+"";
            const strike = baseball[j][1];
            const ball = baseball[j][2];
            
            //strike 체크
            let countStrike = 0;
            for (let k = 0; k < 3; k++) {
                if (number.charAt(k) === callNumber.charAt(k)) countStrike++;
            }
            
            if (countStrike !== strike) {
                bflag = false;
                break;
            } 
            //ball 체크
            let countBall = 0;
            for (let k = 0; k < 3; k++) {
                if (number.indexOf(callNumber.charAt(k)) !== -1) countBall++;
            }
            
            //strike가 체크 된 경우 ball을 판단할 때 체크되므로 제외시켜 주어야 한다.
            if (countBall - countStrike !== ball) {
                bflag = false;
                break;
            }
        }
        
        if (bflag) answer++;
    }
    
    return answer;
}