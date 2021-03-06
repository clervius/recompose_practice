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


const SimpleForm = ({ text, onInput }) => (
  <div>
    <input type="text" onInput={onInput} />
    <h2>{ text }</h2>
  </div>
)

const SimpleFormStream = componentFromStream(props$ => {
  const {
    stream: onInput$,
    handler: onInput
  } = createEventHandler()

  const text$ = onInput$.map(
    e => e.target.value
  ).delay(500).startWith("")

  return text$.map(text => ({ text, onInput })).map(SimpleForm)
})

const logInput = e => console.log(e.target.value)

const App = () => (
  <div>
    <SimpleFormStream></SimpleFormStream>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)