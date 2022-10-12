import data from "./data.js";

const left = document.querySelector("i.fa-chevron-left");
const right = document.querySelector("i.fa-chevron-right");

const name = document.querySelector(".name");
const designation = document.querySelector(".designation");
const review = document.querySelector(".review-text");
const pic = document.querySelector(".pic");
let num = 0;
updateContent();

left.addEventListener("click",function(){
    if(num !== 0){
        num-=1;
    }else{
        num= data.people.length - 1;
    }
    updateContent();
})

right.addEventListener("click",function(){
    if(num !== (data.people.length - 1)){
        num+=1;
    }else{
        num= 0;
    }
    updateContent();
})

function updateContent(){
    name.innerText = data.people[num].name;
    designation.innerText = data.people[num].designation;
    review.innerText = data.people[num].review;
    pic.setAttribute("src",data.people[num].image);
}
