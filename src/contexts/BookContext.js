import React, {createContext, useReducer, useEffect} from 'react';
//import uuid from 'uuid/dist/v1';
import { bookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  // const [books, setBooks] = useState([
  //   {title: 'name of the wind', author: 'pat rothfuss', id:1},
  //   {title: 'way of kings', author: 'bran sanders', id:2},
  //   {title: 'the final empire', author: 'bran sanders', id:3},
  // ])

  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  // const addBook = (title, author) => {
  //   setBooks([...books, {title, author, id: uuid()}])
  // }
  // const removeBook = (id) => {
  //   setBooks(books.filter((b)=>{
  //     return b.id !== id;
  //   }))
  // }

  useEffect(()=>{
    localStorage.setItem('books', JSON.stringify(books));
  }, [books])

  return (
    //<BookContext.Provider value={{books, addBook, removeBook}}>
    <BookContext.Provider value={{books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;