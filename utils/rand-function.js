export function getRandNum(someArray) {
    const index = Math.floor(Math.random() * someArray.length);
    return someArray[index];
}