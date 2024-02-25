
let input_text= document.querySelector('#input_text');

console.log(input_text.value)
let add = document.querySelector('#_add');



function callingAdd(){

    
    if(input_text.value===' '){
        alert('Please write something')
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=input_text.value;
        add.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="   (remove)";
        li.appendChild(span);
    }

    input_text.value=" ";
    save();
}


add.addEventListener("click", function(e){
    if(e.target.tagName==='LI'){
        save();
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
        save();
    }
},false);


function save(){
    localStorage.setItem("data",add.innerHTML);
}

function show(){
    add.innerHTML=localStorage.getItem("data");
}

show();