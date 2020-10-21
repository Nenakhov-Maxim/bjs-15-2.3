// Задание 1

class PrintEditionItem {    
    constructor (name, releaseDate, pagesCount) {        
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {        
        this._state = (newState <= 0) ? 0 : (newState >= 100) ? 100 : newState; 
    }

    get state() {
        return this._state;
    }         
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)        
        this.type = "magazine";
    }
}

class Book  extends PrintEditionItem {    
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "book";
        this.author = author;
        }    
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "novel";
        
        }
}

class FantasticBook extends Book {    
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "fantastic";        
        }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "detective";        
        }
}

// Задание 2.

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];        
    }
    addBook(newBook) {
        const anyBook = newBook;        
        if (anyBook.state > 0) {
           this.books.push(anyBook);  
        }     
    }
    findBookBy(type, value) {
        debugger;
        let findBook = "";
        for (let i = 0, len = this.books.length; i < len; i++) {
            for (const key in this.books[i]) {
                if (this.books[i].hasOwnProperty(key) && key.indexOf(type) > -1) {
                    if (this.books[i][key] === value) {
                        findBook = this.books[i];
                    } 
                }      
            }
        }
       if (findBook != "") {
           return findBook;
       } else {
           return null;
       }                                        
    }
}
