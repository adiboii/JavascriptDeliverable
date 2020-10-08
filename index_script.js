function welcomeText(){
    document.getElementById("js-text").innerHTML = "Welcome to my <br> very special page"; 
}

function loadPage2(){
    document.getElementById("js-text").innerHTML = "Javascript"; 
    document.getElementById("text-1").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus modi odio dignissimos. Voluptatum quos reprehenderit dolore aspernatur illum?";
    document.getElementById("text-2").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas laborum atque voluptates veniam magni. Doloremque corrupti animi recusandae debitis, laborum voluptas fugit vero.";
    document.getElementById("text-3").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id assumenda illo, nisi voluptas laboriosam consectetur voluptatem!";
    document.getElementById("image-1").src = "Images/logo.png";
    document.getElementById('image-2').src = "Images/2.jpg"
}



function calculateAge(){
    let name = document.getElementById("name-input").value;
    let year = document.getElementById("year-input").value;
    var age = 2020-year; 
    document.getElementById("user-age").innerHTML = age;
}

function changeColor(){
    let color = document.getElementById('colorInput').value;
    var div = document.getElementById("colorBox");
    div.style.backgroundColor = color;
}


var questions = [
    "Hello! My name is Friday! What's your name?",
    "How are you doing today?",
    "How so?",
    "Well, I hope you have a great week ahead!",
    "Restart Friday?"
    
];

var num = 0;

function Response(){
    var input = document.getElementById('user-input');
    var output = document.getElementById('ans');


    if(input.value == ""){
        alert("Please input question.");
    }else if(num == 4){
        setTimeout(changeQuestion, 2500);
        num = 0;
        input.value="";
        input.setAttribute("placeholder", "Please wait");
    }else{
        if(num == 0){
            output.innerHTML = "Hello " + input.value + "!";
            input.value = "";
            num++;
            input.setAttribute("placeholder", "Please wait");
            setTimeout(changeQuestion, 2500);

        }else if(num == 1){
            output.innerHTML = "Oh wow!";
            input.value = "";
            num++;
            input.setAttribute("placeholder", "Please wait");
            setTimeout(changeQuestion, 2500);
        }else if(num == 2){
            output.innerHTML = "Oh I see.";
            input.value = "";
            num++;
            input.setAttribute("placeholder", "Please wait");
            setTimeout(changeQuestion, 2500);
        }else if(num == 3){
            output.innerHTML = "You're welcome! Goodbye!";
            input.value = "";
            num++;
            input.setAttribute("placeholder", "Please wait");
            setTimeout(changeQuestion, 2500);
            
        }
        
    }
    
}

function changeQuestion(){
    var output = document.getElementById('ans');
    var input = document.getElementById('user-input');
    input.setAttribute("placeholder", "Your response");
    output.innerHTML = questions[num];
    if(num == 4){
        userInput.value = "";
    }
}



