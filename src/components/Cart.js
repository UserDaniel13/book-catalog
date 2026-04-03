function Cart({ cart }) {
    return (
        <div>
            <h2>Корзина</h2>
            {cart.map((item, index) => (
                <p key={index}>{item.title}</p>
            ))}
        </div>
    );
}

export default Cart;