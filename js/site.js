//Get the string from the page
//controller function
function getString(){
    
    document.getElementById("alert").classList.add("invisible");
    
    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

//Reverse the string
//logic function
function reverseString(userString){

    let revString = [];

    //Reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];        
    }

    return revString;
}

//Display the Reversed string to the page
//view function
function displayString(revString){

    //write the string to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}