import React from 'react';
import ControlledInput from './ControlledInput';
import marked from 'marked';

function App() {
  return (
    <div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.6.2/marked.js" />
      <ControlledInput />
    </div>
  );
}

export default App;
