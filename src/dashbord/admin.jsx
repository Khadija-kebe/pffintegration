import React from 'react';
import '../css/admin.css'; // Assurez-vous que le chemin vers le fichier CSS est correct
import { useState } from 'react';
import Chart from './chart';
const Admin = () => {
   
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  

  //pour le profil
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleProfileClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const toggleSubMenu = (menuName) => {
    if (activeSubMenu === menuName) {
      setActiveSubMenu(null); // Ferme le sous-menu actif s'il est déjà ouvert
    } else {
      setActiveSubMenu(menuName); // Ouvre le sous-menu correspondant
    }
  };

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  const handleDropdownClick = (e, item) => {
    e.preventDefault();

    if (!item.classList.contains('active')) {
      const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
      allDropdown.forEach((i) => {
        const aLink = i.parentElement.querySelector('a:first-child');
        aLink.classList.remove('active');
        i.classList.remove('show');
      });
    }

    item.classList.toggle('show');
    const a = item.parentElement.querySelector('a:first-child');
    a.classList.toggle('active');
  };






  const sidebarClass = sidebarHidden ? 'hide' : '';

  return (
    <div>
      <section id="sidebar" className={sidebarClass}>
        <a href="#" className="brand">
          <span><img src="src\assets\image\log.png" alt=""/>
          </span> 
        </a>
        <ul className="side-menu">
          <li>
            <a href="#" className="active">
             <span><img src="src\assets\image\kle.svg" alt=""/></span> <span><h4>Tableau de bord</h4></span>
            </a>
          </li>
          <li>
        <a href="#" className='user' onClick={() => toggleSubMenu('utilisateurs')}>
          <span><img src="src\assets\image\pubb.svg" alt=""/></span> <span>utilisateurs</span><img className='img' src="src\assets\image\vector.svg" alt=""/>
        </a>
        {activeSubMenu === 'utilisateurs' && (
          <ul className="side-dropdown">
            <li><a href="#">Eleveurs</a></li>
            <li><a href="#">veterinaires</a></li>
            <li><a href="#">clients</a></li>
          </ul>
        )}
      </li>
      <li>
        <a href="#" className='user' onClick={() => toggleSubMenu('publications')}>
          <span><img src="src\assets\image\pub.svg" alt=""/></span> <span>Publications</span><img className='img' src="src\assets\image\vector.svg" alt=""/>
        </a>
        {activeSubMenu === 'publications' && (
          <ul className="side-dropdown">
            <li><a href="#">recommandations</a></li>
            <li><a href="#">publication eleveurs</a></li>
          </ul>
        )}
      </li>
        </ul>
      </section>
      <section id="content">
        <nav>
          <div>
           <img src="src\assets\image\menu.svg" alt=""  onClick={toggleSidebar} />
          </div>
          <div className='fil'>
            <div>
              <a href="#" className="nav-link">
              <img src="src\assets\image\notification.svg" alt=""/>
                <span className="badge">5</span>
              </a>
              <a href="#" className="nav-link">
                <img src="src\assets\image\notification.svg" alt=""/>
                <span className="badge">8</span>
              </a>
            </div>
            <span className="divider"></span>
            <div className="profile" onClick={handleProfileClick}>
              <img
                src="src\assets\image\pro.svg"
                alt=""
              />
              <ul className={`profile-link ${isDropdownVisible ? 'show' : ''}`}>
                <li>
                  <a href="#">
                  <span><img src="src\assets\image\profile.svg" alt=""/></span> <span>Profil</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <span><img src="src\assets\image\settingpro.svg" alt=""/></span> <span>Parametre</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <span><img src="src\assets\image\deconnexion.svg" alt=""/></span> <span>deconnexion</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </nav>
        <main>
           
            <ul class="breadcrumbs">
              <li><a href="#">Acceuil</a></li>
              <li class="divider">/</li>
              <li><a href="#" class="active">controle</a></li>
            </ul>
                  <div className="info-data">
              <div className="card">
                <div className="head">
                  <div>
                    <h2>1500</h2>
                    <p>utilisateurs</p>
                  </div>
                              <span><img src="src\assets\image\au.svg" alt=""/></span>
                </div>
                <span className="progress" data-value="40%"></span>
                <span className="label">40%</span>
              </div>
              <div className="card">
                <div className="head">
                  <div>
                    <h2>234</h2>
                    <p>eleveurs</p>
                  </div>
                              <span><img src="src\assets\image\au.svg" alt=""/></span>
                </div>
                <span className="progress" data-value="60%"></span>
                <span className="label">60%</span>
              </div>
              <div className="card">
                <div className="head">
                  <div>
                    <h2>45</h2>
                    <p>veterinaires</p>
                  </div>
                              <span><img src="src\assets\image\ve.svg" alt=""/></span>
                </div>
                <span className="progress" data-value="30%"></span>
                <span className="label">30%</span>
              </div>
            </div>
                 
                  <Chart></Chart  >
                  <div className="utilisateurs">
                        <h1>Listes des utilisateurs</h1>
                        <div className="liste">
                              <div className="utilisa">
                                  <span><img src="src\assets\image\l.svg" alt=""/></span>
                                  <div>
                                      <h5>Mbayang Dramer</h5>
                                      <p>eleveurs</p>
                                  </div>
                                  <div className="plus">
                                      <a href="#">Voirs plus</a>
                                  </div>
                              </div>
                              <div className="utilisa">
                                  <span><img src="src\assets\image\l.svg" alt=""/></span>
                                  <div>
                                      <h5>Mbayang Dramer</h5>
                                      <p>eleveurs</p>
                                  </div>
                                  <div className="plus">
                                      <a href="#">Voirs plus</a>
                                  </div>
                              </div><div className="utilisa">
                                  <span><img src="src\assets\image\l.svg" alt=""/></span>
                                  <div>
                                      <h5>Mbayang Dramer</h5>
                                      <p>eleveurs</p>
                                  </div>
                                  <div className="plus">
                                      <a href="#">Voirs plus</a>
                                  </div>
                              </div>
                              <div className="utilisa">
                                  <span><img src="src\assets\image\l.svg" alt=""/></span>
                                  <div>
                                      <h5>Mbayang Dramer</h5>
                                      <p>eleveurs</p>
                                  </div>
                                  <div className="plus">
                                      <a href="#">Voirs plus</a>
                                  </div>
                              </div>
                              <div className="utilisa">
                                  <span><img src="src\assets\image\l.svg" alt=""/></span>
                                  <div>
                                      <h5>Mbayang Dramer</h5>
                                      <p>eleveurs</p>
                                  </div>
                                  <div className="plus">
                                      <a href="#">Voirs plus</a>
                                  </div>
                              </div>
                              
                          </div>
                          </div>
              </main>
        {/* Votre contenu va ici */}
      </section>
    </div>
  )
}

export default Admin;
