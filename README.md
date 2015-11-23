# preload.io-json

> Preload.io loader for json

## Installation

```sh
npm i preload.io-json
```

## Polyfills

Image requires a few polyfills to work everywhere, to give some flexibility they are not included by default.

```sh
npm i -S whatwg-fetch regenerator
```

```js
import 'regenerator/runtime'
import 'whatwg-fetch'
```

`Regenerator` is currently a requirement for the async stuff, but a version is included with `babel-polyfill` so if you’re using that then you’re good to go. Use whichever version of `fetch` you like, if necessary.

There will be a fairly obvious console error logged if these are omitted.


## Getting Started

Install [preload.io](https://github.com/mattstyles/preload.io) and register the json loader with it

```js
import Preloader from 'preload.io'
import { EVENTS } from 'preload.io'
import JSONLoader from 'preload.io-json'

let preloader = new Preloader()
preloader.register( new JSONLoader() )
```

Then just load the resource and listen for the response, which will be parsed already

```js
let id = preloader.load( 'https://api.github.com/users/mattstyles' )

preloader.on( EVENTS.LOAD, event => {
  if ( event.id === id ) {
    console.log( event.res ) // { login: 'mattstyles' ... }
  }
})
```
