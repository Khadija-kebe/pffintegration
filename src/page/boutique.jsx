import '../css/boutique.css'
const Boutique = () => {
    return ( 
        <>
        <div className="container">
            <div className="headerb">
                <header >
                

                    <div className="logob">
                        <img src="src\assets\image\logo3.svg" alt=""/>
                    </div>
                    <div>
                    <ul className="menub">
                        <li><a href="/acceuil">Acceuil</a></li>
                        <li><a href="#cars">Sante animal</a></li>
                        <li><a href="/boutique">Nos produits</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    </div>

                    <div>
                        <button className="login_btnb">se connecter</button>
                    </div>
                </header>
                <div className="imgb ">
                    <div className="texteb">
                        <div> <h2>Bienvenue dans la boutique </h2></div>
                        <div className='sen'><h2>Sen troup'o</h2></div>
                        
                    </div>
                </div>
            </div>
            <nav className='moncar'>
                <div><h1>Nos produits</h1></div>
                <div className="car">
                    <div className="car1">
                       <div className="carimg"> <img src="src\assets\image\image7.svg" alt=""/></div>
                       <div className="textcar">
                            <h5>Thiapathioli</h5>
                            <p>ladoum, mal,150kg age:15mois
                            </p>
                            <p>150000fcfa</p>
                            <button>Acheter</button>
                       </div>
                    </div>
                    <div className="car1">
                       <div className="carimg"> <img src="src\assets\image\image7.svg" alt=""/></div>
                       <div className="textcar">
                            <h5>Thiapathioli</h5>
                            <p>ladoum, mal,150kg age:15mois
                            </p>
                            <p>150000fcfa</p>
                            <button>Acheter</button>
                       </div>
                    </div>
                    <div className="car1">
                       <div className="carimg"> <img src="src\assets\image\image7.svg" alt=""/></div>
                       <div className="textcar">
                            <h5>Thiapathioli</h5>
                            <p>ladoum, mal,150kg age:15mois
                            </p>
                            <p>150000fcfa</p>
                            <button>Acheter</button>
                       </div>
                    </div>
                    
                    
                </div>
                <div className="car">
                    <div className="car1">
                       <div className="carimg"> <img src="src\assets\image\image7.svg" alt=""/></div>
                       <div className="textcar">
                            <h5>Thiapathioli</h5>
                            <p>ladoum, mal,150kg age:15mois
                            </p>
                            <p>150000fcfa</p>
                            <button>Acheter</button>
                       </div>
                    </div>
                    <div className="car1">
                       <div className="carimg"> <img src="src\assets\image\image7.svg" alt=""/></div>
                       <div className="textcar">
                            <h5>Thiapathioli</h5>
                            <p>ladoum, mal,150kg age:15mois
                            </p>
                            <p>150000fcfa</p>
                            <button>Acheter</button>
                       </div>
                    </div>
                    <div className="car1">
                       <div className="carimg"> <img src="src\assets\image\image7.svg" alt=""/></div>
                       <div className="textcar">
                            <h5>Thiapathioli</h5>
                            <p>ladoum, mal,150kg age:15mois
                            </p>
                            <p>150000fcfa</p>
                            <button>Acheter</button>
                       </div>
                    </div>
                    
                    
                </div>
            </nav>
        </div>
        </>
     );
}
 
export default Boutique;