import React, { useState } from 'react';
import './App.css';
import bookdata from './data.js';

function App() {
  var genres = ['Fiction', 'Biography', 'Self-development', 'Finance', 'Technology'];
  // var books = [
  //   {
  //     bname: "Murder on the Orient Express",
  //     rating: "7.5/10",
  //     author: "Agatha Christie",
  //     genre: "Fiction"
  //   },
  //   {
  //     bname: "Most and More",
  //     rating: "8.5/10",
  //     author: "Mahatria Ra",
  //     genre: "Self development"
  //   },
  // ]
  var books = bookdata;
  const [category, setCategory] = useState('Fiction');
  function handleClick(e) {
    console.log('genre sel = ', e);
    setCategory(e);
  }
  return (
    <div className="container">
      <center>
        <h1> Read more ~ The book recommendation app </h1>
        <h3> Filter books by category and explore some worth-reading recommended books in each genre. </h3>
        <div className="flex">
          {
            genres.map((e) => {
              return (
                <div>
                  <button className="category" onClick={() => handleClick(e)}> {e} </button>
                </div>
              )
            })
          }
        </div>
        <div className="card-container">
          {
            books.map((e) => {
              if (e.genre === category) {
                return (
                  <div className="card">
                    <center>
                      <img className="bookimg" src={e.imgUrl} />
                    </center>
                    <b>{e.bname}</b><br />
                    By {e.author} <br />
                    <b> Description: </b>{e.description}<br />
                    <b>Rating:</b> {e.rating}<br />
                    <b>Genre:</b> {e.genre}<br />

                  </div>
                )
              }
            })
          }
        </div>
      </center>
    </div>
  );
}

export default App;
