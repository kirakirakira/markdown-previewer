import React, { Component } from 'react';
import marked from 'marked';

class ControlledInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  componentWillMount() {
    let initialMarkdown = '# H1 Size Header \n## H2 Size Header \n' +
    '[GitHub - kirakirakira](http://github.com/kirakirakira) \n' +
    '\nkira is awesome \n' +
    '\n```javascript \nfunction fancyAlert(arg) { \n\treturn arg + 1 \n}\n```' + '\n' +
    '\n1. Item 1 \n' +
    '\nAs Kanye West said: \n' +
    '\n> We are living the future so \n\n> the present is our past\n' +
    '\n![React Logo w/ Text](https://goo.gl/Umyytc)\n' +
    '\n**what up**'

    this.setState({
      input: initialMarkdown
    })
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  getMarkdownText(input) {
    let rawMarkup = marked(input, {santize: true});
    return {__html: rawMarkup};
  }

  render() {
    return (
      <div>
        <h1>This is the editor</h1>
        <textarea cols="100" rows="10" id="editor" value={ this.state.input } onChange={ this.handleChange.bind(this) } />
        <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText(this.state.input)} />
      </div>
    )
  }
}

export default ControlledInput
