var relationship= document.querySelector("h2")

var btn=document.querySelector("#add")

var flag=0;

btn.addEventListener("click",function(){
    if(flag==0){
        relationship.innerHTML="Friends"
        relationship.style.color="green" 
        btn.innerHTML="Remove Friend"
        flag=1;     
    }
    else{
        relationship.innerHTML="Stranger"
        relationship.style.color="red" 
        btn.innerHTML="Add Friend"
        flag=0; 
    }
})