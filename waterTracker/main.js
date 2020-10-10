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