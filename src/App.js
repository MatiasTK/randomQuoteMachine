import React from 'react';
import { useState } from 'react';

export default function App() {
  const [quote, setQuote] = useState({
    text: 'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.',
    author: 'Sheryl Sandberg'
  });
 
  const getQuote = async () => {
    let response = await fetch('https://type.fit/api/quotes', {method: 'GET'});
    let quotes = await response.json();
    let indexQuote = Math.floor(Math.random() * quotes.length);
    let quote = quotes[indexQuote];
    setQuote(quote);
    changeColor();
  }

  const changeColor = () => {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.main').style.backgroundColor = randomColor;
    document.querySelector('.fa-solid').style.color = randomColor;
    document.querySelector('#text').style.color = randomColor;
    document.querySelector('#author').style.color = randomColor;
    document.querySelector('.fa-brands').style.backgroundColor = randomColor;
    document.querySelector('#new-quote').style.backgroundColor = randomColor;
  }

  return (
    <div className='main flex justify-center items-center h-screen w-screen bg-blue-500'>
      <div id='quote-box' className='border px-20 py-10 rounded-lg w-full mx-32 bg-white'>
        <div className='flex'>
          <i className="fa-solid fa-quote-left fa-2xl text-blue-500 mr-3"></i>
          <p id='text' className='text-3xl text-blue-500 mb-5 font-sans antialiased h-32'>{quote.text}</p>
        </div>
        <p id='author' className='text-blue-500 antialiased text-right mb-10'>-{quote.author}</p>
        
        <div className=''>
          <div className='flex flex-row justify-between items-center'>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.text + ' ' + quote.author)}`} id='tweet-quote'>
              <i className="fa-brands fa-twitter text-white fa-lg border rounded px-3 py-5 bg-blue-500"></i>
            </a>
            <button id='new-quote' className='border rounded bg-blue-500 px-3 py-3 text-white text-center text-sm h-11' onClick={getQuote}>New Quote</button>
          </div>
        </div>
      </div>
    </div>
  )
}
