class Storage {
    constructor(name) {
        this.name = name;
    }
    set(ob) {
        localStorage.setItem(this.name, JSON.stringify(ob));
    }

    get() {
        return JSON.parse(localStorage.getItem(this.name));
    }
}

// Constants
const ls = new Storage('_waterArray');
const ls2 = new Storage('_max');
const min = 10;
const max = 10000;

// Components
const waterDrankElement = document.getElementById('waterDrank');
const addWaterElement = document.getElementById('addWater');
const limit = document.getElementById('limit');
const resetBtn = document.getElementById('reset');
const goalInput = document.getElementById('goalWater');
const submit = document.getElementById('submit');
const waterFilledElement = document.getElementById('water');
const waterAmountModalBtn = document.getElementById('addAmountWater');
const main = document.getElementsByClassName('main')[0];

//Event Listeners
addWaterElement.addEventListener('click', e => {
    addWater(250, Date.now());
    update();
});
resetBtn.addEventListener('click', e => {
    reset();
    update();
});
submit.addEventListener('click', e => {
    const value = goalInput.value;
    goal = value > min ? (value < max ? value : goal): goal;
    update();
});
waterAmountModalBtn.addEventListener('click', _=>{addWaterModal()});



// total water drank
let waterArray = [];
let goal = 2000; //default value

if(!ls.get()) {
    ls.set(waterArray);
}else {
    waterArray = ls.get();
}

const update = () => {
    const totalWaterDrank = waterArray.reduce((a,b)=> a + b.quantity, 0);
    const complete = totalWaterDrank / goal * 100;
    const height = Number(window.getComputedStyle(waterFilledElement).height.replace('px', ''));
    waterDrankElement.innerText = `${totalWaterDrank} ml`;
    limit.innerText = `${goal} ml`;
    waterFilledElement.innerText = `${Math.round(complete)} %`;
    waterFilledElement.style.boxShadow = `inset 0 -${complete * 0.01 * height}px  0px 0px skyblue`;
    ls.set(waterArray);
    ls2.set(goal);
}

const addWaterModal = () => {
    const modal = createElement('div', 'modal');
    const insideModal = createElement('div', 'gModal');
    const waterArray = [5, 100, 250, 500, 750, 1000, 1500, 2000];
    const waterBoxes = waterArray.map(e=>{
        const gContainer = createElement('div', 'gContainer');

        gContainer.addEventListener('click', _=>{
            addWater(e, Date.now());
            update();
            modal.remove();
        });

        const gCloseBtn = createElement('button', 'btn', 'Close');
        const gIcon = createElement('div', 'gIcon');
        const gImg = createElement('img', 'gImg', null, 'src:res/water-glass.svg');
        gIcon.appendChild(gImg);

        const gText = createElement('div', 'gText', e + " ml");

        gContainer.append(gIcon, gText);
        return gContainer;
    });
    waterBoxes.forEach(e=>{insideModal.appendChild(e)});
    modal.appendChild(insideModal);
    main.appendChild(modal);
}

const createElement = (tag, cName, value=null, attr=null) => {
    const ele = document.createElement(tag);
    ele.classList.add(cName);

    if(attr !== null)
        ele.setAttribute(...attr.split(':'));
    if(value !== null)
        ele.innerText = value

    return ele;
}

const addWater = (quantity, time) => {
    waterArray.push({id: Math.random(), quantity, time});
}

const removeWater = (id) => {
    waterArray = waterArray.filter(e=>e.id !== id);
}

const reset = () => {
    waterArray = [];
}

update();