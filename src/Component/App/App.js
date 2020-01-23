import React from 'react';
import './App.css';
import Card from '../Card/Card';

function App() {
  return (
    <div className="App">
      <Card
        question={'Who Is Raman Aujla?'}
        answers={[
          'A passionate full stack developer with strong computer science fundamentals. Recently graduated from Thinkful where I got to learn, React, Node.js, Express and PostgreSQL. On the side I have begun learning Angular and TypeScrip to add to my skill set. ',
          'I am currently looking for a long term patnership with an innovative and a growing company were I can bring my skills to use and grow alongside the company. I am really excited and thankful to have been interviewed by Mercury Studios. I hope you like my FLIP card and am looking to move forward to the next steps.'
        ]}
      >
      </Card>
    </div>
  );
}

export default App;
