//first 3 users are with new messages
function changeColor(x, ) {
    x.style.backgroundColor = "#F5F9FC";
  }
  function backColor(x) {
    x.style.backgroundColor = "white";
  }
// mars for new messages
//function showMe() - htmlonclick=


  const notification = document.querySelector(".notification");
  const btn = document.getElementById("mark");
  
        btn.addEventListener("click", function () {
        notification.style.backgroundColor = "#F5F9FC";
          
   });

// Prevent default context menu:
    const div = document.getElementById("textMessage");
    div.addEventListener("contextmenu", (e) => {e.preventDefault()});

// Show hidden content:
    function myFunction() {
        const div = document.getElementById("newText");
        div.style.visibility = "visible";
        div.style.backgroundColor = "#F5F9FC";
        div.style.borderRadius = "12px";
          
}
//for the red dots on the new messages
function redMark() {
    const div = document.getElementById("note");
   
    div.style.visibility = "visible";
    div.style.color = "red";
    div.style.fontSize = "60px";
    div.style.marginTop = "10px";
    
  }
function redMarkSecond() {
    const newDiv = document.getElementById("note1");
   
    newDiv.style.visibility = "visible";
    newDiv.style.color = "red";
    newDiv.style.fontSize = "60px";
    newDiv.style.marginTop = "10px";
}
function redMarkThrid(){
    const thrid = document.getElementById("note2");
   
    thrid.style.visibility = "visible";
    thrid.style.color = "red";
    thrid.style.fontSize = "60px";
    thrid.style.marginTop = "10px";
}
//notificaton button
function more() {
    document.getElementsById("moreInfo").innerHTML = "3 New Messages";
  }