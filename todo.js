const btn=document.getElementById("btn");
const input=document.getElementById("inputbox");

  const fbtn=()=>{
   const inputvalue=input.value.trim();
if(inputvalue.length<=0){
    alert("you must add something");
}
const li= document.createElement("li");
 const p=document.createElement ("p");
 p.innerHTML=inputvalue;
 li.appendChild(p);
}
btn.addEventListener("click",fbtn);


