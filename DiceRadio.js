'use strict'

const { div } = nativeTags

const bubbleWidth = 18
const radioWidth = 17.5
const diceValues = [ 4, 6, 8, 10, 12 ]

const radioGroupStyle = {
  width: `${radioWidth}%`,
  display: 'flex',
  justifyContent: 'space-between',
  background: 'none',
  height: '100%',
}

const ringStyle = {
  borderRadius: 9999,
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
}

function paddingCalc(props) {
  const bottomAsPercentageOfRadioWidth = parseInt(props.position.bottom) * 100/radioWidth
  const fudgeFactor = 2
  return bottomAsPercentageOfRadioWidth - bubbleWidth + fudgeFactor
}

function shadow(applyShadow) {
  return applyShadow && 'inset 0px 0px 4px 2px hsla(35,75%,20%,1)'
}


const DiceRadio = props => div({ style: { ...props.style, ...radioGroupStyle } },
  diceValues.map(d =>
    div({ style: { paddingTop: `${paddingCalc(props)}%`, width: `${bubbleWidth}%` } },
      div({
        key: d,
        style: { ...ringStyle, boxShadow: shadow(props.value === d) },
        ref: e => { if (e) { e.value = d } }, // make event handling play nice by simulating input fields
        onClick: props.onChange,
      })
    )
  )
)

DiceRadio.propTypes = {
  style: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  position: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default DiceRadio
