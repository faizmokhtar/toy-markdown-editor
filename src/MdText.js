import * as React from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!

class MdText extends React.Component {
    render() {
        return (
            <MdEditor
                style={{  height: '700px' }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={this.handleEditorChange}
            />
        )
       
    }

    handleEditorChange({html, text}) {    
        console.log('handleEditorChange', html, text)
    }
}

export default MdText;