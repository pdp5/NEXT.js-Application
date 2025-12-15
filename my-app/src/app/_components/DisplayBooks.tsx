'use client'
import { redirect } from "next/navigation";

const displayBooks = ({book, id}) => {

  function bookClickHandler(bookID: number){
    redirect(`/book/${bookID}`);
  }
    return (
        <div  className="cursor-pointer w-40 h-auto flex flex-col m-2 border" onClick={() => bookClickHandler(book.id)} key={id}>
      
          <div className="flex-grow">
            <img className="object-fit w-full h-full"  src={book.coverimage} alt={`${book.title} cover`} width={150}
              height={200}/>
          </div>
            <div  className="text-center p-2 bg-blue-400" >
              {book.title}
            </div> 
          </div>
    );
}
export default displayBooks;