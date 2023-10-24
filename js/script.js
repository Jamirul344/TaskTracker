const addText =document.getElementById("add-text");
const list= document.getElementById("list-container");

function addTask(){
    if(addText.value ===''){
        alert("Please Enter Task");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = addText.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "&#10005;";
        li.appendChild(span);
    }
    addText.value="";
    saveData();

}

list.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showData(){
    list.innerHTML = localStorage.getItem("data")
}

showData();