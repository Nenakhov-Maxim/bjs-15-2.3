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
        let findBook = null;
        for (let i = 0, len = this.books.length; i < len; i++) {
            for (const key in this.books[i]) {
                if (this.books[i].hasOwnProperty(key) && key.indexOf(type) > -1) {
                    if (this.books[i][key] === value) {
                        findBook = this.books[i];
                    } 
                }      
            }
        }       
        return findBook;                                   
    }
    giveBookByName(bookName) {        
        let indexBook;
        let checkBook = null;        
        for (let i = 0, len = this.books.length; i < len; i++) {
            const checkNameBook = this.books[i]['name'];
            if (checkNameBook === bookName) {
                indexBook = i;               
                checkBook = this.books[i];
            }
        }
        this.books.splice(indexBook, 1);
        return checkBook;
    }
}

// Задача 3

class StudentLog {
    constructor (nameStudent) {
        this.gradeSubject = {algebra: []};
        this.nameStuden = nameStudent;
    }
    getName() {
        return this.nameStuden;
    }  
    addGrade(grade, subject) {        
        if (grade > 0 && grade <= 5) {
           for (const key in this.gradeSubject) {
               if (this.gradeSubject.hasOwnProperty(key) && key.indexOf(subject) > -1) {                   
                   this.gradeSubject[subject].push(grade);
                   return this.gradeSubject[subject].length;
               }
           }
           this.gradeSubject[subject] = [];
           this.gradeSubject[subject].push(grade);
           return this.gradeSubject[subject].length;
           
        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`)
            return 0;

        }
        
    } 
    getAverageBySubject(subject) {        
        for (const key in this.gradeSubject) {
            if (this.gradeSubject.hasOwnProperty(key) && key.indexOf(subject) > -1) {
                const gradesOneSubject = this.gradeSubject[key];
                let grade = 0;
                for (let i = 0, len = gradesOneSubject.length; i < len; i++) {
                     grade += gradesOneSubject[i];                    
                }
                let averageGrades = grade / gradesOneSubject.length;
                return averageGrades;
            }
        }
        return 0;
    }
    getTotalAverage() {        
        let totalAverageSumm = 0;
        let totalAverage = 0;        
        for (const key in this.gradeSubject) {
            let grade = 0;
            let gradesOneSubject = [];
            if (this.gradeSubject.hasOwnProperty(key)) {
                gradesOneSubject = this.gradeSubject[key];                
                for (let i = 0, len = gradesOneSubject.length; i < len; i++) {
                     grade += gradesOneSubject[i];  
                }                  
            }
            let averageGrades = grade / gradesOneSubject.length; 
            totalAverageSumm += averageGrades                  
        }
        totalAverage = totalAverageSumm / Object.keys(this.gradeSubject).length;
        return totalAverage;
    } 
}