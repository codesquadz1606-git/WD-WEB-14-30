let url="https://dummyjson.com/products?limit=500" // this is api link.

// async & await

// async means convert any function into the promise
// await handles the promise, await is only used when their is async used at top level.

async function dataFetch(){
    let res=await axios.get(url)
    // console.log()

    let alldata=res.data.products

    console.log(alldata)

    alldata.map((el)=>{
        // Creating Elemnt
        let outerDiv=document.createElement("div")
        let productTitle=document.createElement("h2")
        let image=document.createElement("img")
        let description=document.createElement("p")
    
        let pr_cart=document.createElement("div")
        let price=document.createElement("h3")
        let addTocart=document.createElement("button")

        let newPage=document.createElement("a")
        newPage.append(image)
        
        // Assigning Data
        productTitle.innerText=el.title
        image.src=el.thumbnail
        description.innerText=el.description
        price.innerText=`Rs ${Math.ceil(el.price*90)}/-`
        addTocart.innerText="Add to Cart"

        // Styling
        outerDiv.classList.add("outer")
        image.style.width="180px"
        pr_cart.classList.add("pr-cart")
        addTocart.classList.add("cartBtn")

        // FOr next page
        // Query String
        newPage.href=`productDetail.html?id=${el.id}`
        newPage.target="_blank"
    
        // Appending the elements
        pr_cart.append(price,addTocart)
        outerDiv.append(productTitle,newPage,description,pr_cart)

        addTocart.addEventListener("click",()=>{
            window.location.href="Cart.html"    
            let cart=JSON.parse(localStorage.getItem("mycart") || "[]");

            let existing=cart.find((item)=>item.id===el.id);
            if(existing){
                existing.qty+=1;
            }
            else{

                cart.push({...el,qty:1})
            }
            localStorage.setItem("mycart",JSON.stringify(cart)) 
        })

        document.querySelector("main").append(outerDiv)
    })
}

dataFetch();

