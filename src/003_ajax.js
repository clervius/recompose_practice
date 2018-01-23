import React from 'react';
import ReactDOM from 'react-dom';
import { setObservableConfig, componentFromStream } from 'recompose';
import rxjsConfig from 'recompose/rxjsObservableConfig';
import { Observable } from 'rxjs';

setObservableConfig(rxjsConfig);


const personById = id => `https://swapi.co/api/people/${id}`;

const Card = props => (
  <div>
    <h1>{props.name}</h1>
    <h2>{props.homeworld}</h2>
  </div>
);

const loadById = id => 
  Observable.ajax(personById(id))
    .pluck('response')
    .switchMap(response => 
      Observable.ajax(response.homeworld).pluck(
        'response'
      ).startWith({ name: "" }),
      (person, homeworld) => ({ ...person, homeworld: homeworld.name })
    )

const CardStream = componentFromStream(props$ =>
  props$.switchMap(props => 
    loadById(props.id)
  ).map(Card)
)

const App = props => (
  <div>
    <Card name="John" homeworld="Earth" />
    <CardStream id={1}></CardStream>
  </div>
)

ReactDOM.render(
  <App />, document.getElementById('root')
)