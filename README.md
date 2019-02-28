This project was created to provide an API service for a small library.

Below you will find some information on how to perform common tasks.

## Table of Contents

- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  src/
    api/
    core/
    model/
    repo/
    error.js
    index.js
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open your favorite REST client and enjoy your library API.

## Basic usage

You could add, list, remove and update books.

In this library we will use book objects like below:

```
{
    "title": "The Luminaries",
    "author": "Eleanor Catton",
    "isbn": "978-1-84708-431-6",
    "pages": 900,
}
```

Below you will find all possible requests.

- To list all of the books in the library use:

```
GET('http://localhost:8082/api/books')
```

- To add a book, use a book object like below:

```
POST('http://localhost:8082/api/book',  {
        "title": "The Luminaries",
        "author": "Eleanor Catton",
        "isbn": "978-1-84708-431-6",
        "pages": 900,
    })
```

- To update a book, pass a book object with id to your request:

```
PUT('http://localhost:8082/api/book',  {
        "id": "5OGs2LGL"
        "title": "The Luminaries",
        "author": "Eleanor Catton",
        "isbn": "978-1-84708-431-6",
        "pages": 800,
    })
```

- To remove a book, use it's id:

```
DELETE('http://localhost:8082/api/book/:id')
```

- Other methods and routes are forbidden.
