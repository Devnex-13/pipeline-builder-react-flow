import { useState } from "react"
import { BaseNode } from "./BasicNode";

export const ApiFetchNode = ({ id }) => {

  const [method, setMethod] = useState('GET');

  return (
    <BaseNode 
    title='API Fetching'
    accent="green"
    inputs={[{id: `${id}-url`}]}
    outputs={[{id: `${id}-response`}]} >
      <label>
        Method
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value='GET'>GET</option>
          <option value='POST'>POST</option>
          <option value='PUT'>PUT</option>
          <option value='DELETE'>DELETE</option>
        </select>
      </label>
    </BaseNode>
  )
}