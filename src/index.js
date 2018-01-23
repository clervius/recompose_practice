import React from 'react';
import ReactDOM from 'react-dom';

import { 
  setObservableConfig,
  componentFromStream,
  createEventHandler
} from 'recompose';
import rxjsConfig from 'recompose/rxjsObservableConfig';
import { Observable } from 'rxjs';
setObservableConfig(rxjsConfig);

const App = () => (
  <div>
    <h1>Loading...</h1>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)