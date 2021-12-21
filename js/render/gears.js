productElement = document.querySelector(".container")

function renderGear() {
    gear.forEach((product) => {
        productElement.innerHTML += `
        <div class="product">
            <img class="product-image" src="${product.img}">
            <div class="product-info">
                <p id="name" class="product-name">${product.name}</p>
                <p id="price" class="product-price">${product.price}</p>
            </div>    
            <div>
                <button id="addBtn" class="add">Add to cart</button>
            </div>                     
        </div>
        `
    })
}

renderGear();