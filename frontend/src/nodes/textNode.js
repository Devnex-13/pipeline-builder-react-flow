// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BasicNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode title='Text' outputs={[{id=`${id}-output`}]}>
        <label>
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
          />
        </label>
    </BaseNode>
  );
}
