// For storing data in the local storage
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
const ls2 = new Storage('_otherProps');
const min = 10; // Minimum amount of water
const max = 10000; // Maximum amount of water

// Components
const waterDrankElement = document.getElementById('waterDrank');
const addWaterElement = document.getElementById('addWater');
// const averageMonthElement = document.getElementById('averageMonth');
const limit = document.getElementById('limit');
const resetBtn = document.getElementById('reset');
const goalInput = document.getElementById('goalWater');
const submit = document.getElementById('submit');
const waterFilledElement = document.getElementById('water');
const waterAmountModalBtn = document.getElementById('addAmountWater');
const drankSVG = document.getElementById('drankSVG');
const waterCircle = document.getElementById('waterCircle');
const averageCircle = document.getElementById('averageCicle');
const main = document.getElementsByClassName('main')[0];

// Event Listeners
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
    otherProps.goal = value > min ? (value < max ? value : goal): goal;
    update();
});
waterAmountModalBtn.addEventListener('click', _=>{addWaterModal()});



// Total water drank
let waterArray = [];
let otherProps = {goal: 2000, time: 60 }; // Default value

const init = () => {
    
    window.onload = function() {
    var context = new AudioContext();
    }
    if(!ls.get()) {
        ls.set(waterArray);
    }else {
        waterArray = ls.get();
    }

    if(!ls2.get()) {
        ls2.set(otherProps);
    }else {
        otherProps = ls2.get();
    }
    runTimer();
}


// Displays and updates the information on the screen.
const update = () => {
    const waterOb = getDrank();
    const complete = waterOb.today / otherProps.goal * 100;
    const height = Number(window.getComputedStyle(waterFilledElement).height.replace('px', ''));
    waterDrankElement.innerText = `${waterOb.today} ml`;
    limit.innerText = `${otherProps.goal} ml`;
    waterFilledElement.innerText = `${Math.round(complete)} %`;
    waterFilledElement.style.boxShadow = `inset 0 -${complete * 0.01 * height}px  0px 0px skyblue`;
    // averageMonthElement.innerText = `${waterOb.average.month | 0} ml`;
    let percent = waterOb.today * 100 / 3700 /2 | 0;
    waterCircle.style.width = `${percent}%`;
    waterCircle.style.height = waterCircle.style.width;
    waterCircle.style.top = `${50 - percent/2}%`;
    waterCircle.style.left = waterCircle.style.top;
    averageCircle.style.width = '50%';
    averageCircle.style.height = '50%';

    ls.set(waterArray);
    ls2.set(otherProps);
}

/* 
* Returns object with total water consumtion of water
* today- today's water consumption
* month - this month's water consumption
* year - this year's water consumption
* average - contains average of month and year
*/
const getDrank = () => {
    const now = new Date();
    const today = getDaysConsumption(now.getTime());
    let [month, year] = [0,0];
    for(let i = 1;i <= now.getDate();i++) {
        month += getDaysConsumption((new Date(now.getFullYear(), now.getMonth() +1, i)).getTime());
    }
    let totalDayTillNow = (now.getTime() - new Date(now.getFullYear(), 1,1).getTime()) / 86400000;
    for(let i = 1; i <= totalDayTillNow;i++) {
        year += getDaysConsumption((new Date(now.getFullYear(),1, i)).getTime());
    }
    return{
        today: today,
        month: month,
        year: year,
        average: {
            month: month/now.getDate(),
            year: year/totalDayTillNow
        }
    };
}

/*
* time should be in milliseconds
*/
const getDaysConsumption = (time) => {
    return waterArray.reduce((a,b) => {
        if((new Date(b.time)).getDate() === (new Date(time)).getDate())
            return a + b.quantity
        return a;
    }, 0);
}


// Add a modal to choose amount of water to drinks
const addWaterModal = () => {
    const modal = createElement('div', 'modal');
    const insideModal = createElement('div', 'gModal');
    const waterArray = [50, 100, 250, 500, 750, 1000, 1500, 2000];
    const gCloseBtn = createElement('button', 'btn gCloseBtn', 'Close');
    gCloseBtn.addEventListener('click', e=>{removeNode(modal, 'fadeOutDown', 1000);});
    const waterBoxes = waterArray.map(e=>{
        const gContainer = createElement('div', 'gContainer', null, null, 'bounceInDown');

        gContainer.addEventListener('click', _=>{
            addWater(e, Date.now());
            update();
            removeNode(modal, 'fadeOutDown', 1000);
        });

        const gIcon = createElement('div', 'gIcon');
        const gImg = createElement('img', 'gImg', null, 'src:res/water-glass.svg');
        gIcon.appendChild(gImg);

        const gText = createElement('div', 'gText', e + " ml");

        gContainer.append(gIcon, gText);
        return gContainer;
    });
    waterBoxes.forEach(e=>{insideModal.appendChild(e)});
    insideModal.append(gCloseBtn);
    modal.appendChild(insideModal);
    main.appendChild(modal);
}


