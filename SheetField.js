'use strict'

const { div } = nativeTags

const SheetField = props => div({
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
    value: props.value || (_.isString(props.component) ? '' : null),
    onChange: e => { props.onChange(e.target.value) },
    position: props.position,
  }),
])

SheetField.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.any,
  component: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
  type: PropTypes.string,
  onChange: PropTypes.func,
  position: PropTypes.shape({
    bottom: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    left: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    height: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    width: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  }).isRequired,
  style: PropTypes.objectOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])),
}

SheetField.defaultProps = {
  value: null,
  component: 'input',
  type: 'text',
  onChange: () => {},
  style: {},
}

export default SheetField
