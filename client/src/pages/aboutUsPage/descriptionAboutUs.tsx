import Benjamin_Bloc from "../../assets/img/Benjamin_bloc.jpg"
import Matthieu_Bloc from "../../assets/img/Matthieu_bloc.jpg"

function DescriptionAboutUs(){
    return (
        <div>
        <div id="descriptionAboutUs">
            <h1> About Us </h1>

            <p> <strong> Maniak</strong>, c’est avant tout une histoire de <strong> passion. </strong>{"\n"}</p>

            <p>Nous sommes deux étudiants en développement web, mais surtout deux <strong> grimpeurs </strong>réguliers. Entre les cours et les sessions en salle, on passait beaucoup de temps à échanger sur nos expériences : les <strong> meilleurs</strong> blocs, les salles les plus <strong> agréables</strong>, les prises les plus frustrantes… et surtout, les <strong> progrès</strong> qu’on partageait ensemble.{"\n"} </p>

            <p>Très vite, un constat s’est imposé : <strong>il n’existait pas vraiment de plateforme dédiée à la communauté de l’escalade de bloc. </strong>Rien qui permette à la fois de découvrir de nouvelles salles, de partager ses performances, de publier des vidéos ou simplement de donner son avis.{"\n"}</p>

            <p>C’est comme ça que <strong> Maniak</strong> est né.{"\n"}</p>

            <p>L’idée était simple : créer un espace où les grimpeurs peuvent se retrouver, échanger et s’inspirer. Un site pensé <strong>par des passionnés, pour des passionnés.</strong> Un endroit où chaque bloc peut être <strong> documenté</strong>, chaque session <strong>partagée</strong>, et chaque progression <strong> valorisée</strong>.{"\n"}</p>

            <p>En tant qu’étudiants, ce projet est aussi pour nous une opportunité de mettre en pratique nos compétences en développement full stack, en utilisant des technologies modernes comme <strong> React</strong>, tout en travaillant sur un sujet qui nous <strong>motive vraiment.</strong> {"\n"}</p>

            <p>Aujourd’hui, <strong>Maniak</strong> est à la croisée de deux univers :{"\n"}</p>
            <p>celui du développement web et celui de l’escalade.{"\n"}</p>

            <p><strong>Et ce n’est que le début.</strong>{"\n"}</p>

            <p>Notre ambition est de faire <strong> évoluer</strong> la plateforme avec la communauté, pour en faire une référence dans le monde de l’escalade de bloc.{"\n"}</p>

            <p>Que vous soyez <strong> débutant ou grimpeur confirmé, Maniak est là pour vous accompagner</strong> dans chaque prise, chaque chute… et chaque <strong> réussite.</strong>{"\n"}</p>

            
        </div>
        <div id="equipeDev">
            <h1>Notre équipe de développeurs</h1>
            <div id="rowBen">
                <img id="idPhotoBen" src={Benjamin_Bloc} alt="Benjamin" loading="lazy"/>
                <div id="idDescriBen">
                <p><strong> Benjamin</strong> est un grimpeur confirmé depuis quelques années maintenant.</p>
                <p>Polyvalent et surtout interessé par la grimpe en voie, il a pu exploiter ses compétences pour en tirer le meilleur</p>
                <p>Travaillant dans une salle d'escalade, Benjamin est au plus proche de la communauté pour recueillir les avis des grimpeurs</p>
                <p>Une force majeure pour le développement du projet</p>
                <p>A l'écoute, attentif aux remarques, n'hésitez pas à le contacter pour quelconques réclamations ou idées.</p>
                </div>
            </div>

            <div id="rowMatt">
                <img id="idPhotoMatt" src={Matthieu_Bloc} alt="Matthieu" loading="lazy"/>
                <div id="idDescriMatt">
                <p><strong> Matthieu</strong> est encore un jeune grimpeur mais n'est pas moins assidus</p>

                <p>Avec une courbe de progression fulgurante, celui-ci a pu atteindre les plus hauts niveaux en très peu de temps.</p>

                <p>Grand amateur de bloc, celui-ci pourra vous sussurer des bétas de blocs à l'oreille.</p>

                <p>Matthieu pourra, de part son experience récente, ressentir quel serait le meilleur moyen pour les gens de s'améliorer et améliorer le site en conséquent.</p>

                <p>Avec un style de grimpe très dynamique, faites attention quand vous passez en dessous de lui sur les tapis !</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default DescriptionAboutUs