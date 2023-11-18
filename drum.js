var x=document.querySelectorAll("button");
// var s=["res/audio/0.mp3","res/audio/1.mp3","res/audio/2.mp3","res/audio/3.mp3","res/audio/4.mp3","res/audio/5.mp3","res/audio/6.mp3"];
for(var i=0;i<7;i++){
    x[i].addEventListener("click",function (){
        var s=this.innerHTML;
        makesound(s);
        buttonAnimation(s);
    });
}

document.addEventListener("keypress",function(e){
        makesound(e.key);
        buttonAnimation(e.key);
});


function makesound(q){
        q=q.toLowerCase();
        switch(q){
                case "w": var a=new Audio("res/audio/0.mp3");
                        a.play(); break;
                case "a": var a=new Audio("res/audio/1.mp3");
                        a.play(); break;
                case "s": var a=new Audio("res/audio/2.mp3");
                        a.play(); break;
                case "d": var a=new Audio("res/audio/3.mp3");
                        a.play(); break;
                case "j": var a=new Audio("res/audio/4.mp3");
                        a.play(); break;
                case "k": var a=new Audio("res/audio/5.mp3");
                        a.play(); break;
                case "l": var a=new Audio("res/audio/6.mp3");
                        a.play(); break;
                default: console.log(s);
                }
}

function buttonAnimation(x){
        x="."+x.toLowerCase();
        var z=document.querySelector(x);
        z.classList.add("shadow");
        setTimeout(function(){z.classList.remove("shadow");},100);
}

// var x = document.querySelectorAll("button");
// function audioPlay(index){
//     var s="res/audio/"+index+".mp3";
//     x[index].addEventListener("click", function () {
//       var a = new Audio(s);
//       a.play();});
// }
// for (var i = 0; i < 7; i++) {
//     audioPlay(i);
// }
