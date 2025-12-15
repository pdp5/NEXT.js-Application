'use server'

const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/";

export async function getBooks(){
    try {
        const response = await fetch(API_URL);
        const books = response.json();
        return books;
    } catch (error) {
        console.log(error);
    }
}

export async function register( prevState: any , formData: FormData) {
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const email = formData.get('email');
    const password = formData.get('password');

  try {
    const response = await fetch(
      "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({firstname, lastname, email, password}),
      }
    );
    console.log("Successfully Poat the data");
    const data = await response.json();
    console.log("post data: ", data);
    return data;
  } catch (error) {
    console.log("error fetching: ", error);
  }
}

export async function login( prevState: any , formData: FormData) {

    const email = formData.get('email');
    const password = formData.get('password');

  try {
    const response = await fetch(
      "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email,password}),
      }
    );
    const data = await response.json();
    console.log("success in logginin: ", data);
    return data;
  } catch (error) {
    console.log("Error while login: ", error);
  }
}
export async function getSingleBook(id: number) {
  try {
    const response = await fetch(
      `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}