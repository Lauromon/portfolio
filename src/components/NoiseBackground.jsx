import { useEffect, useRef } from "react";

export default function NoiseBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Ajustar tamaño
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Dibujar ruido
    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer = new Uint32Array(imageData.data.buffer);
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] = Math.random() < 0.5 ? 0xff000000 : 0xffffffff;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    // Refrescar cada frame
    let animationId;
    const loop = () => {
      drawNoise();
      animationId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-15 mix-blend-overlay z-50"
    />
  );
}
