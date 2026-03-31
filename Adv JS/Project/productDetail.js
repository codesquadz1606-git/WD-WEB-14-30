let data=new URLSearchParams(window.location.search)
let n=data.get("id")
document.title=`Product ${n}`

let url=`https://dummyjson.com/products/${n}` // custom url

async function fetchData(){
    let res=await axios.get(url)
    let pdata=res.data

    console.log(pdata)

    let img_box=document.createElement("img")
    let detailsDiv=document.createElement("div")
    let pTitle=document.createElement("h1")
    let description=document.createElement("p")

    let stock_category=document.createElement("div")
    let stock=document.createElement("div")
    let category=document.createElement("div")

    let rating=document.createElement("p")

    let price_btn=document.createElement("div")
    let price=document.createElement("p")
    let btn=document.createElement("button")

    img_box.src=pdata.thumbnail

    pTitle.innerText=pdata.title
    description.innerText=pdata.description

    stock_category.append(stock,category)
    stock.innerHTML=`<b>Stock :</b>${pdata.stock}`
    category.innerHTML=`<b>Category :</b>${pdata.category}`

    rating.innerHTML=`<b>Rating :</b>${pdata.rating}`

    price_btn.append(price,btn)
    price.innerText=`Rs ${Math.ceil(pdata.price*90)} /-`
    btn.innerText="Buy Now"


    stock_category.classList.add("flex")
    price_btn.classList.add("flex")
    description.style.fontSize="1.3rem"
    description.style.width="70%"
    
    pTitle.classList.add("font1")
    stock.classList.add("font2")
    category.classList.add("font2")
    rating.classList.add("font2")
    price.classList.add("font2")
    btn.classList.add("btn")

    detailsDiv.classList.add("details")

    detailsDiv.append(pTitle,description,stock_category,rating,price_btn)

    btn.addEventListener("click",()=>{
        window.location.href="Cart.html"
    })

    document.querySelector(".data").append(img_box,detailsDiv)
}

fetchData()
