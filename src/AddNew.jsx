import "./AddNew.css";
import NewForm from "./NewForm";
import Modal from "./Modal";

function AddNew({ books = [], setBooks, selectedBookId, setSelectedBookId }) {
    function deleteBook() {
        if (selectedBookId) {
            const newBooks = books.filter((b) => b.id !== selectedBookId);
            setBooks(newBooks);
            setSelectedBookId(null);
        }
    }

    function addBook(newBook) {
        setBooks([...books, newBook]);
    }
      function updateBook(updatedBook) {
        const updatedBooks = books.map((b) =>
            b.id === updatedBook.id ? updatedBook : b
        );
        setBooks(updatedBooks);
        setSelectedBookId(null);
    }

const selectedBook = books.find((b) => b.id === selectedBookId);
    return (
        <div>
            <div className="controls">
                <Modal btnLabel="New" btnClassName="new">
                    <NewForm addBook={addBook} />
                </Modal>
                <div className="action-row">
                    <Modal btnLabel="Edit" btnClassName="editbtn" disabled={!selectedBookId}>
                        <NewForm updateBook={updateBook} book={selectedBook} closeModal={() => setSelectedBookId(null)} />
                    </Modal>
                    <button className="btndelete" onClick={deleteBook} disabled={!selectedBookId}>
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddNew;