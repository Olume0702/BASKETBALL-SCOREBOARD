'use strict'
const heading = document.querySelector('.homescore')
const increase1 = document.querySelector('.inc')
const increase2 = document.querySelector('.res')
const increase3= document.querySelector('.dec')
const heading1 = document.querySelector('.guestscore')
const increase11 = document.querySelector('.inc1')
const increase22 = document.querySelector('.res2')
const increase33= document.querySelector('.dec3')
const newGAME= document.querySelector('.btn1')
let count = 0

function increaseByOne(){
    count++
    heading.innerText = count
}
increase1.addEventListener('click',increaseByOne)


function increaseByTwo(){
    count += 2


    heading.innerText = count
    

}
increase2.addEventListener('click',increaseByTwo)



function increaseByThree(){
    count += 3
    heading.innerText = count
}
increase3.addEventListener('click',increaseByThree)

function getNEWGAME(){
    // heading.innerText=0
    // heading1.innerText=0
    count=0
    if (count ===0) {
        heading.innerText=count;
        heading1.innerText=count;
    }
    
}
newGAME.addEventListener('click',getNEWGAME)
//================
function increaseByOneA(){
    count++
    heading1.innerText = count
    
}
increase11.addEventListener('click',increaseByOneA)


function increaseByTwoB(){
    
    count+=2
    heading1.innerText = count
}
increase22.addEventListener('click',increaseByTwoB)



function increaseByThreeC(){
    
    count+=3
    heading1.innerText = count
}
increase33.addEventListener('click',increaseByThreeC)