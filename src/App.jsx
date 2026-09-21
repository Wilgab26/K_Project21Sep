import { useState } from 'react'
import './App.css'

const flowers = Array.from({ length: 13 }, (_, index) => ({
  id: index,
  size: 0.72 + (index % 4) * 0.12,
  delay: `${(index % 5) * 0.42}s`,
  duration: `${3.6 + (index % 4) * 0.5}s`,
  left: `${5 + index * 7.3}%`,
  bottom: `${10 + (index % 3) * 4}%`,
}))

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className={`garden-page ${isOpen ? 'is-open' : 'is-cover'}`}>
      <div className="sky-glow" aria-hidden="true" />
      <div className="cloud cloud-one" aria-hidden="true" />
      <div className="cloud cloud-two" aria-hidden="true" />

      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">21 de septiembre · Perú</p>
        <h1 id="page-title">Un ramo de sol<br /><em>para ti</em></h1>
        <p className="intro">Una pequeña sorpresa primaveral para la persona que hace florecer mis días.</p>

        {!isOpen && (
          <button className="enter-button" onClick={() => setIsOpen(true)}>
            <span>Ingresar</span>
            <strong aria-hidden="true">→</strong>
          </button>
        )}

        {isOpen && <article className="letter">
          <div className="letter-topline">
            <span>Una nota para mi persona favorita</span>
            <span className="sun-mark" aria-hidden="true">✦</span>
          </div>
          <div className="letter-body">
            <div className="letter-copy">
              <p className="greeting">Mi amor,</p>
              <h2>Feliz día de las flores amarillas</h2>
              <div className="divider" aria-hidden="true"><span>❋</span></div>
              <p>Cada girasol que ves aquí es un latido de mi corazón.</p>
              <p>Así como el sol que ilumina los campos, tú iluminas mi vida.</p>
              <p>Que estas flores te recuerden lo especial que eres para mí.</p>
              <p className={`hidden-note ${isOpen ? 'show-note' : ''}`}>
                Gracias por hacer que mis días florezcan. Te elegiría una y otra vez.
              </p>
              <p className="signature">Con todo mi amor,<br /><strong>tu persona que te adora</strong></p>
            </div>
            <figure className="couple-photo">
              <img
                src="/foto-juntos.jpeg"
                alt="Una foto de nosotros juntos"
                onError={(event) => event.currentTarget.classList.add('photo-missing')}
              />
              <figcaption>Coloca aquí nuestra foto</figcaption>
            </figure>
          </div>
          <button className="surprise-button" onClick={() => setIsOpen(false)}>
            <span aria-hidden="true">←</span>
            Volver al ramo
          </button>
        </article>
        }
      </section>

      <div className="meadow" aria-label="Un ramo de girasoles decorativos">
        <div className="bouquet-ribbon" aria-hidden="true">para ti</div>
        <div className="sun" aria-hidden="true"><span /></div>
        {flowers.map((flower) => (
          <div
            className="flower"
            key={flower.id}
            aria-hidden="true"
            style={{
              '--flower-size': flower.size,
              '--flower-delay': flower.delay,
              '--flower-duration': flower.duration,
              '--flower-left': flower.left,
              '--flower-bottom': flower.bottom,
            }}
          >
            <div className="stem" />
            <div className="leaf leaf-left" />
            <div className="leaf leaf-right" />
            <div className="bloom"><span /></div>
          </div>
        ))}
      </div>

      <footer>
        <span>Hecho con luz, cariño y un campo entero de girasoles</span>
        <strong>Software Engineer: Gabo</strong>
      </footer>
    </main>
  )
}

export default App
