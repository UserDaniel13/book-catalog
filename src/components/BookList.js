function BookList({ books, addToCart }) {
    return (
        <div>
            {books.map((book) => (
                <div key={book.id}>
                    <p>
                        {book.title} — {book.author} — {book.price} руб.
                    </p>
                    <button onClick={() => addToCart(book)}>
                        Добавить в корзину
                    </button>
                </div>
            ))}
        </div>
    );
}

export default BookList;