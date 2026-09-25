import { useState } from 'react'
import './App.css'

const flowers = Array.from({ length: 100 }, (_, index) => {
  const row = Math.floor(index / 20)
  const column = index % 20
  const isRightEdge = column >= 15
  const sizeBase = 0.44 + ((row + column) % 6) * 0.06
  const size = isRightEdge ? Math.max(0.18, sizeBase * 0.62) : sizeBase

  return {
    id: index,
    size,
    delay: `${(index % 10) * 0.16}s`,
    duration: `${3.1 + (index % 4) * 0.35}s`,
    left: `${2.5 + column * 4.6}%`,
    bottom: `${8 + row * 7}%`,
  }
})

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className={`garden-page ${isOpen ? 'is-open' : 'is-cover'}`}>
      <div className="sky-glow" aria-hidden="true" />
      <div className="cloud cloud-one" aria-hidden="true" />
      <div className="cloud cloud-two" aria-hidden="true" />

      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">21 de septiembre · Perú</p>

        <div className="title-row">
          <h1 id="page-title">Un ramo de sol<br /><em>para ti</em></h1>

          {!isOpen && (
            <button className="enter-button" onClick={() => setIsOpen(true)}>
              <span>Ingresar</span>
              <strong aria-hidden="true">→</strong>
            </button>
          )}
        </div>

        <p className="intro">Una pequeña sorpresa primaveral para la persona que hace florecer mis días.</p>

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
        <div className="bouquet-ribbon" aria-hidden="true" />
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
        <span>Hecho con luz, cariño y un campo entero de girasoles para mi amada.</span>
        <strong>© 2026 - Gabo, por Karlita</strong>
      </footer>
    </main>
  )
}

export default App
