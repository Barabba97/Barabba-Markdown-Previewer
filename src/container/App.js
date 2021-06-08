import "../style.scss";
import React, { useContext } from 'react';
import { Context } from './Context';
import Editor from '../components/Editor';
import Previewer from '../components/Previewer';

function App() {
  const { fullScr, fullScrStyle } = useContext(Context);

  return (
    <div className="wrapper" style={fullScr ? fullScrStyle : null}>
      <Editor />
      <Previewer />
    </div>
  );
}

export default App;