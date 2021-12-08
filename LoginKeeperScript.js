function checkCreds() {
    //This is where the first name input is processed to see if it meets the requirements in the code.
    var FirstName = document.getElementById("FirstName").value;
    //Like the first name, this is where the last name is processed.
    var LastName = document.getElementById("LastName").value;
    //This is where the users badge code is processed.
    var BadgeCode = document.getElementById("CodePart").value;
    //This variable puts the first and last name, along with the badge code, together for the user.
    var CredInfo = FirstName + " " + LastName + " #" + BadgeCode;
    //This "if" tells the program that if the users input goes over 20 or under 4 characters, it will tell the user that their access os denied.
    //The "if", "else if", and "else" will replace the login status prompt. 
    if (CredInfo.length >20 || CredInfo.length <4) {
        document.getElementById("LoginStatus").innerHTML = "User not recognized, Access Denied";
    }
    //This tells the program that the three digit badge code can only go up to 999 or as low as 100. 
    else if (BadgeCode >999 || BadgeCode <100) {
        document.getElementById("LoginStatus").innerHTML = "Badge code incorrect, Access Denied";
    }
    //If the "if" and "else if" aren't triggered, then they have put in the right credentials and will move on to the next page.
    else {
        alert("Access Granted, Welcome " + CredInfo + "!");
        //This is the code that will transfer the user to the coundown timer, if they put in the right credentials
        location.replace("CountdownLoopPrgm2.html");
    }
}