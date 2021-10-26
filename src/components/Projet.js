import React from 'react';
import forum from '../image/forumFacto.png'
import r2d3 from '../image/r2d3.webp'
import todo from '../image/todolist.png'
import poke from '../image/pokedex2.png'





function Projet() {
    return (
        <div className='Projet' >

            <div class='container'>
                <h1>Forum Factory<hr></hr></h1>

                <img  src={forum} alt='prez' type='viedo/mp4' class='vid'></img>
                <p>Langage utilisé :</p>
                <p>PHP</p>
                <p>JavaScript</p>
                <p>CSS</p>

                <a href="https://github.com/AxelDemorest/forum-coding-factory"><button type="button" class="btn ">Voir le code </button></a>


            </div>

            <div class='container'>
                <h1>R2D3 le Bot Discord <hr></hr></h1>
                <img src={r2d3} alt='bot'class='vid'></img>

                <p>Langage utilisé :</p>
                <p>JavaScript</p>
                <p>Librairie utilisé :</p>
                <p>Discord.js</p>

                <a href="https://github.com/Meerwaan/Bot-Discord"><button type="button" class="btn ">Voir le code </button></a>

            </div>

            <div class='container'>
            <h1>Une todo-list <hr></hr></h1>
                <img src={todo} alt='bot'class='vid'></img>

                <p>Langage utilisé :</p>
                <p>JavaScript</p>
                <p>Framework utilisé :</p>
                <p>Vue JS</p>

                <a href="https://github.com/Meerwaan/Todolist_VueJs"><button type="button" class="btn ">Voir le code </button></a>

            </div>


            <div class='container'>
            <h1> Un Pokedex <hr></hr></h1>
                <img src={poke} alt='bot'class='vid'></img>

                <p>Langage utilisé :</p>
                <p>Python</p>
                <p>Api utilisé :</p>
                <p>Postman</p>

                <a href="https://github.com/Lucass-Dev/PokedexAPI"><button type="button" class="btn ">Voir le code </button></a>

            </div>

        </div>
    );
}



export default Projet;