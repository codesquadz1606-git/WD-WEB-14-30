let input=document.querySelector("input")
let btn=document.querySelector("button")
// let h1=document.createElement("h1")
let h1=document.querySelector("h1")

let ul=document.createElement("ul")
// let todo=[]

// h1.innerText=`${todo.length} Todo List`
btn.addEventListener("click",()=>{
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

    li.append(todoC,delBtn)
    ul.append(li)

    li.style.display="flex"
    li.style.gap="10px"

    input.value=""
    let number=ul.children.length
    console.log(number)

    // h1.insertAdjacentElement("afterbegin",number)
    h1.innerText=`${number} Todo List`
})

// document.querySelector("body").prepend(h1)
document.querySelector("body").append(ul)