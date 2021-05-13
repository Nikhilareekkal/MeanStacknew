function populate(book){
    console.log(book);
   let html_data=`<tr><td>${book.book_name}</td>
   <td>${book.author_name}</td>
   <td>${book.price}</td></tr>`
   document.querySelector("#result").innerHTML=html_data
}

function createBook() {
    let book_name=bookname.value;
    let auth=author.value;
    let amount=price.value;

    let book={
        book_name:book_name,
        author_name:auth,
        price:amount
    }
    localStorage.setItem(book_name,JSON.stringify(book))
    
    let object=JSON.parse(localStorage.getItem(book_name))

populate(object)
}