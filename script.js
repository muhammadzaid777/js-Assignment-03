// CHAPTER 9-11

// Q1

// // Take city input from user
// var city = prompt("Enter your city name:");

// if (city && city == "Karachi") {
//    document.write("Welcome to city of lights");
// }if (city && city == "Islamabad") {
//     document.write("The Beautiful Capital");
// }if (city && city == "Lahore") {
//     document.write("The Heart of Pakistan");
// }if (city && city == "Peshawar") {
//     document.write("The City of Flowers");
// }if (city && city == "Sukkur") {
//     document.write("The Gateway to Sindh");
// }

// Q2
// var gender = prompt("What is your Gender?")

// if( gender && gender == "Male"){

//     alert("Good Morning Sir");
// } if ( gender && gender == "Female") {

//     alert("Good Morning Ma'am");
// }

// Q3
// var signalcolor = prompt("Enter the traffic signal color (Red, Yellow, Green):")

// if ( signalcolor && signalcolor == "Red"){
//     alert("Must Stop")

// }if ( signalcolor && signalcolor == "Yellow"){
//     alert("Ready to move")

// }if ( signalcolor && signalcolor == "Green"){
//     alert("Move now")

// }

// Q4
// var fuel = prompt("Remaining fuel in Car?")

// if( fuel < 0.25 ){

//     alert("Please refill the fuel in your car")
// }

// Q5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");

// // YES

// }var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// // NO

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

// // NO

// if (c === 13){
// alert("condition 2 is true");
// }

// // YES

// if (++c < 14){
// alert("condition 3 is true");

// // NO

// }
// if(c === 14){
// alert("condition 4 is true");
// }

// YES

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// YES

// if (true){
// alert("True");
// }

// // YES

// if (false){
// alert("False");
// }

// NO

// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// Q6
// var sub1 = +prompt("Enter marks obtained in Subject 1:");
// var sub2 = +prompt("Enter marks obtained in Subject 2:");
// var sub3 = +prompt("Enter marks obtained in Subject 3:");
// var totalMarks = +prompt("Enter total marks:");


// var totalmarksobtained = (sub1 + sub2 + sub3)
// var percentage = ( totalmarksobtained / totalMarks) * 100

// var grade;
// var remarks;

// if( percentage >= 80){
//     grade = "A-One"
//     remarks = "Excelent"
// }else if( percentage >= 70){
//     grade = "A"
//     remarks = "Good"
// }else if( percentage >= 60){
//     grade = "B"
//     remarks = "You need to emprove"
// }else{
//     grade = "Fail"
//     remarks = "sorry"
// }
// document.write("Marks Sheet<br>")
// document.write("Total marks : " + totalMarks + "<br>")
// document.write("Marks obtained : " + totalmarksobtained + "<br>")
// document.write("Percentage : " + percentage + "%<br>")
// document.write("Grade : " + grade + "<br>")
// document.write("Remarks : " + remarks)

// Q7
// var userGuess = +prompt("Guess number between 1 to 10 ?")

// var secretNum = 7

// if( userGuess == secretNum){

//     alert("Bingo! Correct answer");
// }
// else if( userGuess + 1 === secretNum){

//     alert("Close enough to the correct answer");
// }
// Q8
// var num = +prompt("Enter a number to check if it's divisible by 3:");

// if (num % 3 === 0) {
//     alert("The number " + num + " is divisible by 3.");
// }
// Q9
// var num = +prompt("even number or an odd number:");

// if (num % 2 === 0) {
//     alert("The number " + num + " is even.");
// }else{
//     alert("the number " + num + " is is odd.");
// }
// Q10
// var weatherInput = +prompt("Input the temperature:")

// if(weatherInput >= 40){
//       alert("It is too hot outside.")
// }else if(weatherInput >= 30){
//       alert("The Weather today is Normal..")
// }else if(weatherInput >= 20){
//       alert("Today’s Weather is cool.")
// }else if(weatherInput >= 10){
//       alert("OMG! Today’s weather is so Cool.")
// }
// Q11
// var inputNum1 = +prompt("Input a number one for calculation:")
// var inputNum2 = +prompt("Input a number two for calculation:")
// var operation = prompt("Enter operation (+, -, *, /, %):")

// var result;

// if(operation === "+"){
//     result = inputNum1 + inputNum2
//    alert( inputNum1 + " + " + inputNum2 + " = " + result)
// }else if(operation === "-"){
//     result = inputNum1 - inputNum2
//    alert( inputNum1 + "- " + inputNum2 + " = " + result)
// }else if(operation === "*"){
//     result = inputNum1 * inputNum2
//    alert( inputNum1 + " * " + inputNum2 + " = " + result)
// }else if(operation === "/"){
//     result = inputNum1 / inputNum2
//    alert( inputNum1 + " / " + inputNum2 + " = " + result)
// }else if(operation === "%"){
//     result = inputNum1 % inputNum2
//    alert( inputNum1 + " % " + inputNum2 + " = " + result)
// }

