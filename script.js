var questionBank= [
    {
        question : 'HTML stands for ',
        option : ['HighText Machine Language','HyperText and links Markup Language','HyperText Markup Language','HyperText Markup Language'],
        answer : 'HyperText Markup Language'
    },
    {
        question : 'The correct sequence of HTML tags for starting a webpage is',
        option : ['Head, Title, HTML, body','HTML, Body, Title, Head','HTML, Head, Title, Body','HTML, Head, Title, Body'],
        answer : 'HTML, Head, Title, Body'
    },
    {
        question : 'What are the types of unordered or bulleted list in HTML?',
        option : ['disc, square, triangle','polygon, triangle, circle','disc, circle, square','All of the above'],
        answer : 'disc, circle, square'
    },
    {
        question : 'Which of the following HTML attribute is used to define inline styles?',
        option : ['style','type','class','None of the above'],
        answer : 'style'
    },
    {
        question : 'The property in CSS used to change the background color of an element is',
        option : ['bgcolor','color','background-color','All of the above'],
        answer : 'background-color'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}


function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}


function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}


next.addEventListener('click',nextQuestion);


function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();