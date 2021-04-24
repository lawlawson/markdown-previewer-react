import React from 'react';
import Badge from 'react-bootstrap/Badge';
let marked = require('marked');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `
# Welcome to my Markdown Previewer!

## This is a sub-heading...

### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 back-ticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
return multiLineCode;
}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://github.com/lawlawson), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....

And here. | Okay. | I think we get it.
- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![For the love of coding](https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=200)  
`,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
    marked.setOptions({ breaks: true });
  }

  render() {
    // const inputStyle = {
    //   width: '400px',
    //   height: '50vh',
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    //   padding: '10px',
    // };

    // const outputStyle = {
    //   width: '400px',
    //   height: '100%',
    //   backgroundColor: '#DCDCDC',
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    //   padding: '10px',
    // };

    return (
      <div className='App'>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col text-center'>
              <h1>
                <Badge className='text-align-center'>Markdown Previewer</Badge>
              </h1>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-md-4 d-flex flex-column'>
              <h4>
                <Badge className='text-align-center mb-4 text-danger'>
                  Markdown
                </Badge>
              </h4>

              <div className='mark-input form-group flex-grow-1 d-flex flex-column'>
                <textarea
                  id='editor'
                  className='input form-control flex-grow-1'
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}>
                  {console.log(this.state.markdown)}
                </textarea>
              </div>
            </div>

            <div className='col-md-8'>
              <div className='col text-center'>
                <h4>
                  <Badge className='text-align-center mb-4 text-success'>
                    Preview
                  </Badge>
                </h4>
              </div>
              <div
                id='preview'
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
