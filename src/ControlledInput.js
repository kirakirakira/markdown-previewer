import React, { Component } from 'react';
import marked from 'marked';

class ControlledInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  getMarkdownTest() {
    let rawMarkup = marked(this.state.input, {santize: true});
    return {__html: rawMarkup};
  }

  render() {
    return (
      <div>
        <h1>This is the editor</h1>
        <textarea id="editor" value={ this.state.input } onChange={ this.handleChange.bind(this) } />
        <div id="preview" dangerouslySetInnerHTML={this.getMarkdownTest()} />
      </div>
    )
  }
}

export default ControlledInput
