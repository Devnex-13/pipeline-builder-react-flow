import { useState } from "react"
import { BaseNode } from "./BasicNode"

export const ConditionalNode = () => {

  const [expression, setExpression] = useState("")


  return (
    <BaseNode 
    type='Condition' 
    inputs={[{id: `${id}-value`}]} 
    outputs={[
      {id:`${id}-true`, label:'true'},
      {id:`${id}-false`, label:'false'}
      ]}>
      <label>
        Condition
        <input
        type='text'
        value={expression}
        onChange={(e) => setExpression(e.target.value)} />
      </label>
    </BaseNode>
  )
}