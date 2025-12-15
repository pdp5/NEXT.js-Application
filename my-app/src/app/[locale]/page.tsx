import Image from "next/image";
import { getBooks } from "../_API";
import DisplayBooks from "../_components/DisplayBooks";
import { getTranslations } from "next-intl/server";

interface Book{
  title: string;
  coverimage: string;
}

export default async function Home() {

  const t = await getTranslations('Book');

  const books = await getBooks();

  return (
    <div className="flex flex-col p-5">
     <h1>{t('title')}</h1>
      <div className="flex justify-between flex-wrap">
        {books.map((book:Book , id: number)=> (
          <DisplayBooks book={book} id={id} key={id}/>
       ))}
      </div>
    </div>
  );
}
