import React, { useEffect, useRef } from 'react';

export default function TechCanvas({ theme = 'cyber', isMatrixRain = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Color definitions based on active theme
    const getColors = () => {
      switch (theme) {
        case 'matrix':
          return {
            node: '#10b981',
            line: '16, 185, 129',
            glow: '#059669',
            text: '#34d399'
          };
        case 'neon':
          return {
            node: '#ec4899',
            line: '236, 72, 153',
            glow: '#d946ef',
            text: '#f472b6'
          };
        case 'synthwave':
          return {
            node: '#8b5cf6',
            line: '139, 92, 246',
            glow: '#06b6d4',
            text: '#c084fc'
          };
        case 'cyber':
        default:
          return {
            node: '#3b82f6',
            line: '59, 130, 246',
            glow: '#06b6d4',
            text: '#38bdf8'
          };
      }
    };

    // Particle Constellation setup
    const numParticles = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 12000), 100);
    const particles = [];
    const mouse = { x: null, y: null, radius: 170 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.char = Math.random() > 0.5 ? '1' : '0';
        this.charTimer = Math.floor(Math.random() * 100);
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interact
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = dx / distance;
            const directionY = dy / distance;
            this.x -= directionX * force * 2;
            this.y -= directionY * force * 2;
          }
        }

        this.charTimer++;
        if (this.charTimer > 120) {
          this.char = Math.random() > 0.5 ? '1' : '0';
          this.charTimer = 0;
        }
      }

      draw(colors) {
        ctx.fillStyle = colors.node;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw binary floaters occasionally
        if (this.size > 2) {
          ctx.font = '10px "Courier New", monospace';
          ctx.fillStyle = `rgba(${colors.line}, 0.4)`;
          ctx.fillText(this.char, this.x + 4, this.y + 4);
        }
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    // Matrix Rain setup
    const matrixChars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789</>{}[]=+#*';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    const render = () => {
      const colors = getColors();

      if (isMatrixRain) {
        // Semi-transparent black overlay for matrix trail
        ctx.fillStyle = 'rgba(10, 15, 30, 0.15)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = colors.node;
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          ctx.fillStyle = Math.random() > 0.95 ? '#ffffff' : colors.node;
          ctx.fillText(text, x, y);

          if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      } else {
        // Clear canvas with faint trail
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Connect particles with cyber lines
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw(colors);

          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 130) {
              const opacity = (1 - dist / 130) * 0.35;
              ctx.strokeStyle = `rgba(${colors.line}, ${opacity})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }

          // Connect to mouse pointer
          if (mouse.x && mouse.y) {
            const dx = particles[i].x - mouse.x;
            const dy = particles[i].y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
              const opacity = (1 - dist / mouse.radius) * 0.6;
              ctx.strokeStyle = `rgba(${colors.line}, ${opacity})`;
              ctx.lineWidth = 1.2;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, isMatrixRain]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-75"
    />
  );
}
