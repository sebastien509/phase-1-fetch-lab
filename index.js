function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books') // Add return here
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
  bookList.innerHTML = ''; // Clear existing content
  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name; // Assuming the book object has a 'name' property
    bookList.appendChild(listItem);
  });
}