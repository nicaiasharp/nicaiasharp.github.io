//this is for the two truths and a lie game

//global variable
let fname = "";

//greet function
function greet() {
    let greetParagraph = document.getElementById("greet");

    //get values from form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    //show results
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!";

}

//trivia func
function trivia () {
    let triviaAnswer = document.getElementById("trivia-answer");

    //getting result of selected input
    fname = document.getElementById("fname").value;
    let chocoSelected = document.getElementById("choco").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    //now processing answers
    if (chocoSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong! You wish."
    } 
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong! I thought that was obvious."
    }
    else {
        triviaAnswer.innerHTML = fname + ", you are right! Congrats!"
    }
}

//ttl func
function ttl () {
    let ttlAnswer = document.getElementById("ttl-answer");

    //getting result of selected input
    fname = document.getElementById("fname").value;
    let dogSelected = document.getElementById("dog").checked;
    let catSelected = document.getElementById("cat").checked;
    let chickSelected = document.getElementById("chick").checked;

    //now processing answers
    if (dogSelected) {
        ttlAnswer.innerHTML = fname + ", you are wrong! I have 4 and they're all super cute."
    } 
    else if (catSelected) {
        ttlAnswer.innerHTML = fname + ", you are right! I don't have any."
    }
    else {
        ttlAnswer.innerHTML = fname + ", you are wrong! I have an infinite supply of eggs."
    }
}

function challenge () {
    let challengeAnswer = document.getElementById("challenge-answer");

    //getting result of selected input
    fname = document.getElementById("fname").value;
    let fallSelected = document.getElementById("fall").checked;
    let chaiSelected = document.getElementById("chai").checked;
    let holidaySelected = document.getElementById("holiday").checked;

    //now processing answers
    if (holidaySelected && fallSelected && chaiSelected) {
        challengeAnswer.innerHTML = fname + ", you have to choose two answers, not three."
    }
    else if (fallSelected && chaiSelected){
        challengeAnswer.innerHTML = fname + ", you are right! Happy fall!"
    } 
    else if (chaiSelected && holidaySelected) {
        challengeAnswer.innerHTML = fname + ", you are wrong, I love Christmas more than Halloween."
    }
    else if (fallSelected && holidaySelected) {
        challengeAnswer.innerHTML = fname + ", you are wrong, I love Christmas more than Halloween."
    }
    else {
        challengeAnswer.innerHTML = fname + ", you have to choose two answers, not one."
    }
}