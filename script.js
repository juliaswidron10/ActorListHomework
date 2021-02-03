function init(){
    fetch('./actors.json')
    .then(function(response){
        console.log('Actors data fetched!');
        return response.json();
    })
    .then(function(data){
        console.log(data);
        dataRecived(data)
    })
    function dataRecived(actors){
        actors.forEach(showActor)
    }
}

init()
let modalOpen = false; 

function showActor(actor){
    const template = document.querySelector("#actor").content;
    const clone = template.cloneNode(true);

    //populating the copy
    clone.querySelector('.name').textContent = actor.fullname;
    clone.querySelector('.movie').textContent = actor.movie;

    switch(actor.movie){
        case "Pulp Fiction":
            clone.querySelector("article").style.backgroundColor = "#c4bfdb"
            break;
        case "Goodfellas":
            clone.querySelector("article").style.backgroundColor = "#a8c4d6"
            break;
        case "Inception":
            clone.querySelector("article").style.backgroundColor = "#F7e5d7"
            break;
        default:
            clone.querySelector("article").style.backgroundColor = "#f3DADB"
    }

    clone.querySelector('article').dataset.id=actor.fullname;
    clone.querySelector('article').addEventListener("click", e=>{
        const modal = document.querySelector('.modal');
        
        if(modalOpen === false){
            modal.classList.remove('hide');
            modalOpen = true;
        }else{
            modal.classList.add('hide');
            modalOpen = false;
        }
       
        modal.querySelector(".modalname").textContent = actor.fullname;
        modal.querySelector('.moviesmodal').textContent = actor.movie
    })

    document.querySelector('.container').appendChild(clone);
}

function openModule(){
    document.querySelector("section.modal").classList.toggle('hide');

}
document.querySelector('.modalclose').addEventListener("click", e=>{
    if(modalOpen === false){
       document.querySelector('.modal').classList.remove('hide');
        modalOpen = true;
    }else{
        document.querySelector('.modal').classList.add('hide');
        modalOpen = false;
    }
})