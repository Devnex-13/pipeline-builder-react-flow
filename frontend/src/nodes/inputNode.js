// inputNode.js

import { useState } from 'react';
import { BaseNode } from './BasicNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode title='Input' accent='blue' outputs={[{ id: `${id}-value` }]}>
        <label className="field-label">
          Name:
          <input
          className="field-input"
          type="text" 
          value={currName} 
          onChange={handleNameChange} 
          />
        </label>
        <label className="field-label">
          Type:
          <select className="field-input" value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
    </BaseNode>
  );
}
