var restart = document.getElementById("restart").addEventListener("click",clear);
var task = document.querySelector(".task");
var btn = document.getElementById("result");
var a = document.querySelectorAll(".drag-zone li");
var area1 = document.querySelector("#box-one"); 
var area2 = document.querySelector("#box-two"); 
var area3 = document.querySelector("#box-three"); 
var drag_task;

function clear(){
    window.location.reload();
}

btn.addEventListener("click",function(){
    debugger;
    if(btn.value == "start"){
        for(let i=0;i<a.length;i++){
            a[i].draggable = true;
        }
        btn.value = "STOP";
    }
    else{
        for(let i=0;i<a.length;i++){
            a[i].draggable = false;
        }
        btn.value = "START"; 
    }
    
});

document.addEventListener("dragstart", function(event) {
    drag_task = event.target.id;
    event.dataTransfer.setData("Text",drag_task); 
});

document.addEventListener("dragenter", function(event) {
    event.preventDefault();
});

document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.addEventListener("drop", function(event) {
    if(event.target == area1 || event.target == area2 || event.target == area3){
        event.target.append(document.getElementById(drag_task));  
    }
});