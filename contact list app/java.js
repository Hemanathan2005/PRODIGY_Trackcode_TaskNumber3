
function dlt(event){
    event.target.parentElement.remove()
}





var overly = document.querySelector(".overlay")
var nw = document.querySelector(".new") 
function update(){
    overly.style.display="block"
    nw.style.display="block"
}


var overly = document.querySelector(".overlay")
var nw = document.querySelector(".new") 
function removed(){
    overly.style.display="none"
    nw.style.display="none"
}

var input0 = document.querySelector(".container")
var input1 = document.getElementById("int1")
var input2 = document.getElementById("int2")
var input3 = document.getElementById("int3")
var addboo = document.getElementById("addbook")

function insert(event){
    var input4 = document.createElement("div")
    input4.setAttribute("class", "box1")
    input4.innerHTML = `<h4>${input1.value}</h4>
    <h5>${input2.value}</h5>
    <p>${input3.value}</p>
    <button onclick="dlt(event)" class="btt"> Delete</button>
    <button onclick="edit(event)" class="btt"> Edit</button>`
    input0.append(input4)
}

var overly = document.querySelector(".overlay")
var nw = document.querySelector(".new") 
function edit(){
    overly.style.display="block"
    nw.style.display="block"
}
