from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Pipeline(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


def is_directed_acyclic_graph(node_ids, edge_pairs):
    """Standard 3-color DFS cycle detection."""
    adjacency = {node_id: [] for node_id in node_ids}
    for source, target in edge_pairs:
        if source in adjacency:
            adjacency[source].append(target)

    WHITE, GRAY, BLACK = 0, 1, 2
    color = {node_id: WHITE for node_id in node_ids}

    def visit(node_id):
        color[node_id] = GRAY
        for neighbor in adjacency.get(node_id, []):
            if neighbor not in color:
                continue  # edge points to an unknown node id; ignore defensively
            if color[neighbor] == GRAY:
                return False  # back-edge found -> cycle
            if color[neighbor] == WHITE and not visit(neighbor):
                return False
        color[node_id] = BLACK
        return True

    return all(visit(node_id) for node_id in node_ids if color[node_id] == WHITE)

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    node_ids = [node.get("id") for node in pipeline.nodes]
    edge_pairs = [(edge.get("source"), edge.get("target")) for edge in pipeline.edges]

    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_directed_acyclic_graph(node_ids, edge_pairs),
    }