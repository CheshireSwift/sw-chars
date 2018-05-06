'use strict'

const { button, div, img } = nativeTags

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

const ThemeSelectorButton = () => div({ style: {
  position: 'absolute',
  bottom: 0,
  height: '69%',
  width: '10%',
  right: 0,
} })

const ThemeSelector = props => div({ style: { position: 'absolute', width: '100%', paddingTop: '39%' } },
  h(Popup, {
    trigger: ThemeSelectorButton,
    contentStyle: { width: 'initial' },
    position: 'left top',
    closeOnDocumentClick: true,
  },
  themes.concat([ null ]) // include option to reset
    .map(theme => div({ key: theme },
      button({
        style: { margin: 5 },
        disabled: props.currentTheme === theme,
        onClick: () => { props.selectTheme(theme) },
      }, theme || 'default')
    ))
  )
)

class BackgroundSheet extends React.Component {
  constructor(props) {
    super(props)
    const themeOverride = (new URL(document.location)).searchParams.get('t')
    this.state = {
      selectedTheme: themeOverride,
    }
  }

  theme() {
    switch (true) {
      case !!this.state.selectedTheme: return 'e_art:' + this.state.selectedTheme
      default: return 'e_sepia:80'
    }
  }

  render() {
    return h(React.Fragment, [
      img({
        src: backgroundUrl(this.theme()),
        style: { width: '100%', position: 'absolute', top: 0, left: 0 },
      }),
      h(ThemeSelector, {
        currentTheme: this.state.selectedTheme,
        selectTheme: selectedTheme => { this.setState({ selectedTheme })},
      }),
    ])
  }
}

export default BackgroundSheet
