/* eslint-env browser */
/* global
  ReactDOM h
  */
'use strict'

import { docRef } from './data.js'
import BoundSheet from './BoundSheet.js'

const App = () => h(BoundSheet, { docRef })

ReactDOM.render(h(App), document.getElementById('react'))
