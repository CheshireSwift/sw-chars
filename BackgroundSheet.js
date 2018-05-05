'use strict'

const { div, img } = nativeTags

const cloudinaryUser = 'swifteagle'
const imageKey = 'v1525446382/AoOSheet.png'

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

const backgroundUrl = (theme) => {
  const transformations = _.filter([ 'c_limit', theme, `w_${backgroundWidth}` ]).join(',')
  return `//res.cloudinary.com/${cloudinaryUser}/image/upload/${transformations}/${imageKey}`
}

const ThemeSelector = props => h(ReactModal,
  { isOpen: props.open },
  h('button', { onClick: props.close }, 'Close')
)

class BackgroundSheet extends React.Component {
  constructor(props) {
    super(props)
    const themeOverride = (new URL(document.location)).searchParams.get('t')
    this.state = {
      themeIndex: _.indexOf(themes, themeOverride) || -1,
      showModal: false,
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
      img({
        src: backgroundUrl(this.theme()),
        style: { width: '100%', position: 'absolute', top: 0, left: 0 },
      }),
      div({
        //onClick: () => { this.setState({ themeIndex: (this.state.themeIndex + 1) % themes.length }) },
        onClick: () => { this.setState({ showModal: true }) },
        style: {
          height: '75%', width: '10%',
          position: 'absolute',
          right: 0,
          top: 0,
        },
      }),
      h(ThemeSelector, { open: this.state.showModal, close: () => { this.setState({ showModal: false }) } }),
    ])
  }
}

export default BackgroundSheet
