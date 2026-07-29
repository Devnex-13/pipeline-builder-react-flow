// textNode.js

import { useState, useEffect, useMemo } from 'react';
import { useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from './BasicNode';

const VARIABLE_PATTERN = /\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g;

const MIN_WIDTH = 220;
const MAX_WIDTH = 420;
const CHARS_PER_LINE = 32;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const updateNodeInternals = useUpdateNodeInternals();

  const variables = useMemo(() => {
    const found = [];
    const seen = new Set();
    let match;
    const regex = new RegExp(VARIABLE_PATTERN);
    while ((match = regex.exec(currText)) !== null) {
      if (!seen.has(match[1])) {
        seen.add(match[1]);
        found.push(match[1]);
      }
    }
    return found;
  }, [currText]);

  const inputs = variables.map((name) => ({ id: `${id}-${name}`, label: name }));

  // Auto Sizing:
  const lines = currText.split('\n');
  const longestLine = Math.max(...lines.map((l) => l.length), 8);
  const width = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, 80 + longestLine * 6.5));
  const rows = Math.min(10, Math.max(2, lines.length + (longestLine > CHARS_PER_LINE ? 1 : 0)));

  useEffect(() => {
    updateNodeInternals(id);
  }, [id, variables.length, updateNodeInternals]);


  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode title='Text' inputs={inputs} accent='amber' outputs={[{id:`${id}-output`}]} width={width}>
        <label className="field-label">
          Text:
          <textarea
            className="field-input field-textarea"
            rows={rows}
            value={currText} 
            onChange={handleTextChange} 
            placeholder="Enter text, use {{variable}} to add inputs"
          />
        </label>
    </BaseNode>
  );
}
