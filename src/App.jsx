import React from 'react';
import './App.css';
import CreateURL from './Components/create_url'
import ShortURL from './Components/view_short_url'


// App Component
const App =()=> {
  return (    
      <div>
        <h2>URL Shortener</h2> 
        <CreateURL />
        <br></br>
        <ShortURL />
      </div>   
  );
}

export default App;
