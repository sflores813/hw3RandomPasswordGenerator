// generate random password
function generate(){

    //set password length/complexity
    let complexity = document.getElementById("slider").values;
    
    //possible password values
    let values = "ABCDEFGHEIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //adds password to the textbox/display area
    document.getElementById("display").values = password;

}
