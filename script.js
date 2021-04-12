//FUNZIONE PER INSERIRE DINAMICAMENTE GLI ELEMENTI NEL MIO SITO
function inizializza(){
    let i=0;
    for(let elemento of contenuti){
        let container = document.createElement('div');
        container.classList.add('container');
        container.setAttribute('id',[i]);
        const immagine = document.createElement('img');
        immagine.src=elemento.immagine;
        immagine.classList.add('Sfondo');
        const title = document.createElement('h1');
        title.textContent = elemento.titolo;
        title.classList.add('Titolo')
        const bottone = document.createElement('button');
        bottone.classList.add('pulsante');
        bottone.textContent = '+ Dettagli';
        const preferiti = document.createElement('img');
        preferiti.src=elemento.preferiti;
        preferiti.classList.add('preferiti2');
        const descrizione = document.createElement('p');
        descrizione.textContent= elemento.descrizione;
        descrizione.classList.add('hidden');
        const section = document.querySelector('#griglia');
        section.appendChild(container);
        container.appendChild(preferiti);
        container.appendChild(immagine);
        container.appendChild(title);
        container.appendChild(bottone);
        container.appendChild(descrizione);
        i++;
    }
    }
    inizializza();

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//FUNZIONE MOSTRA-NASCONDI DETTAGLI
function MoreDetails(event){
    const pulsante = event.currentTarget;
    const box = pulsante.parentNode;
    const dettagli = box.querySelector('p');
    
    Visibile = !Visibile;
    if(Visibile){
        dettagli.classList.remove('hidden');
        dettagli.classList.add('descrizione')
        pulsante.textContent= '- Dettagli';
        box.classList.add('bordoPlus')
    }
    else{
        dettagli.classList.add('hidden');
        dettagli.classList.remove('descrizione');
        pulsante.textContent= '+ Dettagli';
        box.classList.remove('bordoPlus')
    }
    }


let Visibile = false;
const AllDetails = document.querySelectorAll(".pulsante");
for(Detail of AllDetails){
    Detail.addEventListener('click' , MoreDetails)
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------


//FUNZIONE BARRA DEI PREFERITI

function preferenze(event){
    const barrapreferiti = document.querySelector('.preferiti');
    barrapreferiti.classList.remove('hidden');
    const stellaplus = event.currentTarget;
    const box = stellaplus.parentNode;
    
    const Sfondo = box.querySelector('.Sfondo');
    const Titolo = box.querySelector('.Titolo');

    let container = document.createElement('div');
    container.classList.add('blocco');
    container.setAttribute('id',box.id);
    const stellaless = document.createElement('img');
    stellaless.src='stellameno.png';
    stellaless.classList.add('stella');
    const icona = document.createElement('img');
    icona.src=Sfondo.src;
    icona.classList.add('icona');
    const title = document.createElement('p');
    title.textContent=Titolo.textContent;
    title.classList.add('testo');

    barrapreferiti.appendChild(container);
    container.appendChild(stellaless);
    container.appendChild(icona);
    container.appendChild(title);
    
    stellaplus.classList.add('hidden');
    
    conta++;
    stellaless.addEventListener('click',rimuoviPreferenze);
    event.stopPropagation();
}


function rimuoviPreferenze(event){
    const stellaless = event.currentTarget;
    const box = stellaless.parentNode;
    const containers = document.querySelectorAll('.container');
    for(container of containers){
        if(box.id === container.id){
            const stellaplus = container.querySelector('img');
            stellaplus.classList.remove('hidden');
        }
    } 
    box.remove();
    conta--;
    if(conta===0){
        document.querySelector('.preferiti').classList.add('hidden');
    }
}

let conta=0;
const allAggiungi = document.querySelectorAll(".preferiti2");
for(aggiungi of allAggiungi){
    aggiungi.addEventListener('click' , preferenze)
}


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//FUNZIONE BARRA DI RICERCA
function ricerca(event){

    const input = event.currentTarget;
    const filtro = input.value.toUpperCase();
    const griglia = document.querySelector("#griglia");
    const box = document.querySelectorAll(".container");
    
    for(let z=0 ; z < box.length ; z++){
        let item = box[z];
        let testo = item.querySelector("h1").textContent;
        console.log(item);
        
       if(testo.toUpperCase().indexOf(filtro) > -1){
             item.classList.remove("hidden");
        }
        else{
             item.classList.add("hidden");
        }
    }
}



const input = document.querySelector('#cerca');
input.addEventListener('keyup',ricerca);
