function addtodo() {
    var item = document.getElementById("addtodos").value;
    var ul = document.getElementById("todos");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + item));
    ul.appendChild(li);
    document.getElementById("addtodos").value = "";
    li.onclick = removeItem;
}

document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
        addtodo();
    }
};

function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
}