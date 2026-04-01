let cart=JSON.parse(localStorage.getItem("mycart"))
console.log(cart)


function cartData(){
    cart.forEach((el)=>{
        let outer=document.createElement("div")

        let image=document.createElement("img")

        let details=document.createElement("div")
        let h1=document.createElement("h1")
        let qtyDiv=document.createElement("div")
        let plus=document.createElement("button")
        let no=document.createElement("span")
        let minus=document.createElement("button")
        let price=document.createElement("p")
        let remove=document.createElement("button")

        image.src=el.thumbnail

        h1.innerText=el.title
        plus.innerText="+"
        no.innerText=el.qty
        minus.innerText="-"
        price.innerHTML=`<b>Total Price :</b> Rs ${Math.ceil(el.price*90)*el.qty}/-`
        remove.innerText="Remove From Cart"

        qtyDiv.append(plus,no,minus)

        details.append(h1,qtyDiv,price,remove)

        outer.append(image,details)

        outer.style.width="900px"
        outer.style.margin="auto"
        outer.style.display="flex"
        outer.style.alignItems="center"
        outer.style.gap="200px"

        details.style.display="flex"
        details.style.flexDirection="column"
        details.style.gap="30px"
        details.style.textAlign="left"

        qtyDiv.style.width="90px"
        qtyDiv.style.display="flex"
        qtyDiv.style.justifyContent="space-around"

        no.style.fontSize="1.3rem"

        plus.style.padding="2px 5px"
        minus.style.padding="2px 5px"

        remove.style.width="300px"
        remove.style.padding="10px 20px"
        remove.style.backgroundColor="red"
        remove.style.border="none"
        remove.style.borderRadius="30px"
        remove.style.color="white"
        remove.style.fontWeight="bolder"

        

        document.querySelector("main").append(outer)
    })
}

cartData()