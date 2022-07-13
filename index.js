checkbox = document.querySelector("input");
price = document.querySelectorAll('.card__price');
console.log(checkbox);


checkbox.addEventListener('click', () => {
    price.forEach(element => {
        element.classList.toggle("active")
    })
});

