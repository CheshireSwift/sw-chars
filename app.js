'use strict'

import { docRef } from './data.js'
import BoundSheet from './BoundSheet.js'
import BackgroundSheet from './BackgroundSheet.js'

const App = () => h(React.Fragment, [
  h(BackgroundSheet),
  h(BoundSheet, { docRef }),
])

const appElement = document.getElementById('react')
ReactDOM.render(h(App), appElement)
