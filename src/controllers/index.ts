class Coordinated {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  init(props: { canvas: HTMLCanvasElement }) {
    this.ctx = props.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.canvas = props.canvas;
    this.bindMouseEvent();
  }
  bindMouseEvent() {
    this.canvas.addEventListener("mousedown", this.onMousedown);
    this.canvas.addEventListener("mousemove", this.onMousemove);
    this.canvas.addEventListener("mouseup", this.onMouseup);
  }
  renderText(text: string, x: number, y: number) {
    this.ctx.font = '48px Georgia';
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
}
export const coordinated = new Coordinated();
