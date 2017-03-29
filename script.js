var div1=document.getElementById('div1');
var drag1=document.getElementById('drag1');
var widthdiv1= div1.clientWidth;
var widthdrag1= drag1.clientWidth;
    // console.log(widthdrag1)

console.log(widthdiv1)

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
var x=0;
var widthdiv2=60;
function drop(event) {
    event.preventDefault();
    var ferq=widthdiv1-x*widthdrag1;
    x++;
    var data = event.dataTransfer.getData("text");
    // console.log(ferq)
    if(ferq==0){
        var b=0;
        var div2=document.createElement("div");
        div2.setAttribute("id","div2");
        div2.style.width=widthdiv1-b*widthdrag1;
        div2.style.marginLeft=b*(widthdrag1/2);
        event.target.appendChild(div2);
        widthdiv1= widthdiv1-widthdrag1;
        x=1
        // console.log(b)
        b++;
        widthdiv2=div2.clientWidth;
        console.log(widthdiv2)
    }
    if(widthdiv2>=40){
        event.target.appendChild(document.getElementById(data));
    }else{
        false;
    }
}
