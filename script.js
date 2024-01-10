let inp=document.querySelector('input')
let btn=document.querySelector('button')
let lst=document.querySelector('ul')

btn.addEventListener("click",function(){
  let item=document.createElement("li")
  item.innerText=inp.value


  let delB=document.createElement("button")
  delB.innerText="delete"
  delB.classList.add(".del")

  item.appendChild(delB)
  lst.appendChild(item)
  inp.value=""

  
  

})


// use of event bubbling

lst.addEventListener("click",function(event){
  let par=event.target.parentElement
  if(event.target.nodeName=="BUTTON"){
    par.remove()
  }
})