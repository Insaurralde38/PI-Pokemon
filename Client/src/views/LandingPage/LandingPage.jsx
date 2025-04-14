import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Sparticles from "sparticles";
import styles from './LandingPage.module.css';

function LandingPage() {
  const containerRef = useRef(null);
  const sparticlesInstance = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const initializeSparticles = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      if (sparticlesInstance.current?.canvas) {
        sparticlesInstance.current.canvas.remove();
        sparticlesInstance.current = null;
      }

      sparticlesInstance.current = new Sparticles({
        minSize: 20,
        maxSize: 70,
        count: 200,
        minAlpha: 1,
        maxAlpha: 1,
        drift: 0,
        direction: 180,
        rotation: 2,
        xVariance: 10,
        parallax: 2,
        speed: 1,
        shape: ["image", "circle"],
        imageUrl: [
          "https://img.pokemondb.net/sprites/items/poke-ball.png",
          "https://img.pokemondb.net/sprites/items/poke-ball.png",
          "https://img.pokemondb.net/sprites/items/poke-ball.png",
          "https://img.pokemondb.net/sprites/items/poke-ball.png",
          "https://img.pokemondb.net/sprites/items/poke-ball.png",
          "https://img.pokemondb.net/sprites/items/poke-ball.png",
          "https://img.pokemondb.net/sprites/items/poke-ball.png",
          "https://img.pokemondb.net/sprites/items/poke-ball.png",
          "https://img.pokemondb.net/sprites/items/poke-ball.png",
          "https://img.pokemondb.net/sprites/items/poke-ball.png",
          "https://img.pokemondb.net/sprites/items/great-ball.png",
          "https://img.pokemondb.net/sprites/items/ultra-ball.png",
          "https://img.pokemondb.net/sprites/items/master-ball.png",
          "https://img.pokemondb.net/sprites/items/friend-ball.png",
          "https://img.pokemondb.net/sprites/items/fast-ball.png",
          "https://img.pokemondb.net/sprites/items/dream-ball.png",
          "https://img.pokemondb.net/sprites/items/dive-ball.png",
          "https://img.pokemondb.net/sprites/items/level-ball.png",
          "https://img.pokemondb.net/sprites/items/lure-ball.png",
          "https://img.pokemondb.net/sprites/items/love-ball.png",
          "https://img.pokemondb.net/sprites/items/moon-ball.png",
          "https://img.pokemondb.net/sprites/items/nest-ball.png",
          "https://img.pokemondb.net/sprites/items/net-ball.png",
          "https://img.pokemondb.net/sprites/items/park-ball.png",
          "https://img.pokemondb.net/sprites/items/premier-ball.png",
          "https://img.pokemondb.net/sprites/items/quick-ball.png",
          "https://img.pokemondb.net/sprites/items/safari-ball.png",
          "https://img.pokemondb.net/sprites/items/sport-ball.png",
          "https://img.pokemondb.net/sprites/items/timer-ball.png",
        ],
        color: ["transparent"],
        parent: container,
      });

      const canvas = sparticlesInstance.current.canvas;

      if (canvas) {
        canvas.width = width;
        canvas.height = height;
        canvas.style.position = 'absolute';
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '0';
        canvas.style.pointerEvents = 'none';
        
        const ctx = canvas.getContext('2d');
        const renderLoop = () => {
          if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
          animationRef.current = requestAnimationFrame(renderLoop);
        };
        animationRef.current = requestAnimationFrame(renderLoop);
      }
    };

    initializeSparticles();

    window.addEventListener('resize', initializeSparticles);

    return () => {
      window.removeEventListener('resize', initializeSparticles);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (sparticlesInstance.current?.canvas) {
        sparticlesInstance.current.canvas.remove();
        sparticlesInstance.current = null;
      }
    };
  }, []);

  return (
    <div ref={containerRef} id="pokeRainContainer" className={styles.pokeRainContainer}>
      <div className={styles.landingContent}>
        <div className={`${styles.btnBg} ${styles.pokemon}`}>
          <div className={styles.btnGroup}>
            <div className={`${styles.btn} ${styles.ball}`}>
              <Link to="/home">
                <button className={styles.pokebutton}>
                  <div className={styles.pokemonBall} />
                  <a>
                    Pokémon
                    <span data-letters="Go!" />
                    <span data-letters="Go!" />
                    <span data-letters="" />
                  </a>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;