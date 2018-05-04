/* eslint-env browser */
/* global
  React ReactDOM h
  */
'use strict'

import { docRef } from './data.js'
import BoundSheet from './BoundSheet.js'
import BackgroundSheet from './BackgroundSheet.js'

const App = () => h(React.Fragment, [
  h(BackgroundSheet),
  h(BoundSheet, { docRef }),
])

ReactDOM.render(h(App), document.getElementById('react'))
