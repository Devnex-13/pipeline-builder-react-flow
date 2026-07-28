import { useState } from "react"
import { BaseNode } from "./BasicNode";

export const MathNode = ({ id }) => {

  const [operator, setOperator] = useState('+');

  return (
    <BaseNode 
    title='Math'
    inputs={[
      {id: `${id}-a`,label:'a'},
      {id: `${id}-b`,label:'b'},
    ]}
    outputs={[{id: `${id}-result`}]} >
      <label>
        Operator
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value='+'>Add (+)</option>
          <option value='-'>Sub (-)</option>
          <option value='*'>Mul (*)</option>
          <option value='/'>Div (/)</option>
        </select>
      </label>
    </BaseNode>
  )
}