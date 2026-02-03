import { LogViewer, ScaleTrack, StackedTrack } from "@equinor/videx-wellog";
import { useRef } from "react";
import "@equinor/videx-wellog/dist/styles/styles.css";

const ex5 = async () => {
  const cementLength = 10;
  const names = ["CEM", "FORM", "Other"];
  const l = ["A", "B", "C", "D"];
  const arr = [];
  let currentFrom = Math.random() * 100;
  for (let index = 1; index <= cementLength; index++) {
    const newTo = currentFrom + 100 + Math.random() * 100;
    const name = `${names[Math.floor(Math.random() * names.length)]} ${Math.floor(Math.random() * 8)}${l[Math.floor(Math.random() * l.length)]}`;
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    const area = { name, to: newTo, from: currentFrom, color: { r, g, b } };
    arr.push(area);
    currentFrom = newTo;
  }
  return arr;
};

export const SampleVidexWellogPlot = () => {
  const isInitialized = useRef(false);

  function initializePlot(div: HTMLDivElement) {
    if (!div || isInitialized.current) return;
    const viewer = new LogViewer(); // Error occurs here
    const scaleTrack = new ScaleTrack("scale", { maxWidth: 60 });
    const cementTrack = new StackedTrack("id", { data: ex5 });
    viewer.init(div).setTracks([scaleTrack, cementTrack]);
    isInitialized.current = true;
  }

  return (
    <div
      ref={initializePlot}
      style={{ width: "500px", maxHeight: "500px", border: "1px solid grey" }}
    />
  );
};
