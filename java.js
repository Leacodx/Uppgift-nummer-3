console.log("--------------------------- functions in JS-------------------")

//Plan part 1, do const for veriable 

const helloBtn = document.querySelector("#helloBtn");
const goodbyetag = document.querySelector(".goodbyeTag");



//for function event 

helloBtn.addEventListener("click",
function (event) {
    goodbyetag.innerHTML ="Goodbye!"; });

console.log("---------------------------------------------------");