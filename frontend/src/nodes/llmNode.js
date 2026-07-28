// llmNode.js

import { Handle, Position } from 'reactflow';
import { BaseNode } from './BasicNode';

export const LLMNode = ({ id, data }) => {

  return (
    <BaseNode 
    title='LLM' 
    inputs={[
      { id: `${id}-system`,label:'system'},
      { id: `${id}-prompt`,label:'prompt'}
      ]}
    outputs={[{ id: `${id}-response`}]}>
      
    <p>Runs a language model over the given prompt.</p>

    </BaseNode>
  );
}
