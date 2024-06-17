let button = document.querySelector(".button");
let californiaMessage = document.querySelector(".california");
let illinoisMessage = document.querySelector(".illinois");
let newyorkMessage = document.querySelector(".new-york");
let other = document.querySelector(".other");

button.addEventListener("click", function() {
    let state = document.querySelector(".state").value;

    // CODE ALONG
    // 1. Write an if statement that would display the california message if a user says they're from "California".
    if (state === "California" || "california") {
        californiaMessage.style.display = "block";
    } else if (state === "Illinois" || "illinois") {
        illinoisMessage.style.display = "block";
    } else if (state === "New York" || "new york") {
        newyorkMessage.style.display = "block";
    } else {
        other.style.display = "block";
    }
    
}); 
    //else if (state === "Illinois" || "illinois") {
        //alert("Hi Illinoisian!");
    //} else if (state === "New York" || "new york") {
      //  alert("Hi New Yorker!");
    //} else {
      //  alert("Hello person!")
    //}
    // CODE SOLO
    // 2. Write an else if statement that would display the illinois message if a user says they're from "Illinois".
    
    // 3. Write an else if statement that would display the new york message if a user says they're from "New York".
    
    // 4. Write an else statement that displays the other message if the user types in a different state.




// Finished early? 
//  - Add another state of your choosing!
//  - See if you can update your statements to accept a user typing the state in different ways: all caps, all lowercase, and first letter capitalized.
//  - This will be in our next lesson, but do some research and see if you can figure it out 💪
