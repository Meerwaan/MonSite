import React from 'react';
import photo from '../image/profil.png';

function Profil() {
    return (
        <div className="profil">

            <div >
                <img src={photo} alt='logo' class='photo'></img>
                <h1> Merwan Laouini</h1>
                <h2>Etudiant en deuxième année à la Coding Factory by ESIEE It</h2>
                <p>Actuellement à la recherche d'une alternance dans le développement Web et mobile </p>
                <h3>Je suis à la recherche d’une entreprise afin de pouvoir progresser dans mon domaine d’étude.<br/>
                Motivé, passionné, organisé et avec l’envie de toujours en apprendre plus, je me donnerais au maximum dans le développement de vos projets.<br/></h3>

                <h4>⏱・Durée du contrat︰12 à 24 mois<br/>
                ✅・Prise de poste ︰immédiate<br/>
                ⚖️・Rythme︰3 semaines en entreprise / 2 semaines à l'école<br/>
                💶・Aide︰L'État propose une aide de 8 000€<br/>
                📞・Numéro de téléphone︰06 75 77 35 07<br/>
                ✉️・mail︰merwanlaouini@gmail.com</h4>
                <h1>Mes projets :</h1>

            </div>

        </div>
    );
}


export default Profil;