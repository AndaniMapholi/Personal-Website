import React, { useRef, useEffect } from 'react';

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouse = { x: -1000, y: -1000, radius: 150 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };
        
        const handleMouseOut = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        }

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);
        resizeCanvas();

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            maxOpacity: number;
            twinkleSpeed: number;

            constructor(x: number, y: number, speedX: number, speedY: number, size: number) {
                this.x = x;
                this.y = y;
                this.speedX = speedX;
                this.speedY = speedY;
                this.size = size;

                this.maxOpacity = Math.random() * 0.5 + 0.2; // Max opacity between 0.2 and 0.7
                this.opacity = Math.random() * this.maxOpacity;
                this.twinkleSpeed = (Math.random() - 0.5) * 0.02;
            }

            update() {
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
                this.x += this.speedX;
                this.y += this.speedY;

                // Twinkle effect
                this.opacity += this.twinkleSpeed;
                if (this.opacity > this.maxOpacity || this.opacity < 0) {
                    this.twinkleSpeed = -this.twinkleSpeed;
                }
                this.opacity = Math.max(0, Math.min(this.maxOpacity, this.opacity));
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(192, 38, 211, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 2 + 1;
                const x = Math.random() * (canvas.width - size * 2) + size;
                const y = Math.random() * (canvas.height - size * 2) + size;
                const speedX = Math.random() * 0.4 - 0.2;
                const speedY = Math.random() * 0.4 - 0.2;
                particles.push(new Particle(x, y, speedX, speedY, size));
            }
        };

        const connect = () => {
            if (!ctx) return;
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        opacityValue = 1 - distance / 100;
                        ctx.strokeStyle = `rgba(34, 211, 238, ${opacityValue * 0.15})`; // Accent color with alpha
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[b].y);
                        ctx.lineTo(particles[b].x, particles[a].y);
                        ctx.stroke();
                    }
                }
            }
        };
        
        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };
        
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default ParticleBackground;