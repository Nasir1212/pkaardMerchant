import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function TextEditor () {
    return ( <>
    
    <ReactQuill theme="snow" value={value} onChange={setValue} />
    </> );
}

export default TextEditor ;