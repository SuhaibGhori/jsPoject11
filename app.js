var ulElement = document.getElementById("list");
function addTodo() {
    var input = document.getElementById("todoInput");

    if (input.value) {
        var liElement = document.createElement("li");
        var liText = document.createTextNode(input.value);
        liElement.style.border = "1px solid white";
        liElement.appendChild(liText);
        ulElement.appendChild(liElement);
        
        // Create Delete Button liElement
var delBtnElement = document.createElement("button");
var delBtnText = document.createTextNode("Delete");
delBtnElement.style="background-color:#2D5FE9 ;border-radius:10px;border: 1px solid black;padding:4px 7px;"
delBtnElement.appendChild(delBtnText);
liElement.appendChild(delBtnElement);

delBtnElement.setAttribute("onclick","deleteSingleItem(this)");

// Create edit button liElement
var editBtnElement = document.createElement("button");
var editBtnText = document.createTextNode("Edit");
editBtnElement.style="background-color:#2D5FE9 ;border-radius:10px;border: 1px solid black;padding:4px 7px;"
editBtnElement.appendChild(editBtnText);
editBtnElement.setAttribute("onclick","editItem(this)");
liElement.appendChild(editBtnElement);
input.value = ""
}
else{
   alert("Fill the Field First....");
}
}

function deleteAllItems() {
    ulElement.innerHTML = "";
}

function deleteSingleItem(e) {
e.parentNode.remove();
    
}

function editItem(e) {
var updateVal = prompt("Enter updated value....");
e.parentNode.firstChild.nodeValue = updateVal
    
}