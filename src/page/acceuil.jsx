import '../css/acceuil.css'
import '../css/responsive.css'
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Acceuil = () => {

    // slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll:1,
        autoplay: true, // Ajout de l'autoplay
        autoplaySpeed: 1000, // Vitesse de défilement automatique en millisecondes
      };
      const parametre = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
      };
    return (  
        <>
        <div className="container">
            <div className="header">
                <header >
                

                    <div className="logo">
                        <img src="src\assets\image\logo3.svg" alt=""/>
                    </div>
                    <div>
                    <ul className="menu">
                        <li><a href="#home">Acceuil</a></li>
                        <li><a href="#cars">Sante animal</a></li>
                        <li><a href="/boutique">Nos produits</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    </div>

                    <div>
                        <button className="login_btn">se connecter</button>
                    </div>
                </header>
                <div className="img ">
                    <div className="texte">
                        <h2>Faites decoler votre elevage avec les meilleurs eleveurs</h2>
                        <div className="button">
                            <div className="button1">
                                <button><a href="">Qui sommes nous?</a></button>
                            </div>
                            <div className="button2">
                                <button><a href="">Rejoingnez nous </a></button>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            <main>
                <div className="contenuslider">
                    <div className="slider">
                        <h2>poste recente</h2>
                    <div className="slider-container">
                            <Slider className='sider' {...settings}>
                                <div className="image1" >
                                    <img src="src/assets/image/belier.jpg" alt="" />
                                    <div className="content">
                                        <h4>Acheter ce mouton</h4>
                                        <button><a href="#">acheter</a></button>
                                    </div>
                                </div>
                                <div className="image1">
                                <img src="src/assets/image/belier.jpg" alt="" />
                                <div className="content">
                                        <h4>Acheter ce mouton</h4>
                                        <button><a href="#">acheter</a></button>
                                </div>
                            
                                </div>
                                <div className="image1">
                                    <img src="src/assets/image/belier.jpg" alt="" />
                                    <div className="content">
                                            <h4>Acheter ce mouton</h4>
                                            <button><a href="#">acheter</a></button>
                                    </div>
                                </div>
                                <div className="image1">
                                <img src="src/assets/image/belier.jpg" alt="" />
                                <div className="content">
                                        <h4>Acheter ce mouton</h4>
                                        <button><a href="#">acheter</a></button>
                                </div>
                                </div>
                                <div className="image1">
                                    <img src="src/assets/image/belier.jpg" alt="" />
                                    <div className="content">
                                            <h4>Acheter ce mouton</h4>
                                            <button><a href="#">acheter</a></button>
                                    </div>
                                </div>
                                <div className="image1">
                                    <img src="src/assets/image/belier.jpg" alt="" />
                                    <div className="content">
                                        <h4>Acheter ce mouton</h4>
                                        <button><a href="#">acheter</a></button>
                                    </div>
                                </div>
                                
                            </Slider>
                        </div>
                    </div>
                </div>
    
            </main>
            <div className="eleveur">
                <div className="elevage">
                    <div className="group">
                        <img src="src/assets/image/groupe.svg" alt="" />
                    </div>
                    <div className="texte">
                        <h1>Vous etes eleveur de mouton ladoum</h1>
                        <p>Entrez dans une nouvelle ère de gestion d'élevage 
                        avec notre application conçue spécialement pour les éleveurs engagés dans 
                        la promotion de la santé, du bien-être animal et de la productivité.
                        Simplifiez votre quotidien en accédant à des outils avancés pour suivre la santé de vos animaux,  surveiller la croissance et la nutrition,
                            tout en étant connecté à une communautéde professionnels vétérinaires prêts à vous soutenir. 
                            Découvrez comment notre application peut révolutionner votre manière de gérer.
                        </p>
                        <div className="button">
                            <div className="button1">
                                <button><a href="">Qui sommes nous?</a></button>
                            </div>
                            <div className="button2">
                                <button><a href="">Rejoingnez nous </a></button>
                            </div>
                        
                        </div>

                    </div>
                </div>
                <div className="veterinaire">
                        <div className="contenuV">
                            <div className="texto">
                                <h1>Vous êtes un vétérinaire passionné par <span></span>
                                <span>les soins aux animaux ?</span></h1>
                            <p>Rejoignez une communauté dynamique de vétérinaires pour échanger des idées,
                                 poser des questions, et collaborer avec vos pairs.
                                 Accédez à une vaste bibliothèque de ress</p>
                                 <div className="button1">
                                <button><a href="">Rejoignez les veterinaire</a></button>
                                 </div>
                            </div>
                            <div className="imageV">
                              <img src="src/assets/image/vet.svg" alt="" />

                            </div>
                        </div>
                </div>
            </div>
            <section>
            <h1 className='titre'>Nos services</h1>
                <div className="service">
                    
                    <div className="service">
                        <div className="serve">
                         <img src="src/assets/image/sante.svg" alt="" />
                         <h6>sante</h6>
                         <p>Conseils sanitaires</p>
                        </div>
                        <div className="serve">
                         <img src="src/assets/image/sante.svg" alt="" />
                         <h6>sante</h6>
                         <p>Conseils sanitaires</p>
                        </div>
                        <div className="serve">
                         <img src="src/assets/image/sante.svg" alt="" />
                         <h6>sante</h6>
                         <p>Conseils sanitaires</p>
                        </div>
                        <div className="serve">
                         <img src="src/assets/image/sante.svg" alt="" />
                         <h6>sante</h6>
                         <p>Conseils sanitaires</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="jumbo">
                <div className="jumbo-titlegroup">
                    <h5 className='text-after'>Temoignages</h5>
                    <p>Ce qu'ils disent à propos de notre travail</p>
    
                </div>
                
                <div className="reviews-content">
                 <Slider className='temoignage' {...parametre}>
                    <div className="testimonial-carousel">
                        <div className="single-testimonial-box">
                            <div className="testimonial-description">
                                <div className="testimonial-info">
                                    <div className="testimonial-img">
                                        <img src="src\assets\image\profil.jpg" alt="clients" />
                                    </div>
                                    <div className="testimonial-person">
                                        <h2>Tom Leakar</h2>
                                        <h4>London, UK</h4>
                                    </div>
                                </div>
                                <div className="testimonial-comment">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                                    </p>
                                </div>
                            </div>
                            
                        </div> 
                    </div>
                    <div className="testimonial-carousel">
                        <div className="single-testimonial-box">
                            <div className="testimonial-description">
                                <div className="testimonial-info">
                                    <div className="testimonial-img">
                                        <img src="src\assets\image\profil.jpg" alt="clients" />
                                    </div>
                                    <div className="testimonial-person">
                                        <h2>Tom Leakar</h2>
                                        <h4>London, UK</h4>
                                    </div>
                                </div>
                                <div className="testimonial-comment">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                                    </p>
                                </div>
                            </div>
                            
                        </div> 
                    </div>
                    <div className="testimonial-carousel">
                        <div className="single-testimonial-box">
                            <div className="testimonial-description">
                                <div className="testimonial-info">
                                    <div className="testimonial-img">
                                        <img src="src\assets\image\profil.jpg" alt="clients" />
                                    </div>
                                    <div className="testimonial-person">
                                        <h2>Tom Leakar</h2>
                                        <h4>London, UK</h4>
                                    </div>
                                </div>
                                <div className="testimonial-comment">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                                    </p>
                                </div>
                            </div>
                            
                        </div> 
                    </div>
                    <div className="testimonial-carousel">
                        <div className="single-testimonial-box">
                            <div className="testimonial-description">
                                <div className="testimonial-info">
                                    <div className="testimonial-img">
                                        <img src="src\assets\image\profil.jpg" alt="clients" />
                                    </div>
                                    <div className="testimonial-person">
                                        <h2>Tom Leakar</h2>
                                        <h4>London, UK</h4>
                                    </div>
                                </div>
                                <div className="testimonial-comment">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                                    </p>
                                </div>
                            </div>
                            
                        </div> 
                    </div>
                    <div className="testimonial-carousel">
                        <div className="single-testimonial-box">
                            <div className="testimonial-description">
                                <div className="testimonial-info">
                                    <div className="testimonial-img">
                                        <img src="src\assets\image\profil.jpg" alt="clients" />
                                    </div>
                                    <div className="testimonial-person">
                                        <h2>Tom Leakar</h2>
                                        <h4>London, UK</h4>
                                    </div>
                                </div>
                                <div className="testimonial-comment">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                                    </p>
                                </div>
                            </div>
                            
                        </div> 
                    </div>
                    </Slider>
                    
                 
                </div>

            </div>
        </div>
        </>
    );
}
 
export default Acceuil;