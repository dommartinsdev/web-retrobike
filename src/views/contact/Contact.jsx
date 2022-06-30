import React from 'react'

import './Contact.css'

import ImgContact from '../../assets/icons/brand.svg'

export default function Contact() {
  return (
    <React.Fragment>
      <section className="rt-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <input class="form-control form-control-lg rounded-0 mb-3" type="text" placeholder="Informe seu nome..."/>
              <input class="form-control form-control-lg rounded-0 mb-3" type="email" placeholder="Informe seu email..."/>
              <textarea class="form-control form-control-lg rounded-0 mb-3" cols="30" rows="5" placeholder='Deixe sua mensagem...'></textarea>
              <input type="submit" value="Enviar" className='btn btn-lg rounded-0' />
            </div>
            <div className="col-lg-6">
              <img src={ImgContact} alt="" />
              <p>Clique aqui e comece a digitar. Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</p>
              <h5>Horários</h5>
              <h6>Seg-Sex, 8h - 18h</h6>
              <h5>Número de telefone</h5>
              <h6>51 99999-8888</h6>
              <h5>E-mail</h5>
              <h6>retrobike@gmail.com</h6>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
