function random(min, max){
    return Math.floor(Math.random()* (max - min +1) + min);
}

const ELEMENTOS = 100;// 100

const randomArr = new Array(ELEMENTOS).fill(null).map(() =>random(1, 20))
console.log("🚀 ~ file: randomGenerator.js:8 ~ randomArr:", randomArr)

