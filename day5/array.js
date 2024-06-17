// book={
//     a:"a"
// }

// book1={
//     a2:"a";
//     __proto__ : book,
// }
// book2={
//     a3:"a1";
//     b2:"b2";
//     __proto__:book1
// }
// //book2.a2 -> a

// function Book(){
//     this.name="name"
// }
// const book = new Book();
// console.log(book1);//print name

function Book(name){
    this.name=name
}
Book.prototype.getSummer = function() {
    return `${this.name}`;
};
const book1 = new Book("a");
console.log(book1);//print a


console.log(book1.getSummer());