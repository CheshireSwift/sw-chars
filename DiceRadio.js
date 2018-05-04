/* global
  h
  PropTypes
  */
'use strict'

const ringStyle = {
  borderRadius: 9999,
  border: '3px solid green',
  width: '17%',
}

const DiceRadio = props => h('div', {
  style: {
    ...props.style,
    width: '17.5%',
    display: 'flex',
    justifyContent: 'space-between',
    background: 'none',
  },
}, [ 4, 6, 8, 10, 12 ].map(
  d => h('div', {
    key: d,
    style: { ...ringStyle, border: props.value === d ? '3px solid red' : 'none' },
    ref: e => { if (e) { e.value = d } },
    onClick: props.onChange,
  })
),
)

DiceRadio.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
}

export default DiceRadio
