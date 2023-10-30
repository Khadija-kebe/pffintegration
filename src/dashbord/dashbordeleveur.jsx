import React from 'react';
import '../css/eleveur.css'; // Assurez-vous que le chemin vers le fichier CSS est correct
import { useState } from 'react';
import { Modal } from '@mui/material';
import Ajoutanimal from '../page/ajoutanimal';
const Eleveur = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   
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
    <>
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
          <span><img src="src\assets\image\sheep.svg" alt=""/></span> <span>mes animmaux</span><img className='img' src="src\assets\image\vector.svg" alt=""/>
        </a>
        {activeSubMenu === 'utilisateurs' && (
          <ul className="side-dropdown">
            <li><a href="" >listes des animaux</a></li>
            <li><a href="#">ajouter un animal</a></li>
          </ul>
        )}
      </li>
      <li>
        <a href="#" className='user' onClick={() => toggleSubMenu('publications')}>
          <span><img src="src\assets\image\pub.svg" alt=""/></span> <span>Mes publications</span><img className='img' src="src\assets\image\vector.svg" alt=""/>
        </a>
        {activeSubMenu === 'publications' && (
          <ul className="side-dropdown">
            <li><a href="#">voir mes poste</a></li>
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
            <div className="table-data">
            <div className="order">
              <div className="headd">
                <div><h3>Listes des animaux</h3>
                <i className='bx bx-search' ></i>
                <i className='bx bx-filter' ></i>
                </div>
                <div> <button onClick={handleOpen}>Ajouter un animal</button></div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Poids</th>
                    <th>Sante</th>
                    <th>Type</th>
                    <th>Sexe</th>
                    <th>Race</th>
                    <th>Aliment</th>
                    <th>Quantite</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="src\assets\image\muton.jpg" alt=""/>   
                      <p>John Doe</p>
                    </td>
                    <td>50</td>
                    <td>normal</td>
                    <td>ladoum</td>
                    <td>mal</td>
                    <td>ladoum</td>
                    <td>repasse</td>
                    <td>345</td>
                    <td>
                      <a href="#"><img className='action' src="src\assets\image\edit.svg" alt=""/></a>
                      <a href="#"><img className='action' src="src\assets\image\delete.svg" alt=""/></a>
                    </td>
                  </tr>
                            </tbody>  
                      </table>
                    </div>
                </div>
        </main>
        {/* Votre contenu va ici */}
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Ajoutanimal></Ajoutanimal>
       
      </Modal>
    </>
  )
}

export default Eleveur;
