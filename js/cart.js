if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeButtons = document.getElementsByClassName("remove-btn")
    
    for(let i = 0; i < removeButtons.length; i++) {
        var button = removeButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var removeAll = document.getElementsByClassName("remove")[0]
    removeAll.addEventListener('click', function (event) {
        var items = event.target
        var basket = items.parentElement.nextElementSibling
        basket.remove()
        updateTotal()
    })

    var incrementButtons = document.getElementsByClassName("plus-btn")
    var decrementButtons = document.getElementsByClassName("minus-btn")

    for(let i = 0; i < incrementButtons.length; i++) {
        var button = incrementButtons[i]
        button.addEventListener('click', function () {
            increment(i)
        })
    }

    for(let i = 0; i < decrementButtons.length; i++) {
        var button = decrementButtons[i]
        button.addEventListener('click', function (){
            decrement(i)
        })
    }

    var addToCartButtons = document.getElementsByClassName("add")

    for(let i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCart)
    }

}

function increment(i) {
    var countElement = document.getElementsByClassName("count")[i]
    var count =  parseInt(countElement.innerText)
    count++
    countElement.innerText = count
    updateTotal()
}

function decrement(i) {
    var countElement = document.getElementsByClassName("count")[i]
    var count =  parseInt(countElement.innerText)
    count--
    countElement.innerText = count
    updateTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    updateTotal()
}

function updateTotal() {
    var cartItems = document.getElementsByClassName("shopping-cart")[0]
    var items = cartItems.getElementsByClassName("cart-item")
    var total = 0

    for(let i =0; i < items.length; i++) {
        var item = items[i]
        var price = parseFloat(item.getElementsByClassName("amount")[0].innerText.replace('$', ''))
        var quantity = parseInt(item.getElementsByClassName("count")[0].innerText)
        total += (price * quantity)
    }

    cartItems.getElementsByClassName("total-amount")[0].innerText = '$' + total
}

function addToCart(event) {
    var addClicked = event.target
    var item = addClicked.parentElement.parentElement
    var name = item.getElementsByClassName("product-name")[0].innerText
    var price = item.getElementsByClassName("product-price")[0].innerText
    var img = item.getElementsByClassName("product-image")[0].src
    addItemToCart(name, price, img)
    updateTotal()
}

function addItemToCart(name, price, img) {
    var cartRow = document.createElement('div')
    cartRow.classList.add("cart-item")
    var cartItem = document.getElementsByClassName("basket")[0]
    var cartItemNames = cartItem.getElementsByClassName("product-name")
    

    for(let i =0; i <cartItemNames.length; i++) {
        if(cartItemNames[i].innerText == name) {
            alert('Item already in cart')
            return
        }
    }

    var cartRowHTML = `
            <div class="image-box">
                <img src="${img}" alt="product"/>
            </div>
            <div class="description">
                <h1 class="product-name">${name}</h1>
                <h3></h3>
            </div>
            <div class="quantity">
                <div class="plus-btn">
                    <button>+</button>
                </div>
                <div class="count">1</div>
                <div class="minus-btn">
                    <button>-</button>
                </div>
            </div>
            <div class="prices">
                <div class="amount">${price}</div>
                <div class="remove">
                    <button class="remove-btn">Remove</button>
                </div>
            </div>`
    cartRow.innerHTML = cartRowHTML
    cartItem.append(cartRow)
    cartRow.getElementsByClassName("remove-btn")[0].addEventListener('click', removeCartItem)
    var incrementBtn = cartRow.getElementsByClassName("plus-btn")
    incrementBtn[0].addEventListener('click', function (event) {
        var countElement = event.target.parentElement.nextElementSibling
        var count = parseInt(countElement.innerText)
        count++
        countElement.innerText = count
        updateTotal()
    })
    var decrementBtn = cartRow.getElementsByClassName("minus-btn")
    decrementBtn[0].addEventListener('click', function (event) {
        var countElement = event.target.parentElement.previousElementSibling
        var count = parseInt(countElement.innerText)
        count--
        countElement.innerText = count
        updateTotal()
    })
}