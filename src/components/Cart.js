function Cart({ cart }) {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    return (
        <div>
            <h2>Корзина</h2>
            {cart.map((item, index) => (
                <p key={index}>{item.title}</p>
            ))}

            <h3>Количество книг: {cart.length}</h3>
            <h3>Общая сумма: {totalPrice} руб.</h3>
        </div>
    );
}

export default Cart;