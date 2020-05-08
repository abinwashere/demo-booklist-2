import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => {
  const {dispatch} = useContext(BookContext);
  const clickHandler = () =>{
    dispatch({type: 'REMOVE_BOOK', id: book.id})
  }
  return (
    <li onClick={clickHandler}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
}
 
export default BookDetails;
