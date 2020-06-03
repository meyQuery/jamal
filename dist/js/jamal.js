const cart = document.querySelector('.cart');

if (cart)
{
    const dropdown = document.querySelector('.cart-dropdown');

    function handleCartClick(event) {
        dropdown.classList.add('open');
    }

    cart.addEventListener('click', handleCartClick);

    window.addEventListener('click', function(event) {
        if (!event.target.closest('.cart-div')) {
            dropdown.classList.remove('open');
        }
    });
}