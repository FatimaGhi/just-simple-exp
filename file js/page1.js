var val=document.getElementById("inp");
var btn = document.querySelector("#btn");

btn.addEventListener("click", add);
val.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        add();
    }
});
function add()
{
     var mes=document.getElementById("message");
     
    if( val.value!="")
    {
        // inp.style.borderColor = "gray";
        mes.innerHTML="";
        var pere=document.getElementById("parent_js");
        var addDiv=document.createElement("div");
        addDiv.id="div_js";
        addDiv.append(val.value);
        document.getElementById("inp").value="";
        pere.append(addDiv);
    }
    
    else{
        var inp=document.getElementById("inp");
        inp.style.borderColor = "red";
        mes.innerHTML="please add a link";
        mes.style.color="red";
        mes.style.fontSize="16px";
    }
}