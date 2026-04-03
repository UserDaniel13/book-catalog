function BookList({ books }) {
    return (
        <div>
            {books.map((book) => (
                <p key={book.id}>
                    {book.title} — {book.author} — {book.price} руб.
                </p>
            ))}
        </div>
    );
}

export default BookList;