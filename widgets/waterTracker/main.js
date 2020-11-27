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
const ls2 = new Storage('_settings');
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
const showWaterListElement = document.getElementById('showWaterDetailModal');
const settingsBtn = document.getElementById('settings');
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
    let value;
    if(settings.units === 0)
        value = goalInput.value;
    else
        value = toMilliliters(goalInput.value);
    settings.goal = value > min ? (value < max ? value : goal): goal;
    update();
});
showWaterListElement.addEventListener('click', e => {
    addDrankDetailModal();
})
waterAmountModalBtn.addEventListener('click', _=>{addWaterModal()});
settingsBtn.addEventListener('click', _=> settingModal())
window.onload = function() {
    context = new AudioContext();
}


// Total water drank
let waterArray = [];
const DEFAULT_SETTING = {
    goal: 2000,
    time: 60,
    from: '07:00',
    till: '21:00',
    timerUsed: true,
    units: 0,
    lastDrank: 250
}; // Default value
// For audio context
let settings = DEFAULT_SETTING;
let context;
// For timer
let timerId;

const init = () => {
    
    
    if(!ls.get()) {
        ls.set(waterArray);
    }else {
        waterArray = ls.get();
    }

    if(!ls2.get()) {
        ls2.set(settings);
    }else {
        settings = ls2.get();
    }
    update();
    runTimer();
}


