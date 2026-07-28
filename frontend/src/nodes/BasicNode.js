import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  title,
  inputs=[],
  outputs=[],
  children,
  width
}) => {
  return (
    <div>
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