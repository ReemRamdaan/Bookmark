var bookName=document.getElementById('bookName');
var bookUrl=document.getElementById('bookUrl');
var bookSubmit=document.getElementById('bookSubmit')
var booksContainer=[];

if(localStorage.getItem('books')!=null)
{
    booksContainer=JSON.parse(localStorage.getItem('books'));
    display();
}

function addBook()
{
    var book={
        name:bookName.value,
        url:bookUrl.value
    }
    booksContainer.push(book)
    
   localStorage.setItem('books',JSON.stringify(booksContainer))
    clear()
    display()
}

function clear()
{
    bookName.value='';
    bookUrl.value=''
}

function display()
{
var cartona=``;
for(var i=0;i<booksContainer.length;i++){
    cartona+=`
    <tr class="grad mb-4">
    <td><h3 class="p-5">${booksContainer[i].name}</h3></td>
    <td><a href="${booksContainer[i].url}" target="_blank"><button class="btn btn-primary ">Visit</button></a></td>
    <td><button onclick="deleteBook(${i})" class="btn btn-danger ">Delete</button></td>
</tr>
    `
}
document.getElementById('booksTable').innerHTML=cartona;
}

function deleteBook(deletedIndex)
{
   booksContainer.splice(deletedIndex,1);
   localStorage.setItem('books',JSON.stringify(booksContainer))
   display()
}

bookSubmit.addEventListener('click',function(){
    addBook();
})