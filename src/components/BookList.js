function BookList({ books, addToCart }) {
    return (
        <div>
            {books.map((book) => (
                <div
                    key={book.id}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid",
                        padding: "10px",
                        marginBottom: "10px"
                    }}>
                    <div>
                        {book.title} — {book.author} — {book.price} руб.
                    </div>
                    <button onClick={() => addToCart(book)}>
                        Добавить в корзину
                    </button>
                </div>
            ))}
        </div>
    );
}

export default BookList;