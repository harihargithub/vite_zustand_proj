// App.jsx
import React from 'react';
import GetData from './axiosget/axiosGetData';
// import Reducer from './useReducer/Reducer';
// import ChangeText from './useState/stateText';
// import { Effect } from './useEff/Eff';
// import {GetData} from '../src/axiosget/axiosGetData';

function App() {
  return (
    <React.StrictMode>
      <GetData />
    </React.StrictMode>
  );
}

export default App;