// Displays and updates the information on the screen.
const update = () => {
    const waterOb = getDrank();
    const complete = waterOb.today / settings.goal * 100;
    const height = Number(window.getComputedStyle(waterFilledElement).height.replace('px', ''));
    addWaterElement.innerHTML = `<i class="fas fa-plus"></i> Add ${toUnitString(250)}`;
    waterDrankElement.innerText = toUnitString(waterOb.today);
    limit.innerText = toUnitString(settings.goal);
    waterFilledElement.innerText = `${Math.round(complete)} %`;
    waterFilledElement.style.boxShadow = `inset 0 -${complete * 0.01 * height}px  0px 0px skyblue`;
    // averageMonthElement.innerText = `${waterOb.average.month | 0} ml`;
    let percent = waterOb.today * 100 / 3700 /2 || 0;
    waterCircle.style.width = `${percent}%`;
    waterCircle.style.height = waterCircle.style.width;
    waterCircle.style.top = `${50 - percent/2}%`;
    waterCircle.style.left = waterCircle.style.top;
    averageCircle.style.width = '50%';
    averageCircle.style.height = '50%';

    ls.set(waterArray);
    ls2.set(settings);
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

// Add a modal to display settings
// More setting's will come soon
const settingModal = () => {
    const modal = createElement('div', 'modal');
    const settingContainer = createElement('div', 'settingContainer');
    const head = createElement('h2', '', 'Basics');

    const minTimeDiv = createElement('div', 'group');
    const minTimelabel = createElement('label', '' ,'From');
    const minTimeHr = createElement('input', '', null ,`type:number;placeholder:12`)
    const minTimeMn = createElement('input', '', null ,`type:number;placeholder:00`)
    minTimeHr.disabled = settings.timerUsed;
    minTimeMn.disabled = settings.timerUsed;
    minTimeDiv.append(minTimelabel, minTimeHr, minTimeMn);

    const maxTimeDiv = createElement('div', 'group');
    const maxTimelabel = createElement('label', '' ,'Till');
    const maxTimeHr = createElement('input', '', null ,`type:number;placeholder:12`)
    const maxTimeMn = createElement('input', '', null ,`type:number;placeholder:00`)
    maxTimeHr.disabled = settings.timerUsed;
    maxTimeMn.disabled = settings.timerUsed;
    maxTimeDiv.append(maxTimelabel, maxTimeHr, maxTimeMn);

    const timerDiv = createElement('div', 'group');
    const timerField = createElement('input', '', '',`type:number;placeholder: Time in minutes`);
    timerField.disabled = !settings.timerUsed;
    const checkBox = createElement('input', '', '', `type:checkbox`)
    checkBox.checked = settings.timerUsed;
    checkBox.addEventListener('change', (e) => {
        if(e.target.checked) {
            maxTimeHr.disabled = true;
            maxTimeMn.disabled = true;
            minTimeHr.disabled = true;
            minTimeMn.disabled = true;
            timerField.disabled = false;
        }
        else {
            timerField.disabled = true;
            maxTimeHr.disabled = false;
            maxTimeMn.disabled = false;
            minTimeHr.disabled = false;
            minTimeMn.disabled = false;
        }
    })
    timerDiv.append(checkBox, timerField)

    const unitsDiv = createElement('div', 'group');
    const label = createElement('label', '', 'Select Units');
    const select = createElement('select', '');
    const option1 = createElement('option', 'option', 'mL (Milliliters)');
    const option2 = createElement('option', 'option', 'oz');
    select.append(option1, option2);
    select.selectedIndex = settings.units;
    unitsDiv.append(label,select);

    const saveBtn = createElement('button', 'btn', 'Save');
    saveBtn.addEventListener('click', () => {
        settings.from = `${minTimeHr.value||"07"}:${minTimeMn.value||"00"}`;
        settings.till = `${maxTimeHr.value||"21"}:${maxTimeMn.value||"00"}`;
        settings.timerUsed = checkBox.checked;
        settings.time = timerField.value || 60;
        settings.units = select.selectedIndex;
        clearInterval(timerId);
        runTimer();
        update();
        removeNode(modal, 'fadeOutDown', 1000);
    })
    settingContainer.append(head, minTimeDiv, maxTimeDiv, timerDiv, unitsDiv,saveBtn);
    addAnimation(settingContainer, 'fadeInUp');
    modal.append(settingContainer);
    main.append(modal);
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
        const gText = createElement('div', 'gText', toUnitString(e));
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
    const drinkButton = createElement('button', 'btn', `Drink ${toUnitString(settings.lastDrank)}`);
    const sound = createElement('audio','audio',null, 'src:res/music.mp3');
    sound.loop = true;
    sound.volume = 0.1;
    sound.play();
    drinkButton.addEventListener('click', e=>{
        addWater(settings.lastDrank, Date.now());
        update();
        removeNode(modal, 'fadeOutDown', 1000);
    });
    const closeBtn = createElement('button', 'btn', 'Close');
    closeBtn.addEventListener('click', e=>{
        removeNode(modal,'fadeOutDown', 1000);
    });
    alertContainer.append(title, description, drinkButton, closeBtn, sound);
    addAnimation(alertContainer, 'fadeInUp')
    modal.appendChild(alertContainer);
    if(document.getElementsByClassName('alertContainer ').length == 0)
        main.appendChild(modal);
}

// It creates a modal which shows the details about today's water drank
const addDrankDetailModal = () => {
    const modal = createElement('div', 'modal');
    const container = createElement('div', 'listContainer');
    const head = createElement('h3', '', 'Water you drank.');
    const close = createElement('button', 'btn', 'Close');
    close.addEventListener('click', ()=> {
        removeNode(modal, 'zoomOut', 1000);
    })
    const list = waterArray.filter(ob=> (new Date(ob.time)).getDate() === (new Date()).getDate())
    .map(ob => {
        const drankDetailContainer = createElement('div', 'drankDetailContainer');
        const quantity = createElement('div', 'qtyBox',toUnitString(ob.quantity));
        const dateTime = new Date(ob.time);
        const time = createElement('div', 'timeBox', `${dateTime.getHours()} : ${dateTime.getMinutes()}` );
        const delBtn = createElement('button', 'btn delBtn');

        delBtn.addEventListener('click', () => {
            removeNode(drankDetailContainer, 'zoomOut', 1000, () => {
                if(container.childElementCount === 2) 
                    removeNode(modal, 'zoomOut', 1000);
                removeWater(ob.id)
            });
        });

        const trashIcon = createElement('i','fas fa-trash');
        delBtn.appendChild(trashIcon);
        drankDetailContainer.append(quantity, time, delBtn);
        return drankDetailContainer;
    });
    container.append(head);
    if(list.length === 0) 
        container.append(createElement('p', '', 'You haven\'t drank anything'));
    list.forEach(ele => container.appendChild(ele));
    container.appendChild(close);
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
        attr.split(';').map(e=> ele.setAttribute(...e.split(':')));
    if(value !== null)
        ele.innerText = value
    if(animation)
        addAnimation(ele, animation);
    return ele;
}

// quantity is the amount of water to be added in mL, and time should in milliseconds
const addWater = (quantity, time) => {
    waterArray.push({id: uuidv4(), quantity, time});
    settings.lastDrank = quantity;
}

// id is the id of the water array's object.
const removeWater = (id) => {
    waterArray = waterArray.filter(e=>e.id !== id);
    update();
}

const ounceValue = 29.5735296;
// Converts milliLitres to ounce
// v is the value to be converted
const toOunce = (v) => {
    return Math.round(v / ounceValue);
}

// Converts ounce to milliLiters
// v is the value to be converted
const toMilliliters = (v) => {
    return Math.round(v * ounceValue);
}

// v is the value in milliliters
const toUnitString = (v) => {
    if(settings.units === 0)
        return `${v} ml`;
    return `${toOunce(v)} oz`;
}

// Resets everything back to default
const reset = () => {
    waterArray = [];
    settings = DEFAULT_SETTING;
}

// timerFunc checks wheather the previous record is of some other day than today,
// then it resets waterArray and updates it.
// And shows the alertModal.
const timerFunc = () => {
    alertModal('Drink Water', `Drink some water. Drinking water at right time is good for your health.`);
    // update();
}

// 5:50
// Runs timerFunc every otherPros.time (default = 60 minutes)
// Or runs automatically according to specified time in settings
const runTimer = () => {
    let time;
    let willRun = true;
    if(settings.timerUsed) {
        time = settings.time * 60000;
    }
    else{
        const lower = settings.from.split(':');
        const upper = settings.till.split(':');
        const now = new Date();
        if(now.getHours() + now.getMinutes() >= lower[0] * 60 + lower[1] && now.getHours() + now.getMinutes() < upper[0] * 60 + upper[1]) {
            const noOfTimeToDrink = (settings.goal - getDaysConsumption(now.getTime())) / 250; // 250 will be changed to some variable in the future
            const value = (upper[0] * 60 + upper[1]) - (now.getHours() * 60 + now.getMinutes()) / noOfTimeToDrink;
            time = value * 1000;
        }
        else{
            willRun = false;
        }
    }
    if(willRun){
        timerId = setInterval(()=> {
            timerFunc();
        }, time)
    }
    
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
