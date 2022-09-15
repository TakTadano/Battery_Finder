const battery =
    [{
        "batteryName": "WKL-78",
        "capacityAh": 2.3,
        "voltage": 14.4,
        "maxDraw": 3.2,
        "endVoltage": 10,
    },
    {
        "batteryName": "WKL-140",
        "capacityAh": 4.5,
        "voltage": 14.4,
        "maxDraw": 9.2,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-78",
        "capacityAh": 2.5,
        "voltage": 14.5,
        "maxDraw": 10,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-140",
        "capacityAh": 3.6,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 5,
    },
    {
        "batteryName": "IOP-E78",
        "capacityAh": 6.6,
        "voltage": 14.4,
        "maxDraw": 10.5,
        "endVoltage": 8,
    },
    {
        "batteryName": "IOP-E140",
        "capacityAh": 9.9,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 10,
    },
    {
        "batteryName": "IOP-E188",
        "capacityAh": 13.2,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C65",
        "capacityAh": 4.9,
        "voltage": 14.8,
        "maxDraw": 4.9,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C85",
        "capacityAh": 6.3,
        "voltage": 14.4,
        "maxDraw": 6.3,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C140",
        "capacityAh": 9.8,
        "voltage": 14.8,
        "maxDraw": 10,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C290",
        "capacityAh": 19.8,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 12,
    }]
;

const camera =
    [{
        "brand": "Cakon",
        "model": "ABC 3000M",
        "powerConsumptionWh": 35.5,
    },
    {
        "brand": "Cakon",
        "model": "ABC 5000M",
        "powerConsumptionWh": 37.2,
    },
    {
        "brand": "Cakon",
        "model": "ABC 7000M",
        "powerConsumptionWh": 39.7,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9000M",
        "powerConsumptionWh": 10.9,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9900M",
        "powerConsumptionWh": 15.7,
    },
    {
        "brand": "Go MN",
        "model": "UIK 110C",
        "powerConsumptionWh": 62.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 210C",
        "powerConsumptionWh": 64.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 230C",
        "powerConsumptionWh": 26.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 250C",
        "powerConsumptionWh": 15.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 270C",
        "powerConsumptionWh": 20.3,
    },
    {
        "brand": "VANY",
        "model": "CEV 1100P",
        "powerConsumptionWh": 22,
    },
    {
        "brand": "VANY",
        "model": "CEV 1300P",
        "powerConsumptionWh": 23,
    },
    {
        "brand": "VANY",
        "model": "CEV 1500P",
        "powerConsumptionWh": 24,
    },
    {
        "brand": "VANY",
        "model": "CEV 1700P",
        "powerConsumptionWh": 25,
    },
    {
        "brand": "VANY",
        "model": "CEV 1900P",
        "powerConsumptionWh": 26,
    }]
;


class Camera {
    constructor(brand, model, powerConsumptionWh) {
        this.brand = brand;
        this.model = model;
        this.powerConsumptionWh = powerConsumptionWh;
    }
}

class Battery {
    constructor(batteryName, capacityAh, voltage, maxDraw, endVoltage){
        this.battery = batteryName;
        this.capacityAh = capacityAh;
        this.voltage = voltage;
        this.maxDraw = maxDraw;
        this.endVoltage = endVoltage;
    }
}

//配列を作成
let cameraObjects = [];
camera.forEach(tmp => {
    cameraObjects.push(new Camera(tmp.brand, tmp.model, tmp.powerConsumptionWh));
});

let batteryObjects = [];
battery.forEach(tmp => {
    batteryObjects.push(new Battery(tmp.batteryName, tmp.capacityAh, tmp.voltage, tmp.maxDraw, tmp.endVoltage));
});

//console.log(batteryObjects[0].voltage);

//-------------------------step1-------------------------

let brand = {}
for (let i = 0; i < cameraObjects.length; i++) {
    if((cameraObjects[i].brand) in brand)continue;
    else brand[cameraObjects[i].brand] = cameraObjects[i].brand; 
}

//option作成
const selectBrandEle = document.getElementById("selectBrand");
for (key in brand){
    let optionEle = document.createElement("option");
    optionEle.textContent = `${key}`;
    selectBrandEle.appendChild(optionEle);
}
console.log(brand);

//-------------------------step2-------------------------

//step1 selectのbrand読み取り
let currentBrand = selectBrandEle.value;

//brandのModel取得
function getModel (brand){
    let modelList = {};
    for(let i = 0; i < cameraObjects.length; i++){
        if(cameraObjects[i].brand === brand){
            modelList[cameraObjects[i].model] = cameraObjects[i].model;
        } 
    }
    return modelList;
}
let list1 = getModel(currentBrand);
console.log(list1);


//初期option作成
const selectModelEle = document.getElementById("selectModel");

function updateModelElements(modelList){
    selectModelEle.innerHTML = "";
    for(key in modelList){
        let optionEle = document.createElement("option");
        optionEle.textContent = `${key}`;
        selectModelEle.appendChild(optionEle);        
    }
}

let initModelcreate = updateModelElements(list1);

//option更新
selectBrandEle.addEventListener('change', function(){
    currentBrand = selectBrandEle.value;
    let modellist = getModel(currentBrand);
    updateModelElements(modellist);
});

//-------------------------step3-------------------------

//inputの値取得
const inputPowerEle = document.getElementById("inputPower");
let currentPower = inputPowerEle.value;


inputPowerEle.addEventListener('change', function(){
    currentPower = inputPowerEle.value;
    console.log(currentPower);
});

//-------------------------step4-------------------------

//update関数
let step4Div = document.getElementById("step4");

let displayBattery = document.createElement("div");
step4Div.append(displayBattery);
function getBattery(model){
    
    let html = `
    <div class="mb-0 bg-light border border-secondary rounded d-flex justify-content-between align-items-center">
        <p class="pt-2 pb-2 m-0">sdfsa</p>
        <p class="m-0">fsdafg</p>
    </div>
    `;

    displayBattery
}

getBattery("sfas");