import React, { useState } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

const initialText = `// Hello world
console.log('Hello World');
`;

function Editor() {
  const [value, setValue] = useState(initialText);
  function onChange(newValue) {
    console.log('onChange', newValue);
    setValue(newValue);
  }
  return (
    <div>
      <AceEditor
        mode="java"
        theme="github"
        onChange={onChange}
        value={value}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
      />
      <pre style={{ marginTop: 10, background: '#eee' }}>
        <code>{value}</code>
      </pre>
    </div>
  );
}

export default Editor;
