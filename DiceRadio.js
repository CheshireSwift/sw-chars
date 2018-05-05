/* global
  h
  PropTypes
  */
'use strict'

const ringStyle = {
  borderRadius: 9999,
  border: '3px solid green',
  width: '100%',
  height: '100%',
}

function compute(props) {
  const calc = parseInt(props.position.bottom) * 100/17 - 23
  console.log(calc)
  return calc
}

const DiceRadio = props => h('div', {
  style: {
    ...props.style,
    width: '17.5%',
    display: 'flex',
    justifyContent: 'space-between',
    background: 'none',
    height: '100%',
    paddingTop: '1000%',
  },
}, [ 4, 6, 8, 10, 12 ].map(
  d => h('div', {
    style: {
      paddingTop: `calc(${compute(props)}%)`,
      border: '1px solid black',
      width: '17%' },
  },
  h('div', {
    key: d,
    style: { ...ringStyle, border: props.value === d ? '3px solid red' : 'none' },
    ref: e => { if (e) { e.value = d } },
    onClick: props.onChange,
  })
  )
))

DiceRadio.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  position: PropTypes.objectOf(PropTypes.string),
}

export default DiceRadio
