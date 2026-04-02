let cart = JSON.parse(localStorage.getItem("mycart") || "[]")
console.log(cart)


function cartData() {
    if (cart.length < 1) {
        let h1 = document.createElement("h1")
        h1.innerText = "No Product Added To Cart"
        h1.style.display = "flex"
        h1.style.justifyContent = "center"

        document.querySelector("main").prepend(h1)
    }
    else {

        cart.forEach((el) => {
            let outer = document.createElement("div")

            let image = document.createElement("img")

            let details = document.createElement("div")
            let h1 = document.createElement("h1")
            let qtyDiv = document.createElement("div")
            let plus = document.createElement("button")
            let no = document.createElement("span")
            let minus = document.createElement("button")
            let price = document.createElement("p")
            let remove = document.createElement("button")

            image.src = el.thumbnail

            h1.innerText = el.title
            plus.innerText = "+"
            no.innerText = el.qty
            minus.innerText = "-"
            price.innerHTML = `<b>Total Price :</b> Rs ${Math.ceil(el.price * 90) * el.qty}/-`
            remove.innerText = "Remove From Cart"

            qtyDiv.append(plus, no, minus)

            details.append(h1, qtyDiv, price, remove)

            outer.append(image, details)

            outer.style.width = "900px"
            outer.style.margin = "auto"
            outer.style.display = "flex"
            outer.style.alignItems = "center"
            outer.style.gap = "200px"

            details.style.display = "flex"
            details.style.flexDirection = "column"
            details.style.gap = "30px"
            details.style.textAlign = "left"

            qtyDiv.style.width = "90px"
            qtyDiv.style.display = "flex"
            qtyDiv.style.justifyContent = "space-around"

            no.style.fontSize = "1.3rem"

            plus.style.padding = "2px 5px"
            minus.style.padding = "2px 5px"

            remove.style.width = "300px"
            remove.style.padding = "10px 20px"
            remove.style.backgroundColor = "red"
            remove.style.border = "none"
            remove.style.borderRadius = "30px"
            remove.style.color = "white"
            remove.style.fontWeight = "bolder"

            plus.addEventListener("click", () => {
                el.qty += 1;
                no.innerText = el.qty
                price.innerHTML = `<b>Total Price :</b> Rs ${Math.ceil(el.price * 90) * el.qty}/-`

                localStorage.setItem("mycart", JSON.stringify(cart))

                Total()
            })
            minus.addEventListener("click", () => {

                el.qty -= 1;
                no.innerText = el.qty
                price.innerHTML = `<b>Total Price :</b> Rs ${Math.ceil(el.price * 90) * el.qty}/-`

                localStorage.setItem("mycart", JSON.stringify(cart))
            })

            remove.addEventListener("click", (p) => {
                let newCartItems = cart.filter((el) => { el.id !== p.id })
                localStorage.setItem("mycart", JSON.stringify(newCartItems))
            })

            document.querySelector("main").append(outer);
        })
        let summary = document.createElement("div")
        let checkout = document.createElement("h2")
        let totalPrice = document.createElement("p")

        
        
        totalPrice=Total()
        checkout.innerText = "Total Checkout Price"
        summary.append(checkout, totalPrice)
        document.querySelector(".summ").append(summary);
    }
}

cartData()


function Total(){
    let cart=JSON.parse(localStorage.getItem("mycart") || "[]")
    let total=cart.reduce((acc,el)=>{
            acc=acc+(Math.ceil(el.price*90) * el.qty)
            return acc
        },0)
        console.log(total)
        return total
}