# VectorShift

A full-stack pipeline builder and validator with a React Flow frontend and a FastAPI backend.

## Overview

VectorShift lets users build node-based pipelines in a drag-and-drop canvas, connect inputs and outputs, and validate the resulting graph. The frontend provides a node library, interactive canvas, and pipeline submission flow. The backend analyzes the pipeline and returns node/edge counts plus directed acyclic graph (DAG) validation.

## Key Features

- Visual pipeline builder using React Flow
- Drag-and-drop node library with:
  - Input
  - LLM
  - Output
  - Text
  - Math
  - Delay
  - Filter
  - Conditional
  - API Request
- Node connection and edge creation
- Pipeline submission to backend
- Backend pipeline analysis with:
  - node count
  - edge count
  - DAG cycle detection

## Architecture

- `frontend/` — React application bootstrapped with Create React App
  - `src/App.js` renders the pipeline toolbar, canvas, and submit button
  - `src/ui.js` manages React Flow drag/drop canvas and node/edge state
  - `src/store.js` stores nodes and edges with Zustand
  - `src/nodes/` contains custom node components for pipeline elements
- `backend/` — FastAPI service
  - `main.py` exposes a health route and `/pipelines/parse` endpoint
  - `requirements.txt` lists Python dependencies

## Getting Started

### Prerequisites

- Node.js and npm
- Python 3.9+ (or compatible)

### Backend Setup

1. Open a terminal in `backend/`
2. Create and activate a virtual environment (recommended):

   ```powershell
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1
   ```

3. Install backend dependencies:

   ```powershell
   pip install -r requirements.txt
   ```

4. Start the FastAPI server:

   ```powershell
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

5. Verify the backend is running:
   - `http://localhost:8000/` should return `{"Ping":"Pong"}`

### Frontend Setup

1. Open a terminal in `frontend/`
2. Install frontend dependencies:

   ```powershell
   npm install
   ```

3. Start the development server:

   ```powershell
   npm start
   ```

4. Open the app in your browser:
   - `http://localhost:3000`

## Usage

1. Drag nodes from the `Node Library` into the canvas.
2. Connect node handles to form a pipeline.
3. Click `Submit` to send the current pipeline to the backend.
4. The backend responds with:
   - total nodes
   - total edges
   - whether the pipeline is a valid DAG

## API

### POST `/pipelines/parse`

Request body:

```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": { "x": 0, "y": 0 },
      "data": { "id": "customInput-1", "nodeType": "customInput" }
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": { "x": 100, "y": 100 },
      "data": { "id": "llm-1", "nodeType": "llm" }
    }
  ],
  "edges": [
    {
      "id": "e-customInput-1-value-llm-1-system",
      "source": "customInput-1",
      "target": "llm-1"
    }
  ]
}
```

Response:

```json
{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true
}
```

## Notes

- The backend validates directed cycles using DFS-based graph traversal.
- CORS is configured for `http://localhost:3000`.
- The frontend currently sends node/edge metadata; execution semantics are not implemented in the backend.

## Project Structure

- `backend/main.py` — FastAPI app and pipeline analysis logic
- `backend/requirements.txt` — Python dependencies
- `frontend/package.json` — React app dependencies and scripts
- `frontend/src/` — React source files
- `frontend/src/nodes/` — custom node components

## Additional Resources

- `frontend/README.md` — default Create React App starter documentation
- `VectorShift - Frontend Technical Assessment Instructions.pdf` — assessment instructions included in repository

## Suggested Improvements

- persist pipeline designs locally or remotely
- add backend execution for nodes
- support real LLM and API request payload execution
- improve validation and error messaging
