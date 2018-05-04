/* eslint-env browser */
/* global
  _ React h
  */
'use strict'

const themes = [
  'al_dente',
  'athena',
  'audrey',
  'aurora',
  'daguerre',
  'eucalyptus',
  'fes',
  'frost',
  'hairspray',
  'hokusai',
  'incognito',
  'linen',
  'peacock',
  'primavera',
  'quartz',
  'red_rock',
  'refresh',
  'sizzle',
  'sonnet',
  'ukulele',
  'zorro',
]

const largestDimension = Math.max(screen.width, screen.height)
const backgroundWidth = _([ 1024, 1280, 1366, 1440, 1600, 1680, 1920 ])
  .find(width => width >= largestDimension)
  || 2550


class BackgroundSheet extends React.Component {
  constructor(props) {
    super(props)
    const themeOverride = (new URL(document.location)).searchParams.get('t')
    this.state = {
      themeIndex: _.indexOf(themes, themeOverride) || -1,
    }
  }

  theme() {
    switch (true) {
      case this.state.themeIndex >= 0: return 'e_art:' + themes[this.state.themeIndex]
      default: return 'e_sepia:80'
    }
  }

  render() {
    return h(React.Fragment, [
      h('img', {
        src:`//res.cloudinary.com/swifteagle/image/upload/c_limit,${this.theme()},w_${backgroundWidth}/v1525446382/AoOSheet.png`,
        style: { width: '100%', position: 'absolute', top: 0, left: 0 },
      }),
      h('div', {
        onClick: () => { this.setState({ themeIndex: (this.state.themeIndex + 1) % themes.length }) },
        style: {
          height: '75%', width: '10%',
          position: 'absolute',
          //border: '1px solid magenta',
          right: 0,
          top: 0,
        },
      }),
    ])
  }
}

export default BackgroundSheet
