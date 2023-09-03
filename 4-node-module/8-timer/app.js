let num = 1;
const interval = setInterval(() => {
  console.log(num++);
}, 1000); // 1000ms 마다 실행

setTimeout(() => {
  console.log('Timeout!');
  clearInterval(interval);
}, 6000); // 6000ms간
