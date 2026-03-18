let input=document.querySelector("input")
let btn=document.querySelector("button")
// let h1=document.createElement("h1")
let h1=document.querySelector("h1")

let ul=document.createElement("ul")
// let todo=[]
let number=ul.children.length
h1.innerText=`${number} Todo List`
// h1.innerText=`${todo.length} Todo List`
btn.addEventListener("click",()=>{
    if(input.value<=""){
        return alert("Cannot Create Empty Todo");
        
    }
    // todo.push(input.value)
    console.log(input.value)
    let li=document.createElement("li")

    let todoC=document.createElement("div")
    let delBtn=document.createElement("button")

    todoC.innerText=input.value.toUpperCase()
    delBtn.innerText="Delete Todo"

    todoC.addEventListener("click",()=>{
        todoC.classList.toggle("line-through")
    })

    delBtn.addEventListener("click",()=>{
        li.remove()
        number=ul.children.length
        h1.innerHTML=`${number} Todo List`
    })

    li.append(todoC,delBtn)
    ul.append(li)

    li.style.display="flex"
    li.style.gap="10px"

    input.value=""
    
    console.log(number)
    number=ul.children.length
    // h1.insertAdjacentElement("afterbegin",number)
    h1.innerText=`${number} Todo List`
})

// document.querySelector("body").prepend(h1)
document.querySelector("body").append(ul)