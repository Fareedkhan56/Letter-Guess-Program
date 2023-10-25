var userInput = prompt("enter value");

if (userInput.charCodeAt(0) >= 48 && userInput.charCodeAt(0) <= 57){
    document.write("Its A Number !");
}
else if (userInput.charCodeAt(0) >= 65 && userInput.charCodeAt(0) <= 90){
    document.write("Its A UpperCase Letter !");
}
else if (userInput.charCodeAt(0) >= 97 && userInput.charCodeAt(0) <= 122){
    document.write("Its A LowerCase Letter !");
}