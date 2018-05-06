const { button, div, input } = nativeTags

class SkillRow extends React.Component {
  constructor(props) {
    super(props)
    this.onBlur = this.onBlur.bind(this)
  }

  skillChanged(rowChange) {
    this.props.onChange({ ...this.props.row, ...rowChange })
  }

  onBlur() {
    if (this.props.row.skill === '') {
      this.props.onChange(null)
    }
  }

  render() {
    return div({
      style: {
        height: '11.5%',
        width: '45%',
        boxSizing: 'border-box',
        paddingTop: '1%',
      },
    }, [
      input({
        style: {
          width: '74%',
          marginRight: '5%',
          background: this.props.fieldBackground,
          border: 'none',
        },
        value: this.props.row.skill,
        onChange: (e) => { this.skillChanged({ skill: e.target.value }) },
        onBlur: this.onBlur,
      }),
      h(Popup, {
        position: 'right center',
        closeOnDocumentTrick: true,
        contentStyle: { width: 'initial' },
        trigger: button({
          disabled: this.props.row.skill === '',
          style: {
            fontSize: 'smaller',
            padding: 0,
            width: '18%',
            height: '85%',
            background: this.props.fieldBackground,
          },
        }, `d${this.props.row.d || '?'}`),
      }, _.map([ 4, 6, 8, 10, 12 ], d => div({ key: d },
        button({
          style: { margin: 5 },
          onClick: () => { this.skillChanged({ d }) },
        }, `d${d}`))
      )),
    ])
  }
}

SkillRow.propTypes = {
  row: PropTypes.shape({
    skill: PropTypes.string.isRequired,
    d: PropTypes.number,
  }).isRequired,
  fieldBackground: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

class SkillList extends React.Component {
  constructor(props) {
    super(props)
  }

  changed(value) {
    this.props.onChange({ target: { value } })
  }

  get value() {
    return this.props.value || []
  }

  children(fieldBackground) {
    const values = this.value.length < 16 ? this.value.concat([ { skill: '', d: null } ]) : this.value
    return _.map(values, (row, i) => h(SkillRow, {
      row,
      fieldBackground,
      onChange: newRow => { this.rowChanged(i, newRow) },
    }))
  }

  rowChanged(index, newRow) {
    const newValue = [ ...this.value ]
    newValue[index] = newRow
    const value = _.filter(newValue)
    this.changed(value)
  }

  render() {
    return div({
      style: {
        ...this.props.style,
        background: 'none',
      },
    }, div({ style: {
      display: 'flex',
      flexFlow: 'column wrap',
      paddingTop: '4%',
      height: '100%',
    } }, this.children(this.props.style.background)))
  }
}

SkillList.propTypes = {
  style: PropTypes.objectOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])).isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(SkillRow.propTypes.row),
  onChange: PropTypes.func.isRequired,
  position: PropTypes.objectOf(PropTypes.string).isRequired,
}

SkillList.defaultProps = {
  value: [],
}

export default SkillList
