var clockArray = [
    {
        name : "Delhi",
        utcTimeOffset: "-330",
    },
    {
        name : "London",
        utcTimeOffset: "    60",
    },
    {
        name : "New York",
        utcTimeOffset: "240",
    },
    {
        name : "Paris ",
        utcTimeOffset: "-120",
    }
]

const root = document.querySelector("section");
const clockRoot = document.querySelector(".clock-root");
root.append(clockRoot)

let buttonContainer = document.createElement("div");
buttonContainer.classList.add("flex")

let date = new Date();
let getDateInMillisecs = date.getTime();
let timeZOneOffSet = date.getTimezoneOffset() * 60 * 1000;

let utcTime = getDateInMillisecs + timeZOneOffSet;
console.log(new Date(utcTime))




function setDate(secondH, minuteH, hourH, offSet){

    let date = new Date().getTime();
    // let getDateInMillisecs = date.getTime();
    let timeZoneOffSet_InMilliSecond = (offSet - 330) * 60 * 1000;
    
    let utcTime = date + timeZoneOffSet_InMilliSecond ;
    // console.log(new Date(utcTime)) 
   
    const now = new Date(utcTime);

    const secs = now .getSeconds();
    const secDegrees = ((secs / 60) * 360) + 90;
    secondH.style.transform = `rotate(${secDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90
    minuteH.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + 90
    hourH.style.transform = `rotate(${hoursDegree}deg)`
}

function creatUI(){
    clockRoot.innerHTML = ""
    clockArray.forEach((item, index)=>{
        const clock = document.createElement("div");
        clock.classList.add('clock');

        const img_container = document.createElement("div");
        const img = document.createElement("img");
        img.classList.add('image');
        img.src = "./clock1.png"
        img_container.append(img);

        const clock_face = document.createElement('div');
        clock_face.classList.add("clock-face")

        const secondHand = document.createElement('div');
        const minuteHand = document.createElement('div');
        const hourHand = document.createElement('div');
    
        secondHand.classList.add('hand','hour-hand');
        minuteHand.classList.add('hand', 'min-hand');
        hourHand.classList.add('hand', 'second-hand');

        clock_face.append(secondHand,minuteHand,hourHand);

        let paragraph = document.createElement('p');
        paragraph.innerText = item.name

        let deleteButton = document.createElement('button');
        deleteButton.classList.add("delete-Button");
        deleteButton.innerText = "x"
        deleteButton.id = index;
        deleteButton.addEventListener('click', deleteClock)

        clock.append(img_container, clock_face, paragraph, deleteButton);

        clockRoot.append(clock);
        

        setInterval(function(){
            setDate(secondHand, minuteHand, hourHand, item.utcTimeOffset)
        }, 1000)
    })
}

function deleteClock(event){
    clockArray.splice(event.target.id,1)
    creatUI()
}

function createCitiesUI(){
    offsetsArrays.forEach((item, index)=>{
        let button = document.createElement('button');
        button.id = index;
        button.innerText = item.name;
        button.addEventListener('click',handleClick)


        buttonContainer.append(button);
        root.append(buttonContainer);
    })
}

function handleClick(event){
    if(clockArray.length < 4){
        clockArray.push(offsetsArrays[event.target.id])
    }
    creatUI()
}


creatUI()
createCitiesUI()

