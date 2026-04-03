function Cart({ cart, removeFromCart }) {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    return (
        <div>
            <h2>Корзина</h2>
            {cart.map((item, index) => (
                <div key={index}>
                    <p>{item.title}</p>
                    <button onClick={() => removeFromCart(index)}>Удалить</button>
                </div>
            ))}

            <h3>Количество книг: {cart.length}</h3>
            <h3>Общая сумма: {totalPrice} руб.</h3>
        </div>
    );
}

export default Cart;