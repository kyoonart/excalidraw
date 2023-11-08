import { getPixelRatio } from "../utils";

class Coordinated {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  init(props: { canvas: HTMLCanvasElement; containerDOMRect: DOMRect }) {
    const { canvas, containerDOMRect } = props;
    this.ctx = props.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.canvas = props.canvas;
    this.bindMouseEvent();
    this.bindTouchEvent();
    this.bindScale();
    const ratio = getPixelRatio(this.ctx);
    this.canvas.width = containerDOMRect.width * ratio;
    this.canvas.height = containerDOMRect.height * ratio;
    this.canvas.style.width = containerDOMRect.width + "px";
    this.canvas.style.height = containerDOMRect.height + "px";
    this.scale(ratio, ratio);
  }
  bindMouseEvent() {
    this.canvas.addEventListener("mousedown", this.onMousedown);
    this.canvas.addEventListener("mousemove", this.onMousemove);
    this.canvas.addEventListener("mouseup", this.onMouseup);
  }
  bindTouchEvent() {
    this.canvas.addEventListener("touchstart", this.handleTouchStart, false);
    this.canvas.addEventListener("touchmove", this.handleTouchMove, false);
    this.canvas.addEventListener("touchend", this.handleTouchEnd, false);
  }
  bindScale() {
    window.visualViewport?.addEventListener("resize", (e) => {
      console.log(e);
      const scale = Math.max(e?.target?.scale, window.devicePixelRatio);
      const ratio = getPixelRatio(this.ctx, scale);
      this.scale(ratio, ratio);
    });
  }
  renderText(text: string, x: number, y: number) {
    this.ctx.font = "48px Georgia";
    this.ctx.fillText(text, x, y);
  }
  scale(scalewidth: number, scaleheight: number) {
    this.ctx.scale(scalewidth, scaleheight);
  }

  onMousedown(e: MouseEvent) {
    console.log(e.clientX, e.clientY, "click event");
  }
  onMousemove(e: MouseEvent) {}
  onMouseup(e: MouseEvent) {}
  handleTouchStart(e: TouchEvent) {
    console.log("on touch start", e);
  }
  handleTouchMove(e: TouchEvent) {
    console.log("on touch move", e);
  }
  handleTouchEnd(e: TouchEvent) {
    console.log("on touch end", e);
  }
  // clear the broad
  clear() {}
}
export const coordinated = new Coordinated();
