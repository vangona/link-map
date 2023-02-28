import cytoscape from "cytoscape";
import React from "react";
import CytoscapeComponent from "react-cytoscapejs";

interface LinkmapProps {
  elements: cytoscape.ElementDefinition[];
}

const Linkmap = ({ elements }: LinkmapProps) => {
  return (
    <CytoscapeComponent
      elements={elements}
      style={{ width: "100vw", height: "100vh", position: "absolute", top: 0 }}
    />
  );
};

export default Linkmap;
