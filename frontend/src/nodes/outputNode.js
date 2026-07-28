// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BasicNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode 
    title='Output' 
    accent='green'
    inputs={[{id: `${id}-value`}]}>
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
          <select className="field-input" value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
    </BaseNode>
  );
}
