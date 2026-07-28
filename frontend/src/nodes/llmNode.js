// llmNode.js

import { Handle, Position } from 'reactflow';
import { BaseNode } from './BasicNode';

export const LLMNode = ({ id, data }) => {

  return (
    <BaseNode 
    title='LLM' 
    accent='purple'
    inputs={[
      { id: `${id}-system`,label:'system'},
      { id: `${id}-prompt`,label:'prompt'}
      ]}
    outputs={[{ id: `${id}-response`}]}>

    <p className="node-description">Runs a language model over the given prompt.</p>

    </BaseNode>
  );
}
