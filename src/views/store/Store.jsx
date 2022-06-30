import React from 'react'

import './Store.css'

import img01 from'../../assets/images/img-04.png';
import img02 from'../../assets/images/img-05.png';
import img03 from'../../assets/images/img-06.png';

export default function Store() {
  let cards = [
    {
      img: img01,
      title: 'JORGE',
      description: 'Clique aqui e comece a digitar. Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit.',
      type: 'Bicicleta de cidade',
      color: 'Creme',
      price: 'R$800.00 reais'
    },
    {
      img: img02,
      title: 'ROSA',
      description: 'Clique aqui e comece a digitar. Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit.',
      type: 'Bicicleta de cidade',
      color: 'Vermelho',
      price: 'R$900.00 reais'
    },
    {
      img: img03,
      title: 'LUÍS',
      description: 'Clique aqui e comece a digitar. Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit.',
      type: 'Bicicleta de cidade',
      color: 'Azul',
      price: 'R$850.00 reais'
    },
  ]
  return (
    <React.Fragment>
      <section className="rt-store">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>AS NOSSAS BICICLETAS<br /> PARA VENDA IMEDIATA</h2>
            </div>
          </div>
          {
            cards.map((card) => {
              return (
                <div className="row">
                  <div className="col-lg-6 text-center">
                    <img src={card.img} alt=""/>
                  </div>
                  <div className="col-lg-6">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <p><strong>Tipo:</strong> {card.type}</p>
                    <p><strong>Cor:</strong> {card.color}</p>
                    <p><strong>Preço:</strong> {card.price}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </React.Fragment>
  )
}
