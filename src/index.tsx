import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { coordinated } from "./controlers";
const App = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (containerRef.current && canvasRef.current) {
      const containerDOMRect = containerRef.current.getBoundingClientRect();

      let dpr = window.devicePixelRatio;

      canvasRef.current.width = dpr * containerDOMRect.width;
      canvasRef.current.height = dpr * containerDOMRect.height;
      coordinated.init({
        ctx: canvasRef.current.getContext("2d") as CanvasRenderingContext2D,
        dpr,
      });
      coordinated.renderText("excalidraw", 50, 50);
    }
  }, []);
  return (
    <div style={{ width: "100%", height: "100%" }} ref={containerRef}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
