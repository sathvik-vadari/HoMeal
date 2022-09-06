$(document).ready(function () {
    $('ul.tabs').tabs();
});

$(document).ready(function () {
    $('.collapsible').collapsible();
    refreshItemsList()
});


window.onstorage = () => {
    refreshItemsList()
};

function refreshItemsList() {
    var STORAGE_KEY = 'vue-js-todo-P7oZi9sL'
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    const product_list = document.getElementById("product-list")
    product_list.innerHTML = ''
    Object.keys(todos).forEach(function (key) {
        let todo = todos[key]
        let item_name = todo.text
        if (!todo.complete) {
            const item = document.createElement("li");
            item.innerHTML = `<div class=\"collapsible-header\">${item_name}</div><div class=\"collapsible-body\"><span>${item_name}</span><div class=\"row center\"><div class=\"btn add-to-cart\" onclick=\"addToCart(this, '${item_name}')\">Add to Cart</div></div></div>`
            product_list.append(item);
        }
    });
}

function addToCart(el, name) {
    if (el.innerHTML == "Added to cart") return;
    el.innerHTML = "Added to cart";
    cart = document.getElementById("cart-items")
    const item = document.createElement("a");
    item.className = "collection-item"
    item.href = "#"
    item.innerHTML = name
    cart.appendChild(item)
}