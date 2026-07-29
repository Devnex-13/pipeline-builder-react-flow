// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        padding: "14px 20px",
        background: "#0f1115",
        borderBottom: "1px solid #262b36",
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#8b92a5",
          marginBottom: "10px",
        }}
      >
        Node Library
      </div>
      <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="mathop" label="Math" />
        <DraggableNode type="delay" label="Delay" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="expression" label="Expression" />
        <DraggableNode type="apiFetching" label="Api Request" />
      </div>
    </div>
  );
};
