# Build React Components from Streams with RxJs and Recompose
Practice work.

## 1. Configure Recompose to Build React Components from RxJs Streams
Recompose provides helper functions to stream props using an Observable library of choice into React. This is a practice of configuring Recompose to Use RxJs then create a Streaming Component with Recompose’s componentFromStream helper function.

## 2. Pass a React Prop to a Stream in RxJs (002_typerwriter.js)
When Components and Props are declared in JSX, those props can be passed along to the RxJs stream. This is typically done using **switchMap** or **combineLatest** where you can grab props from your **props$** stream and push them into another stream.

## 3. Stream A React Component from an Ajax Request with RxJs (003_ajax.js)
Loading data using RxJs is simple using **Observable.ajax**. This practice shows how to take the Ajax response and pass it along the stream to use as props in a React Component.