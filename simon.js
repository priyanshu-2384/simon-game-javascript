let list = [];
let userlist = [];
let body = document.querySelector("body");
let h2 = document.querySelector("h2");
let x = 0;
let flag = false;
function flashBox(b) {
    let box = document.querySelector(b);
    console.log(b);
    box.classList.add("flash");
    setTimeout(function() {
        box.classList.remove("flash");
    },250);
}
function fun() {
    let rand = Math.floor((Math.random()*4)+1);
    let b = `.box${rand}`;
    list.push(b);
    flashBox(b);
}
body.addEventListener("keypress",function(event) {
    if(!flag) {
    console.log(event);
    fun();
    h2.innerText = `Level = ${list.length}`;
    flag = true;
    } else {
        console.log("game is started");
    }
});
function afterClick() {
    
    let name = this.className;
    userlist.push(`.${name}`);
    if(userlist[x]!=list[x]) {
        body.classList.add("wrong");
        setTimeout(function() {
          body.classList.remove("wrong");
        },2000);
        x = 0;
        console.log("game ended");
        h2.innerText = `Your Score is ${list.length-1}`;
        flag = false;
        list = [];
        userlist = [];
    } else {
        x++;
        if(x>=list.length) {
            h2.innerText = `Level ${list.length+1}`;
            x = 0;
            userlist = [];
            for(let i=0; i<list.length; i++) {
                let x = ((i+1)*1000);
                setTimeout(function(){
                    flashBox(list[i]);
                },x);
            }
            setTimeout(function(){
                fun();
            },(list.length+1)*1000);
        }
    }
}
for(let i=1; i<=4; i++) {
   let b = document.querySelector(`.box${i}`);
   b.addEventListener("click",afterClick);
}
