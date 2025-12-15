'use client'
import { getSingleBook } from "@/src/app/_API";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Singlebook {
  title: string;
  author: string;
  description: string;
  coverimage: string;
  available: boolean;
}

export default function Singlebook() {
    const params = useParams();
    const {bookid} = params;

    const [bookDetails, setBookDetails] = useState<Singlebook | null>(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const details = await getSingleBook(bookid);
        setBookDetails(details);
      } catch (error) {
        console.error("Failed to fetch book details:", error);
      }
    };

    fetchBookDetails();
  }, [bookid]);

    console.log("Book Details: " , bookDetails);
    return (
        <div className="flex items-center justify-center h-screen">
    
           <div className=" flex flex-col items-center text-center w-150 border border-gray-300 p-4">
                <img className="border mb-5" src={bookDetails?.coverimage} alt="Book's Cover Image" width={250}
              height={300}/>
                <h3>Title: {bookDetails?.title}</h3>
                <h4>Author: {bookDetails?.author}</h4>
                <h5>Description: {bookDetails?.description}</h5>
           </div>
        </div>
    );
}