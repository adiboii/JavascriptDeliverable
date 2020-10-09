function welcomeText(){
    document.getElementById("js-text").innerHTML = "Welcome to my <br> very special page"; 
}

function loadPage2(){
  
    const home = document.getElementById("home");


    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const image1 = document.createElement("img");
    const image2 = document.createElement("img"); 
    image1.setAttribute("id", "image-1");
    home.appendChild(image1);
    image1.src = "Images/logo.png";
    p1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quas? Labore eligendi magni architecto reiciendis esse veniam, consectetur in eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quas? Labore eligendi magni architecto reiciendis esse veniam, consectetur in eos?";
    home.appendChild(p1);
    image2.setAttribute("id", "image-2");
    image2.src = "Images/2.jpg";
    p1.appendChild(image2);
    p2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, modi porro ut unde amet quaerat autem ipsa vel beatae et nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, modi porro ut unde amet quaerat autem ipsa vel beatae et nesciunt."
    home.appendChild(p2);
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



