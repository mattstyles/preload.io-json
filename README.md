# preload.io-json

> Preload.io loader for json

```shell
npm i preload.io-json
```

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
    console.log( event.res )
    // { login: 'mattstyles' ... }
  }
})
```