// t is the title and desc is the description required for the alert modal
const alertModal = (t, desc) => {
    const modal = createElement('div', 'modal');
    const alertContainer = createElement('div', 'alertContainer');
    const title = createElement('h3', 'alertTitle', t);
    const description = createElement('div', 'alertDesc', desc);
    const drinkButton = createElement('button', 'btn', 'Drink 250 ml');
    const sound = createElement('audio','audio',null, 'src:res/music.mp3');
    sound.loop = true;
    sound.volume = 0.5;
    sound.play();
    drinkButton.addEventListener('click', e=>{
        addWater(250, Date.now());
        removeNode(modal, 'fadeOutDown', 1000);
    });
    const closeBtn = createElement('button', 'btn', 'Close');
    closeBtn.addEventListener('click', e=>{
        removeNode(modal,'fadeOutDown', 1000);
    });
    alertContainer.append(title, description, drinkButton, closeBtn, sound);
    addAnimation(alertContainer, 'fadeInUp')
    modal.appendChild(alertContainer);
    main.appendChild(modal);
}

// It creates a modal which shows the details about today's water drank
const addDrankDetailModal = () => {
    const modal = createElement('div', 'modal');
    const container = createElement('div', 'listContainer');
    const list = waterArray.filter(ob=> (new Date(ob.time)).getDate() === (new Date()).getDate())
    .map(ob => {
        const drankDetailContainer = createElement('div', 'drankDetailContainer');
        const quantity = createElement('div', 'qtyBox', ob.quantity+" ml");
        const dateTime = new Date(ob.time);
        const time = createElement('div', 'timeBox', `${dateTime.getHours()} : ${dateTime.getMinutes()}` );
        const delBtn = createElement('button', 'btn delBtn');

        delBtn.addEventListener('click', () => {
            removeNode(drankDetailContainer, 'fadeOutDown', 1000, () => {removeWater(ob.id)});
        });

        const trashIcon = createElement('i','fas fa-trash');
        delBtn.appendChild(trashIcon);
        drankDetailContainer.append(quantity, time, delBtn);
        
        return drankDetailContainer;
    });
    list.forEach(ele => container.appendChild(ele));
    modal.appendChild(container);
    addAnimation(modal, 'fadeInUp');
    main.appendChild(modal);
}

// tag is the element with that tag you want to create, cName is the class name, value is innerText value
// and attr is any attribute in format 'attr:value'
// animation is the animation be added from animation.css
// Use only entrance animations or else, it will not look nice
const createElement = (tag, cName, value=null, attr=null, animation) => {
    const ele = document.createElement(tag);
    ele.className = cName;

    if(attr !== null)
        ele.setAttribute(...attr.split(':'));
    if(value !== null)
        ele.innerText = value
    if(animation)
        addAnimation(ele, animation);
    return ele;
}

// quantity is the amount of water to be added in mL, and time should in milliseconds
const addWater = (quantity, time) => {
    waterArray.push({id: uuidv4(), quantity, time});
}

// id is the id of the water array's object.
const removeWater = (id) => {
    waterArray = waterArray.filter(e=>e.id !== id);
    update();
}

// Resets everything back to default
const reset = () => {
    waterArray = [];
    otherProps = {goal: 2000, time: 60};
}

// timerFunc checks wheather the previous record is of some other day than today,
// then it resets waterArray and updates it.
// And shows the alertModal.
const timerFunc = () => {
    if (waterArray.length > 0){
        const lastRecordDate = new Date(waterArray[waterArray.length-1].time);
        const now = new Date();
        if(lastRecordDate.getDate() < now.getDate()){
            waterArray = []
        }
    }   
    alertModal('Drink Water', `Drink some water. Drinking water at right time is good for your health.`);
    update();
}

// Runs timerFunc every otherPros.time (default = 60 minutes).
const runTimer = () => {
    timerFunc();
    setInterval(()=> {
        timerFunc();
    }, otherProps.time * 60000)
}

// Remove the element with animation
// node is the element to be removed and time is time until which the element will be removed
// animation is the animation to be used from animate.css
// Use only exit animation or else it will look bad
const removeNode = (node,animation, time, func) => {
    addAnimation(node, animation);
    setTimeout(()=>{
        node.remove();
        if(func)
            func();
    }, time);
}

// node is the element you want to animate, name is the name of animation from animtate.css
// delay is the delay to start the animation
// delay should have values from 1 to 5 (integer only).
const addAnimation = (node, name, delay) => {
    if(!'animate__animated' in node.classList);
        node.classList.add('animate__animated');
    node.classList.add('animate__' + name);
    if(delay)
        node.classList.add(`animate__delay-${delay}s`)
}

// Starts the program.
init();
