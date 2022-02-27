let row1=document.querySelector(".row1");
let row2=document.querySelector(".row2");
let select;

newGame();

function hard()
{
    row2.style.display="flex";
}

function easy()
{
    row2.style.display="none";
}

function newGame()
{
    select=true;
    document.querySelector(".top").style.backgroundColor="rgb(228, 173, 24)";
    document.querySelector(".menu span").style.opacity=0;
    for(let i=1;i<=6;i++)
    document.querySelector("#box"+i).style.opacity=1;
    generateRandomColor();
}

function generateRandomColor()
{
let a= Math.round(255*(Math.random())); 
let b= Math.round(255*(Math.random())); 
let c=Math.round(255*(Math.random()));
document.querySelector(".top h1").textContent="rgb("+a+", "+b+", "+c+")"
generateRandomColorBoxes();
}

function generateRandomColorBoxes()
{
    //choosing and coloring the right box
    window.d=1+Math.round(2*Math.random());
    document.querySelector("#box"+window.d).style.backgroundColor=document.querySelector(".top h1").textContent;
        
    for(let i=1;i<=6;i++)
    {
        if(i==window.d)
        continue;
        else{
            let a= Math.round(255*(Math.random())); 
            let b= Math.round(255*(Math.random())); 
            let c=Math.round(255*(Math.random()));
            document.querySelector("#box"+i).style.backgroundColor="rgb("+a+", "+b+", "+c+")";
        }
    }
}

//adding event listener to cards
for(let i=1;i<=6;i++)
{
    document.querySelector("#box"+i).addEventListener("click",function(e){
        if(!select){return;}
        if(e.target==document.querySelector("#box"+window.d))
        {
            successMessage();
            select=false;
        }
        else
        failureMessage(e.target);
    }
    )
}

function successMessage()
{

    for(let i=1;i<=6;i++)
    {
        document.querySelector("#box"+i).style.opacity=1;
        document.querySelector("#box"+i).style.backgroundColor=document.querySelector(".top h1").textContent;
    }
    document.querySelector(".top").style.backgroundColor=document.querySelector(".top h1").textContent;
    document.querySelector(".menu span").textContent="Woah! You got it right";
    document.querySelector(".menu span").style.opacity=1;
    
}

function failureMessage(selected){
    selected.style.opacity=0;
    document.querySelector(".menu span").textContent="Oops! Try Again";
    document.querySelector(".menu span").style.opacity=1;
}
