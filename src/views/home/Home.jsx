import React from 'react'

import './Home.css'

import img01 from '../../assets/images/img-01.png'
import img02 from '../../assets/images/img-02.png'

export default function Home() {
  return (
    <React.Fragment>
        <section className="rt-home-01 text-center">
          <img src={img01} />
        </section>
        <section className="rt-home-02">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2>TRAZEMOS VIDA À SUA BICICLETA</h2>
              </div>
              <div className="col-lg-6">
                <p>Clique aqui e comece a digitar. Aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                </p>
                <p>Porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam quis nostrum.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="rt-home-03 text-center">
          <img src={img02} />
        </section>
        <section className="rt-home-04">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-0 order-1">
                <p>Clique aqui e comece a digitar. Aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                </p>
                <p>Porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam quis nostrum.</p>
              </div>
              <div className="col-lg-6">
                <h2>DESFRUTE DA SUA NOVA E RENOVADA BICICLETA</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="rt-home-05">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className='mb-3'>QUER ANDAR COM ESTILO?</h2>
                <a href="/contact" className='btn btn-outline-dark py-3 px-4 rounded-0'>ENTRE EM CONTATO</a>
              </div>
            </div>
          </div>
        </section>
    </React.Fragment>
  )
}
