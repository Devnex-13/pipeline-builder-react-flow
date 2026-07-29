// draggableNode.js

const ACCENT_MAP = {
  customInput: '#5b8def',
  llm: '#a56eff',
  customOutput: '#34c77b',
  text: '#f0a93a',
  mathop: '#33c2c2',
  filter: '#f0618a',
  delay: '#5b8def',
  expression: '#a56eff',
  apiFetching: '#34c77b',
};


export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };

    const accent = ACCENT_MAP[type] || '#5b8def';
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '95px', 
          padding: '0 14px',
          height: '50px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '8px',
          borderRadius: '8px',
          background: '#171a21',
          borderTop: `2px solid ${accent}`,
          fontFamily: "'Inter', sans-serif",
          fontSize: '12px',
          fontWeight: 500,
          color: '#e7e9ee',
          userSelect: 'none',
        }} 
        draggable
      >
          <span style={{ color: '#fff' }}>{label}</span>
      </div>
    );
  };
  