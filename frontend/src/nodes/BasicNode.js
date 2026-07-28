import { Handle, Position } from 'reactflow';
import "./nodes.css"

export const BaseNode = ({
  title,
  accent = 'blue',
  inputs=[],
  outputs=[],
  children,
  width
}) => {
  return (
    <div class={`base-node accent-${accent}`}>
      {inputs.map((handle,i) => (
        <div key={handle.id}>
          <Handle type='target' position={Position.Left} id={handle.id}/>
          {handle.label && <span>{handle.label}</span>}
        </div>
      ))}
      <div>
        {title}
      </div>

      <div>{children}</div>

      {outputs.map((handle,i) => (
        <div key={handle.id}>
          {handle.label && <span>{handle.label}</span>}
          <Handle type='source' position={Position.Right} id={handle.id}/>
        </div>
      ))}
    </div>
  )
}