class Coordinated {
  ctx: CanvasRenderingContext2D;
  init(props: { ctx: CanvasRenderingContext2D }) {
    this.ctx = props.ctx;
  }
  renderText(text: string, x: number, y: number) {
    this.ctx.font = '48px Georgia';
    this.ctx.fillText(text, x, y);
  }
  scale(scalewidth: number, scaleheight: number) {
    this.ctx.scale(scalewidth, scaleheight);
  }
}
export const coordinated = new Coordinated();
