
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = Math.random() > 0.5 ? '#00D4FF' : '#7DF9FF';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Pulse opacity
        this.opacity += Math.sin(Date.now() * 0.001) * 0.01;
        this.opacity = Math.max(0.1, Math.min(0.8, this.opacity));
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    const particleCount = 100;
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }

    // Draw grid
    const drawGrid = () => {
      const gridSize = 50;
      const time = Date.now() * 0.001;
      
      ctx.save();
      ctx.strokeStyle = '#00D4FF';
      ctx.globalAlpha = 0.1 + Math.sin(time) * 0.05;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + Math.sin(time + x * 0.01) * 5, 0);
        ctx.lineTo(x + Math.sin(time + x * 0.01) * 5, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + Math.cos(time + y * 0.01) * 5);
        ctx.lineTo(canvas.width, y + Math.cos(time + y * 0.01) * 5);
        ctx.stroke();
      }
      ctx.restore();
    };

    // Draw connections between close particles
    const drawConnections = () => {
      ctx.save();
      ctx.strokeStyle = '#00D4FF';
      ctx.lineWidth = 1;

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);

          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.2;
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();
    };

    // Draw floating geometric shapes
    const drawGeometricShapes = () => {
      const time = Date.now() * 0.001;
      
      // Rotating triangles
      for (let i = 0; i < 3; i++) {
        ctx.save();
        const x = canvas.width * (0.2 + i * 0.3);
        const y = canvas.height * 0.3 + Math.sin(time + i) * 50;
        
        ctx.translate(x, y);
        ctx.rotate(time * 0.5 + i);
        ctx.strokeStyle = '#BC13FE';
        ctx.globalAlpha = 0.3;
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.moveTo(0, -20);
        ctx.lineTo(-17, 10);
        ctx.lineTo(17, 10);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }

      // Pulsing circles
      for (let i = 0; i < 2; i++) {
        ctx.save();
        const x = canvas.width * (0.3 + i * 0.4);
        const y = canvas.height * 0.7 + Math.cos(time + i) * 30;
        const radius = 15 + Math.sin(time * 2 + i) * 5;
        
        ctx.strokeStyle = '#7DF9FF';
        ctx.globalAlpha = 0.4;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#7DF9FF';
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      drawGrid();
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections
      drawConnections();
      
      // Draw geometric shapes
      drawGeometricShapes();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default AnimatedBackground;
