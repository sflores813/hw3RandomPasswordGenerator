// generate random password
function generate(){

    //set password length/complexity
    var complexity = document.getElementById("slider").value;
    
    //possible password values
    var values = "ABCDEFGHEIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+";

    var password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //adds password to the textbox/display area
    document.getElementById("display").value = password;

    //add oassword to previously generated passwords
    document.getElementById("lastNums").innerHTML += password + "<br />";

}

// set default lengh display to 68
    document.getElementById("length").innerHTML = "length:69";

    //function for the length based of the slider loctation
    document.getElementById("slider").oninput = function(){

        if(document.getElementById("slider").value>0){
            document.getElementById("length").innerHTML = "length:" + document.getElementById("slider").value;
        }
        else {
            document.getElementById("length").innerHTML = "length:1";
        }
    }

// function to copy too clip board
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("The password was copied to your clipboard!");

}