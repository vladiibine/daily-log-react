import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils} from 'draft-js';

class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyCommand(command, editorState){
        debugger;
        console.log('vlad was here 2');
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState){
            this.onChange(newState);
            return 'handled'
        }
        return 'not-handled'
    }

    handleKeyPress(evt){
        console.log('a key was pressed!');
        debugger
    }

    render() {
        return (
            <Editor
                editorState={this.state.editorState}
                onChange={this.onChange}
                handleKeyCommand={this.handleKeyCommand}
                keyBindingFn={this.handleKeyPress}
            />
        );
    }
}

ReactDOM.render(
    <div>
        asdf
        <MyEditor/>
        zxcv
    </div>,
    document.querySelector('.container')
);