var library = [
    {
        title: 'The Digital Fortress',
        author: 'Dan Brown',
        availability: true,
        holder: ''
    },
    {
        title: 'The Davinci Code',
        author: 'Dan Brown',
        availability: false,
        holder: 'John Smith'
    },
    {
        title: 'Long Eagle',
        author: 'Anonymous',
        availability: true,
        holder: ''
    },
    {
        title: 'Atomic Habits',
        author: 'James Clair',
        availability: false,
        holder: 'Aline'
    },

]

const addBook =(title,author,availability='true')=>{
   const newBook ={
    title: title,
    author: author,
    availability: availability,
    holder:''
   }
   
   library.push(newBook)

//    console.log(`the book ${title} has been added succesifully`)
}

addBook('forever','marie',true);


// console.log(library)

const listOfavailableBooks = ()=>{
   var theAvailableBook =[]
   for(let i=0;i<library.length;i++){
    if(library[i].availability === true){
        theAvailableBook.push(library[i])
    }
    // console.log(theAvailableBook)
   }
   
}
listOfavailableBooks()


const borrowBook = (bookName,holder)=>{
    for(let i=0 ; i<library.length;i++){
        if(bookName === library[i].title && library[i].availability ===true){
           library[i].holder = holder;
           library[i].availability = false
            
            // console.log('')
        }
    }
  
}
borrowBook('Long Eagle','reine')
// console.log(library)


const givingBackBook = (bookName,holder)=>{
    for (let i =0;i<library.length;i++){
        if(library[i].title === bookName && library[i].availability ===false&&(library[i].holder ===holder)){
            library[i].holder = '';
            library[i].availability = true
            library[i].title = bookName
        }
        // console.log('thanks for returning the book')
    }
    console.log('thanks for returning the book')

}
givingBackBook('Atomic Habits','Aline')
console.log(library)