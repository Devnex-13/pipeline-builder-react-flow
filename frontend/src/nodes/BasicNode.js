import { Handle, Position } from 'reactflow';
import "./nodes.css"

const handleOffset = (index, total) => `${((index + 1) / (total + 1)) * 100}%`;

export const BaseNode = ({
  title,
  accent = 'blue',
  inputs=[],
  outputs=[],
  children,
  width
}) => {
  return (
    <div class={`base-node accent-${accent}`} style={width ? { width } : undefined}>
      {inputs.map((handle,i) => (
        <div key={handle.id} className="handle-row handle-row-left" style={{ top: handleOffset(i, inputs.length) }}>
          <Handle type='target' position={Position.Left} id={handle.id} className="base-node-handle"/>
          {handle.label && <span className="handle-label handle-label-left">{handle.label}</span>}
        </div>
      ))}
      <div className="base-node-header">
        <span className="base-node-dot" />
        <span className="base-node-title">{title}</span>
      </div>

      <div className="base-node-body">{children}</div>

      {outputs.map((handle,i) => (
        <div key={handle.id} className="handle-row handle-row-right" style={{ top: handleOffset(i, outputs.length) }}>
          {handle.label && <span className="handle-label handle-label-right">{handle.label}</span>}
          <Handle type='source' position={Position.Right} id={handle.id} className="base-node-handle"/>
        </div>
      ))}
    </div>
  )
}