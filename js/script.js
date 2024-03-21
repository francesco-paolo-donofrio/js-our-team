// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// DATI PER ESERCIZIO
// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	        Chief Editor	                angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	        Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	        Developer	                 scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	         barbara-ramos-graphic-designer.jpg

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
// BONUS 3:
// Permettere l'aggiunta di un nuovo membro del team
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!

// Mio template html
/* <nav class="navbar navbar-expand-sm navbar-light bg-primary" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Chi siamo</a>
                <a class="navbar-brand" aria-current="page" href="#">Contact us</a>
            </div>
        </nav>
        <main>
            <div id="wrapper" class="bg-primary">
                <div class="card">Ciao io sono giovanni</div>
                <div class="card">Ciao io sono marco</div>
                <div class="card">Ciao io sono emanuele</div>
                <div class="card">Ciao io sono emilio</div>
                <div class="card">Ciao io sono andrea</div>
                <div class="card">Ciao io sono francesco</div>
            </div>
        </main> */
let workers = [
    {
        nome : 'Wayne Barnett',
        role : 'Founder & CEO',
        image : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome : 'Angela Caroll',
        role : 'Chief Editor',
        image : 'angela-caroll-chief-editor.jpg'
    },
    {
        nome : 'Walter Gordon',
        role : 'Office Manager',
        image : 'walter-gordon-office-manager.jpg'
    },
    {
        nome : 'Angela Lopez',
        role : 'Social Media Manager',
        image : 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome : 'Scott Estrada',
        role : 'Developer',
        image : 'scott-estrada-developer.jpg'
    },
    {
        nome : 'Barbara Ramos',
        role : 'Graphic Designer',
        image : 'Barbara-ramos-graphic-designer.jpg'
    }
];

console.log(workers);

const ulEl = document.querySelector('ul');

for(let i = 0; i < workers.length; i++){
    const liEl = document.createElement('li');
    liEl.innerHTML = `
    Nome: ${workers[i].nome} Role: ${workers[i].role} <img src="img/${workers[i].image}">
    `;
    ulEl.appendChild(liEl);
}


