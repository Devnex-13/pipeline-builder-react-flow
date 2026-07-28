import { useState } from "react"
import { BaseNode } from "./BasicNode";

export const DelayNode = ({ id }) => {

  const [second, setSecond] = useState('1');

  return (
    <BaseNode title='Delay' accent="blue" inputs={[{id: `${id}-in`}]} outputs={[{id: `${id}-out`}]}>
    <label>
      Second
      <input
      type='number'
      min='0'
      step='0.1'
      value={second}
      onChange={(e) => setSecond(e.target.value)} />
    </label>
    </BaseNode>
  )
}