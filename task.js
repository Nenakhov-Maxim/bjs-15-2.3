// Задание 1

class PrintEditionItem {    
    constructor (name, releaseDate, pagesCount) {
        debugger;
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
        debugger;
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