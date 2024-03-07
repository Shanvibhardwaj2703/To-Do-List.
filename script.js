const inputbox=document.getElementById("input-box");
const listContainer = document.getElementById("list-Container");

//Add button
function addTask(){
    if(inputbox.value ==''){
        alert("you must write something");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        // cross sign
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputbox.value="";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
 
// when be refresh the web page then our data do not get delete


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// whenever open web pages again then it show  again all data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();