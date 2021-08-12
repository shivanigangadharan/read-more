import React, { useState } from 'react';
import './App.css';
import bookdata from './data.js';

function App() {
  var genres = ['Fiction', 'Biography', 'Self development', 'Finance', 'Technology'];
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
    <div>
      <h1> Good reads </h1>

      {
        genres.map((e) => {
          return (
            <div>
              <button onClick={() => handleClick(e)}> {e} </button>
            </div>
          )
        })
      }

      {
        books.map((e) => {
          if (e.genre === category) {
            return (
              <div>
                {e.bname}
              </div>
            )
          }
        })
      }


    </div>
  );
}

export default App;
