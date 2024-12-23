function solution(a, b) {
    var answer = Math.max(Number(`${a}${b}`),Number(`${2 * a * b}`));
    return answer;
}