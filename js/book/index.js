//这里有什么问题?
function Book(isbn,title,author){
    this.setIsbn(isbn)
    // this.isbn=isbn;//public属性
    // this.title=title;
    // this.author=author;
}

Book.prototype = {
    setIsbn(isbn){
        //会写什么代码
        //isbn不能是this 要可读
        // private 私有属性，对方的方法内this.调用，但在外界不能访问
        //js内不存在private,约定,以_开头 就是私有属性
        if(!this.checkIsbn(isbn))
            throw new Error('ISBN格式有误')

        this._isbn = isbn
    },
    getIsbn(){
        return this._isbn;
    },
    checkIsbn(isbn) {
        if(!isbn) return false
        return /\d{3}-\d{1}-\d{3}-\d{5}-\d{1}/.test(isbn) 
        //     判断英文/\w{5}/.test('asdfg')
        //    /[a-z]{5}/.test{'fyhhj'}
    }
}
//class 只是语法糖
//如何做private
const jsDontKown = new Book('978-7-121-29899-8','React全栈','陈玉钰');
// console.log(jsDontKown.constructor);
// console.log(jsDontKown.__proto__ == Book.prototype);
console.log(jsDontKown instanceof Book);
console.log(Book.prototype.isPrototypeOf(jsDontKown));
console.log(jsDontKown.getIsbn());
// jsDontKown.isbn='ddddd';
