// textNode.js

import { useState } from 'react';
import { BaseNode } from './BasicNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode title='Text' accent='amber' outputs={[{id:`${id}-output`}]}>
        <label className="field-label">
          Text:
          <textarea
            className="field-input field-textarea"
            value={currText} 
            onChange={handleTextChange} 
            placeholder="Enter text, use {{variable}} to add inputs"
          />
        </label>
    </BaseNode>
  );
}
