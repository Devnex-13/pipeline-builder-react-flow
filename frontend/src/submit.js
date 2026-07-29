// submit.js

import { useState } from 'react';
import { shallow } from 'zustand/shallow';
import { useStore } from './store';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

const BACKEND_URL = 'http://localhost:8000';

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setError(null);
    setIsSubmitting(true);
    try {
      const response = await fetch(`${BACKEND_URL}/pipelines/parse`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const { num_nodes, num_edges, is_dag } = await response.json();

      alert(
        `Pipeline Analysis\n\n` +
        `Nodes: ${num_nodes}\n` +
        `Edges: ${num_edges}\n` +
        `Valid DAG: ${is_dag ? 'Yes' : 'No — this pipeline contains a cycle'}`
      );
    } catch (err) {
      setError('Could not reach the backend. Is it running on port 8000?');
    } finally {
      setIsSubmitting(false);
    }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px 0' }}>
        <button
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '13px',
          fontWeight: 600,
          color: '#0f1115',
          background: isSubmitting ? '#3a4152' : '#e7e9ee',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 28px',
          cursor: isSubmitting ? 'default' : 'pointer',
        }}
        >
        {isSubmitting ? 'Submitting…' : 'Submit'}
        </button>
      {error && <span style={{ color: '#f0618a', fontSize: '12px' }}>{error}</span>}
    </div>
    );
};