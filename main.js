"use strict";

console.log("hello world");
window.onload = (
function count(id, start, end, duration) {
    let speed = 1000;
    let range = end - start;
    let current = start;
    let increment = end > start? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));
    let counter = document.getElementById("counter");
    let timer =  setInterval(function() {
        current += increment;
        counter.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, step);


    count("counter", 0, 1423, 6000)

})