const { button, div, input } = nativeTags

class SkillRow extends React.Component {
  skillChanged(rowChange) {
    this.props.onChange({ ...this.props.row, ...rowChange })
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
      }),
      h(Popup, {
        position: 'right center',
        closeOnDocumentTrick: true,
        contentStyle: { width: 'initial' },
        trigger: button({
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
    const buttonSuffix = _.size(this.value) < 16 ? [
      button({
        style: { width: '40%', padding: '1%' },
        onClick: () => { this.changed(this.value.concat([ { skill: '', d: null } ])) },
      }, h('i', { className: 'fas fa-plus fa-lg', style: { margin: 'auto' } })),
    ] : []
    return _.map(this.value, (row, i) => h(SkillRow, {
      row,
      fieldBackground,
      onChange: newRow => { this.rowChanged(i, newRow) },
    })).concat(buttonSuffix)
  }

  rowChanged(index, newRow) {
    const value = [ ...this.value ]
    value[index] = newRow
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
