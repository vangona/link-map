import { Button } from "@mui/material";
import CytoscapeComponent from "react-cytoscapejs";
import SEO from "../partials/SEO";

export default function Home() {
  const elements = [
    { data: { id: "one", label: "일번 노드" }, position: { x: 0, y: 0 } },
    { data: { id: "two", label: "이번 노드" }, position: { x: 100, y: 0 } },
    {
      data: { source: "one", target: "two", label: "Edge from Node1 to Node2" },
    },
  ];

  return (
    <>
      <SEO title="링크맵 | 홈" />
      <main>
        <div>안녕하세요</div>
        <Button variant="outlined" color="primary">
          버튼 사용해보기
        </Button>
        <CytoscapeComponent
          elements={elements}
          style={{ width: "600px", height: "600px" }}
        />
      </main>
    </>
  );
}
