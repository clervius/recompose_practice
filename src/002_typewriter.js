import React from 'react';
import ReactDOM from 'react-dom';
import { setObservableConfig, componentFromStream } from 'recompose';
import rxjsConfig from 'recompose/rxjsObservableConfig';
import { Observable } from 'rxjs';

setObservableConfig(rxjsConfig);

const App = props => (
  <div>
    <h1>{ props.message }</h1>
  </div>
)


const createTypeWriter = (message, speed) =>
  Observable.zip(
    Observable.from(message),
    Observable.interval(speed),
    letter => letter
  ).scan((acc, curr) => acc + curr);

const StreamingApp = componentFromStream(props$ => console.log(props$) ||
  props$
    .switchMap(props => createTypeWriter(props.message, props.speed))
    .map(message => ({message}))
    .map(App))

 
ReactDOM.render(
  <StreamingApp message="Loading..." speed={1000}/>,
  document.getElementById('root')
);

