const { div, svg } = nativeTags

const SliderTracker = (length, direction) => props =>
  div({ style: { ...props.style, background: 'none', display: 'flex', flexDirection: direction } },
    _.range(length).map(n =>
      div(
        {
          onClick: props.onChange,
          ref: e => { if (e) { e.value = n } },
          style: {
            height: `${100/length}%`,
            background: `radial-gradient(circle, rgba(255,255,255,${(n+3)/(length+2)}) 20%, rgba(0,0,0,0) 60%)`,
          },
        },
        svg({
          'viewBox': '0 0 18 18',
          style: {
            visibility: (props.value || 0) === n ? 'visible' : 'hidden',
            height: '100%',
            width: '100%',
          },
        }, [
          h('path', {
            fill: 'black',
            stroke: 'black',
            d: {
              'column': 'M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z',
              'column-reverse': 'M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z',
            }[direction],
          }),
        ])
      )
    )
  )

SliderTracker.propTypes = {
  style: PropTypes.objectOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])).isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  position: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default SliderTracker
