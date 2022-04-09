const container = document.getElementById('container');                

const addlistBtn = document.getElementById('addListBtn');     
const parent = document.getElementById('parent');                            

const addNewList = document.getElementById('addNewList');      
const listText = document.getElementById('listText');
const listBtn = document.getElementById('listBtn');
const cancelBtn = document.getElementById('cancelBtn');



const addNewItem = document.getElementById('addNewItem');                   
const itemText = document.getElementById('itemText');
const itemBtn = document.getElementById('itemBtn');

let nextpagebackbtn = document.getElementById('page2BackBtn');
let page2AddBtn = document.getElementById('page2AddBtn');

const page2Contains = document.getElementById('page2Contains');

function toggleList() {
    addNewList.classList.toggle('addNewListActive');
    document.getElementById("textchanged").style.display="none";

}

addlistBtn.addEventListener('click', toggleList);
cancelBtn.addEventListener('click', toggleList)

listBtn.addEventListener('click', () => {
    toggleList();
    let card = document.createElement('div');
    card.classList.add('task');
    parent.appendChild(card);

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('cardHeader');
    card.appendChild(cardHeader);
    let newListTitle = document.createElement('h2');
    newListTitle.classList.add('task_title');
      newListTitle.style.color = 'tomato';
    newListTitle.innerHTML = `
        ${listText.value} 
        `;
    cardHeader.appendChild(newListTitle);
    let line = document.createElement('hr');
    line.classList.add('line');
    cardHeader.appendChild(line);
    newListTitle.addEventListener('click', myFunc)
    function myFunc(e) {
        e.target.parentElement.parentElement.classList.toggle('active');
        let activeList = document.querySelectorAll('.task');
        for (let i = 0; i < activeList.length; i++) {
            if (activeList[i] !== e.target.parentElement.parentElement) {
                activeList[i].classList.add('inactive');
                container.classList.add('inactive');
                page2Contains.classList.add('active');

                let page2Title = document.createElement('h2');
                page2Title.innerHTML = `
                <span style="color:tomato;">${newListTitle.innerHTML}</span> 
                `;
                nextpagebackbtn.after(page2Title);

                nextpagebackbtn.addEventListener('click', () => {
                    container.classList.remove('inactive');
                    activeList[i].classList.remove('inactive');
                    page2Contains.classList.remove('active');
                    page2Title.remove();

                });
                page2AddBtn.addEventListener('click', () => {
                    toggleList();
                    container.classList.remove('inactive');
                    activeList[i].classList.remove('inactive');
                    page2Contains.classList.remove('active');
                    page2Title.remove();
                });
                   }
        }
       

    }


    let newTaskBody = document.createElement('div');
    newTaskBody.classList.add('task_body');
    newTaskBody.innerHTML = `
        <div class="btn-ListBody">
        <span class="material-icons removeTask"  >
        delete
        </span>
        <span class="material-icons addTask"  >
        add_circle
        </span>
        </div>
        `;
    card.appendChild(newTaskBody);

});


parent.addEventListener('click', scratchTodo);

function scratchTodo(e) {
    let item = e.target;
    if (item.classList.contains('pendingIcon')) {

        item.parentElement.classList.toggle('me');

    }
}


window.addEventListener('click', (e) => {
    if (e.target.classList.contains('removeTask')) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
});


window.addEventListener('click', (e) => {
    if (e.target.classList.contains('addTask')) {
        addNewItem.classList.toggle('addNewItemActive');
        parentNode = e.target.parentNode.parentNode.parentNode;
    }
});

itemBtn.addEventListener('click', () => {

    addNewItem.classList.toggle('addNewItemActive');

    let newTask = document.createElement('p');
    newTask.classList.add('taskText');
    parentNode.appendChild(newTask);

    let pTask = document.createElement('div');
    pTask.classList.add('pTask');
    pTask.id = 'pendingtasks';

    pTask.innerHTML = `
        <p class="scratch" id="">${itemText.value}</p>
        <span class="pendingIcon" onclick="hidet()">mark done</span>`
        
        ;
    parentNode.appendChild(pTask);

   
    itemText.value = '';
    hidet()
});

