var myform = document.getElementById("myform");
var myinput = document.getElementById("myinput");
var myitem = document.getElementById("myitem");

myform.addEventListener('submit',function(event){
    event.preventDefault()
    createItem(myinput.value)
})

function createItem(inputItems){
    var items = `<li>${inputItems}
    <button onclick="deleteElement(this)">Delete</button> </li>`
    myitem.insertAdjacentHTML("beforeend",items)
    myinput.value = ""
    myinput.focus()
}
function deleteElement(ElementToDelete){
    ElementToDelete.parentElement.remove()
}

