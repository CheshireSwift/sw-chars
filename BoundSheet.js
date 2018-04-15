/* global
  _
  React
  h
  */
'use strict'

import formConfig from './formConfig.js'
import SheetField from './SheetField.js'

class BoundSheet extends React.Component {
  constructor(props) {
    super(props)
    this.state = _.mapValues(formConfig, _.constant(null))
  }

  componentDidMount() {
    this.props.docRef.onSnapshot(doc => {
      const docData = _.pick(doc.data(), _.keys(formConfig))
      this.setState({ ...docData })
    })

    this.props.docRef.get().then(doc => {
      if (doc.exists) {
        const docData = _.pick(doc.data(), _.keys(formConfig))
        this.setState({ ...docData })
      }
    })
  }

  fieldChangeHandler(field) {
    return newValue => {
      this.props.docRef.set({ [field]: newValue }, { merge: true })
    }
  }

  render() {
    return h(_.map(_.keys(this.state), field => h(SheetField, {
      key: field,
      field,
      value: this.state[field],
      onChange: this.fieldChangeHandler(field),
      ...formConfig[field],
    })))
  }
}

export default BoundSheet
