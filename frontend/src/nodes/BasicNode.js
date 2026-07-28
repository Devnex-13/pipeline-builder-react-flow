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
          <Handle type='target' position={Position.Left} id={`${id}-system`}/>
          {handle.label && <span>{handle.label}</span>}
        </div>
      ))}
      <div>
        {title}
      </div>

      <div>{children}</div>

      {outputs.map((handle,i) => (
        <div key={handle.id}>
          <Handle type='source' position={Position.Right} id={`${id}-value`}/>
          {handle.label && <span>{handle.label}</span>}
        </div>
      ))}
    </div>
  )
}