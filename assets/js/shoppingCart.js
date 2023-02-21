let productsInCart = JSON.parse(localStorage.getItem("ShoppingCart"));
if (!productsInCart) {
    productsInCart = [];
}
const parentElement = document.querySelector("#buyItems");
const cartSumPrice = document.querySelector("#sum-prices");
const products = document.querySelectorAll(".item");
const badge = document.querySelector(".badge");

coutBadge = () => {
    let sumBadge = 0;
    productsInCart.forEach((product) => {
        sumBadge += product.count;
    });
    return sumBadge;
};

countTheSumPrice = () => {
    // 4
    let sumPrice = 0;
    productsInCart.forEach((product) => {
        sumPrice += product.price;
    });
    return sumPrice;
};

updateShoppingCartHTML = () => {
    // 3
    localStorage.setItem("ShoppingCart", JSON.stringify(productsInCart));
    if (productsInCart.length > 0) {
        let result = productsInCart.map((product) => {
            return `
            <li class="buyItem">
            <div class="button-remove fa fa-xmark" data-id=${product.id}>
                                    </div>
        <a href="single-product.html" class="photo"><img src="${product.image}" alt="" class="img-cart"></a>
        <h6><a href="single-product.html">${product.name}</a></h6>
        <p><span class="price">$ ${product.price}</span></p>
        <ul class="quantity-area">
                                            <li><input type="button" class="button-minus" value="-" data-id=${product.id}></li>
                                            <li><span class="badge">${product.count}</span></li>
                                            <li><input type="button" class="button-plus" value="+"  data-id=${product.id}></li>
                                        </ul>
    </li>            
    `;
        });
        parentElement.innerHTML = result.join("");
        document.querySelector(".checkout").classList.remove("hidden");
        cartSumPrice.innerHTML = "$" + countTheSumPrice();
        badge.innerHTML = coutBadge();
    } else {
        document.querySelector(".checkout").classList.add("hidden");
        parentElement.innerHTML =
            '<h4 class="empty">Your shopping cart is empty</h4>';
        cartSumPrice.innerHTML = "";
        badge.innerHTML = 0;
    }
};

updateProductsInCart = (product) => {
    // 2
    for (let i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].id == product.id) {
            productsInCart[i].count += 1;
            productsInCart[i].price =
                productsInCart[i].basePrice * productsInCart[i].count;
            return;
        }
    }
    productsInCart.push(product);
};

products.forEach((item) => {
    // 1
    item.onclick = (e) => {
        if (e.target.classList.contains("addTocart")) {
            const productID = e.target.dataset.productId;
            const productName = item.querySelector(".productName").innerHTML;
            const productPrice = item.querySelector(".priceValue").innerHTML;
            const productImage = item.querySelector("img").src;

            let productToCart = {
                name: productName,
                image: productImage,
                id: productID,
                count: 1,
                price: +productPrice,
                basePrice: +productPrice,
            };
            updateProductsInCart(productToCart);
            updateShoppingCartHTML();
        }
    };
});

parentElement.onclick = (e) => {
    // last
    const isPlusButton = e.target.classList.contains("button-plus");
    const isMinusButton = e.target.classList.contains("button-minus");
    const isCloseButton = e.target.classList.contains("button-remove");

    if (isPlusButton || isMinusButton || isCloseButton) {
        for (let i = 0; i < productsInCart.length; i++) {
            if (productsInCart[i].id == e.target.dataset.id) {
                if (isPlusButton) {
                    productsInCart[i].count += 1;
                } else if (isMinusButton) {
                    productsInCart[i].count -= 1;
                }
                if (isCloseButton) {
                    productsInCart[i].count = 0;
                }
                productsInCart[i].price =
                    productsInCart[i].basePrice * productsInCart[i].count;
            }
            if (productsInCart[i].count <= 0) {
                productsInCart.splice(i, 1);
            }
        }
        updateShoppingCartHTML();
    }
};

updateShoppingCartHTML();
