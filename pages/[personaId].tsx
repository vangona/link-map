import { useRouter } from "next/router";
import React from "react";
import Linkmap from "../components/Linkmap/Linkmap";
import SEO from "../partials/SEO";

const Persona = () => {
  const router = useRouter();
  const { personaId } = router.query;
  const elements = [
    {
      data: { id: "one", label: "일번 노드" },
      position: { x: 100, y: 100 },
    },
    { data: { id: "two", label: "이번 노드" }, position: { x: 300, y: 100 } },
    {
      data: {
        source: "one",
        target: "two",
        label: "Edge from Node1 to Node2",
      },
    },
  ];

  return (
    <>
      <SEO title="링크맵 | 페르소나" />
      <main>
        <h1>{personaId}의 링크맵</h1>
        <Linkmap elements={elements} />
      </main>
    </>
  );
};

export default Persona;
