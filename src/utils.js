export const drawRectangle = (obj, ctx) => {
  obj.forEach((pred) => {
    const [x, y, width, height] = pred["bbox"];
    const text = pred["class"];
    ctx.strokeStyle = "green";
    ctx.font = " 20px Arial";
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};
