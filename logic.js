 const goalInput = document.getElementById('goalInput'); //buttons for 'goals'
const addGoalBtn = document.getElementById('addGoalBtn');
const goalsList = document.getElementById('goalsList');
const seccion = document.querySelectorAll('.view');
const bottonesNap = document.querySelectorAll(".nav-btn"); // this is the catch event navigation buttons
addGoalBtn.addEventListener('click',() => {//catch event in the 'goals button
    console.log(goalInput.value);

    const nuevaMeta = document.createElement('li');
            nuevaMeta.textContent= goalInput.value;

            let space =localStorage.getItem('meta') ==null ? []  : JSON.parse(localStorage.getItem('meta'));//compare if there is a string in the localStorage or not
            space.push(goalInput.value);
            let format = JSON.stringify(space);//convert into JSON
            console.log(space);

            goalsList.appendChild(nuevaMeta);
            localStorage.setItem('meta',format);
            goalInput.value ='';
}
)
bottonesNap.forEach(button => {// responsive navigation buttons
    button.addEventListener('click', () => {
        seccion.forEach(view =>{
            view.classList.remove('active');
        });
        bottonesNap.forEach(btn => {
            btn.classList.remove('active');
        });
        const targetId = button.dataset.target;
        const show = document.getElementById(targetId);
        show.classList.add('active');
        button.classList.add('active');
        //console.log(button.dataset.target); // maybe  button.getAttribute('data-target')
    });
});
console.log(document.getElementById('routine'));

let opened =JSON.parse(localStorage.getItem('meta')) || [];

for(let i= 0; i < opened.length ; i++){
    const listGoals =document.createElement('li');
    listGoals.textContent= opened[i];
    goalsList.appendChild(listGoals);
};