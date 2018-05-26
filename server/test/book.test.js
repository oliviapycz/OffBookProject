const book = require('../Models/bookModel')


test('getBooks should return a book object with properties', ()=> {
  book.getBooks(book => expect(book.name_book).toBeDefined())
  book.getBooks(book => expect(book.author_book).toBeDefined())
  book.getBooks(book => expect(book.year_book).toBeDefined())
  book.getBooks(book => expect(book.description_book).toBeDefined())
});

test('getWishBooks should return a wishbook object with properties', ()=> {
  book.getWishBooks(book => expect(book.name_book).toBeDefined())
  book.getWishBooks(book => expect(book.author_book).toBeDefined())
  book.getWishBooks(book => expect(book.year_book).toBeDefined())
  book.getWishBooks(book => expect(book.description_book).toBeDefined())
});
