// taking id of p tag by using querry selector
const paraTag = document.querySelector("p");

alert("Start counter");

let i= prompt("start point of counter?");
paraTag.innerHTML = i;
let setInter = setInterval(() => {
    --i;
    paraTag.innerHTML = i;
    if(i==0){
        stopInterval();
    }
}, 1000);

function stopInterval() {
    alert("stopping interval");
    clearInterval(setInter);
}