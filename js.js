function validateForm() {                                         //checks if users input is valid
    const firstname = document.getElementById('firstname').value; //ids from html elements
    const lastname = document.getElementById('lastname').value;
    const zipcode = document.getElementById('zipcode').value;


    if (firstname.length + lastname.length > 20) {  //This adds the characters of the first name and last names and confirms if its greater than 20
        alert("Cannot exceed 20 characters");       //alerts user there is too many characters
        return false;                               //if there is, it will return
    }
    if (zipcode.length !== 5 || isNaN(zipcode)) {  //This checks if the length of the code isnt 5. If its not exactly 5 then its not acceptable.
        alert("Zip Code Must Be 5 numbers");       //Alerts user if theres not 5 numbers
    return false;                                   //returns if false
}

    alert("Registration successful");             //at last if everything the user input is valid it alerts success
    document.getElementById("secretMessage").style.display = "block"; //displays my secret image if all inputs submitted, are valid by getting the Element by its id
}
