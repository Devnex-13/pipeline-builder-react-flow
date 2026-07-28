import { useState } from "react"
import { BaseNode } from "./BasicNode"

export const ConditionalNode = ({id}) => {

  const [expression, setExpression] = useState("")


  return (
    <BaseNode 
    title='Conditional' 
    accent="purple"
    inputs={[{id: `${id}-value`}]} 
    outputs={[
      {id:`${id}-true`, label:'true'},
      {id:`${id}-false`, label:'false'}
      ]}>
      <label className="field-label">
        Expression
        <input
        type='text'
        className="field-input"
        value={expression}
        onChange={(e) => setExpression(e.target.value)} />
      </label>
    </BaseNode>
  )
}