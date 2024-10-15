function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books') 
    .then(response => response.json())
    .then(data => {
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function renderBooks(books) {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = ''; 
  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name; 
    bookList.appendChild(listItem);
  });
}