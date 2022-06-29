import React from 'react'

import './About.css'

import ImgAbout from '../../assets/images/img-03.png'

export default function About() {
  return (
    <React.Fragment>
        <section className="rt-about">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <img src={ImgAbout} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <h2>TRAZEMOS VIDA À SUA BICICLETA</h2>
                        <p>Clique aqui e comece a digitar. Molestias excepturi sint occaecati cupiditate non provident similique sunt in culpa qui officia deserunt mollitia animi id est laborum et dolorum fuga et harum quidem.</p>
                        <p>Voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat sed ut perspiciatis unde.</p>
                        <p>Eum fugiat quo voluptas nulla pariatur at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et.</p>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
