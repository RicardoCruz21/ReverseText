//Get the string from the page
function getString(){
    
    //hide the alert box
    document.getElementById("alert").classList.add("invisible");
    
    let userString = document.getElementById("userString").value;

    //Call reverseString function
    let revString = reverseString(userString);

    //Call displayString function
    displayString(revString);
}

//Reverse the string
function reverseString(userString){

    let revString = [];

    //Reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];        
    }

    return revString;
}

//Display the reversed string to the page
function displayString(revString){

    //write the string to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}