import '../css/ajout.css'

const Ajoutanimal = () => {

  
    return (
      <>
        <form action="">
            <div className="form">
               <div className="form1">
                    <label htmlFor="">Poids</label>
                    <input type="text" placeholder='poids' />
                    <label htmlFor="">Race</label>
                    <select name="" id="">
                        <option value="ladoum"  placeholder='son type'>ladoum</option>
                    </select>
                    <label htmlFor="">Nom aliment</label>
                    <input type="text"  placeholder='repasse'/>
                    <label htmlFor="">Genre</label>
                    <div className='check'>
                        <input type="radio" />
                        <label htmlFor=""> mal</label>
                        <input type="radio" />
                        <label htmlFor=""> femelle</label>
                    </div>
               </div>

               <div className="form2">
                    <label htmlFor="">Poids</label>
                    <input type="text" placeholder='poids' />
                    <label htmlFor="">choisir Image</label>
                    <input type="file"  />
                    <label htmlFor="">quantite</label>
                    <input type="number"  placeholder='repasse' />
                    <button>Ajouter</button>
               </div>
            </div>
        </form>
      </>
    );
}
 
export default Ajoutanimal;