import React from 'react';
import './App.css';
import Card from '../Card/Card';

function App() {
  return (
    <div className="App">
      <Card
        question={'Who Is Raman Aujla?'}
        answer={'A passionate full stack developer who likes to code, to solve real life problems. A recent graduate from Thinkful where I learned the modern javascript frameworks such as React, Node.js, Express and for managing data we got to learn PSQL. Other than this stack I am currently learning Angular and TypeScript. Having a strong knowledge of the computer science fundamentals has helped me a lot in my learning process. I am currently looking for a long term position in a company that is growing and where I can get to learn new things and grow as an individual with in the company and make some great friends along my new journey. I hope you like my FLIP card, looking forward to hearing from you.'}
      >
      </Card>
    </div>
  );
}

export default App;
