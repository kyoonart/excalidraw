class Coordinated {
  ctx: CanvasRenderingContext2D;
  init(props: { ctx: CanvasRenderingContext2D }) {
    this.ctx = props.ctx;
  }
  renderText(text: string, x: number, y: number) {
    this.ctx.font = "48px serif";
    this.ctx.fillText(text, x, y);
  }
}
export const coordinated = new Coordinated();
