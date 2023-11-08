import * as React from "react";
import ReactDOM from "react-dom/client";
import { coordinated } from "./controllers";
import { getPixelRatio } from "./utils/index";
import "./index.css";

const App = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (containerRef.current && canvasRef.current) {
      const containerDOMRect = containerRef.current.getBoundingClientRect();
      coordinated.init({
        ctx: canvasRef.current.getContext("2d") as CanvasRenderingContext2D,
      });
      const ratio = getPixelRatio(coordinated);
      canvasRef.current.width = containerDOMRect.width * ratio;
      canvasRef.current.height = containerDOMRect.height * ratio;
      canvasRef.current.style.width = containerDOMRect.width + 'px';
      canvasRef.current.style.height = containerDOMRect.height + 'px';
      coordinated.scale(ratio, ratio);
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
