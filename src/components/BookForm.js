import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const {dispatch} = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({type:'ADD_BOOK', book:{
      title, author
    }})
    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" placeholder='book title'
        value={title} onChange={onTitleChange} required/>
      <input type="text" placeholder='author name'
        value={author} onChange={onAuthorChange} required/>
      <input type="submit" value="Add book"/>
    </form>
  );
}
 
export default BookForm;