import { BaseNode } from "./BasicNode"
import { useState } from "react"

export const FilterNode = ({ id }) => {

  const [condition, setCondition] = useState('length > 0');

  return (
    <BaseNode title='Filter' accent='rose' inputs={[{id:`${id}-items`}]} outputs={[{id:`${id}-filtered`}]}>
      <label className="field-label">
        Condition
        <input
        className="field-input"
        type='text'
        value={condition}
        onChange={(e) => setCondition(e.target.value)} />
      </label>
    </BaseNode>
  );
};