productElement = document.querySelector(".container")

function renderBikes() {
    bikes.forEach((product) => {
        productElement.innerHTML += `
        <div id="product" class="product">
            <img class="product-image" src="${product.img}">
            <div id="product-info" class="product-info">
                <p id="name" class="product-name">${product.name}</p>
                <p id="price" class="product-price">$${product.price}</p>
            </div>    
            <div>
                <button id="add" class="add">Add to cart</button>
            </div>                     
        </div>
        `
    })
}

renderBikes()