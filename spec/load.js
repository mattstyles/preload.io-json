
import tape from 'tape'

import Preloader from 'preload.io'
import { EVENTS } from 'preload.io'
import JSONLoader from '../lib'

tape( 'Should expose JSONLoader as the name of the module loader', t => {
  t.plan( 1 )

  let jsonLoader = new JSONLoader()

  t.equal( jsonLoader.name, 'JSONLoader' )
})
