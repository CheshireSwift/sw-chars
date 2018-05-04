/* global
  _
  h
  PropTypes
  */
'use strict'

const SheetField = props => h('div', {
  style: {
    position: 'absolute',
    paddingTop: _.get(props.position, 'bottom'),
    left: 0,
    width: '100%',
    pointerEvents: 'none',
  },
}, [
  h(props.component, {
    id: props.field,
    style: {
      position: 'absolute',
      bottom: 0,
      left: _.get(props.position, 'left'),
      width: _.get(props.position, 'width'),
      height: _.get(props.position, 'height'),
      background: '#f8f888d8',
      border: 'none',
      pointerEvents: 'auto',
      ...props.style,
    },
    type: props.type,
    value: props.value || '',
    onChange: e => { props.onChange(e.target.value) },
  }),
])

SheetField.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string,
  component: PropTypes.oneOf([ PropTypes.string, PropTypes.func ]),
  type: PropTypes.string,
  onChange: PropTypes.func,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  style: PropTypes.objectOf(PropTypes.string),
}

SheetField.defaultProps = {
  value: '',
  component: 'input',
  type: 'text',
  onChange: () => {},
  style: {},
}

export default SheetField
