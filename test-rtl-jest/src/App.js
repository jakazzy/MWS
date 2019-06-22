import React from 'react';


function App( { text }) {
  return (
      <header>
       <h2 data-testid="h2tag" className="fancy-h2"> { text }</h2> 
      </header>
  );
}

export default App;
