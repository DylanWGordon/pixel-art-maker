
document.body.style.width = '1.0'
document.body.style.height = '100vh'
document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.backgroundImage = 'url("pixelClouds.png")'
document.body.style.backgroundColor = '#9665ab'
document.body.style.margin = '0px'


// The Pixels


function makeGrid(parent, numRows) {
    let perc = (100 / numRows);
    for (let i = 1; i <= (numRows*numRows); i++) {
        const section = document.createElement('div')
        section.style.height = `${perc}%`
        section.style.width = `${perc - .15}%`
        section.style.display = 'flex'
        section.style.flexFlow= 'row wrap'
        section.style.borderBottom = '1px solid black'
        section.style.borderRight = '1px solid black'
        section.classList = 'pixelquadrant';
        parent.appendChild(section)     
    }
}

function makePixel(parent, numRows) {
    let perc = (100 / numRows);
    for (let i = 1; i <= (numRows*numRows); i++) {
        const section = document.createElement('div')
        section.style.height = `${perc}%`
        section.style.width = `${perc}%`
        section.style.display = 'flex'
        section.style.flexFlow= 'row wrap'
        section.style.outline= '1px solid rgba(0,0,0,0.15)'
        section.classList = 'pixel';
        section.style.backgroundColor = 'pink';
        // if(i % 32 == 0 ){
        //     section.style.borderRight='1px solid rgba(0,0,0,0.30)'
        // } if(
        // }
        parent.appendChild(section)
        
    }
}


// The Working area

const app = document.createElement('div');
app.style.width = '102vh'
app.style.height = '100vh'
app.style.outline = '1px solid black'
app.style.justifyContent = 'center'
app.style.display = 'flex'
app.style.flexFlow = 'row wrap';
app.style.borderTopLeftRadius = '30px'
app.style.borderTopRightRadius = '30px'
app.style.margin= 'none'


        //title / top bar
            const topper = document.createElement('div');
            topper.style.width = '100%'
            //100 1950
            topper.style.height = '10vh';
            //11.8 165
            topper.style.borderTopLeftRadius = '30px'
            topper.style.borderTopRightRadius = '30px'
            topper.style.backgroundColor = '#e0a912'
            topper.style.alignContent = 'center'
            topper.style.justifyContent = 'center'
            topper.style.display = 'flex'
            topper.style.flexFlow = 'row wrap';

                    //Top bar title
                    let colorBoy = document.createElement('h1');
                        colorBoy.style.paddingTop= '`%';
                        colorBoy.style.fontFamily= `Rockwell, Georgia, “Times New Roman”, Times, serif`;
                        colorBoy.style.fontSize= '50px';
                        colorBoy.style.color= 'rgb(184, 126,25)';
                        colorBoy.style.textShadow= 'rgba(0,0,0,0.5) -1px 0, rgba(0,0,0,0.3) 0 -1px, rgba(255,255,255,0.5) 0 1px, rgba(0,0,0,0.3) -1px -2px';
                        colorBoy.textContent= 'pixelBoi'
                        topper.appendChild(colorBoy)
                        


        //memory / left bar
            const toolbar = document.createElement('div');
            toolbar.style.backgroundColor = '#e0a912'
            toolbar.style.width = '10vh'
            //15 300
            toolbar.style.height = '80vh';
            //88 1225

                //toolbar buttons / color history + undo/redo
                    class colors{};
                    class undo{}
                    class redo{}

                    for(let i = 0; i < 6; i++){
                        toolbar.style.display = 'flex'
                        toolbar.style.flexFlow = 'column wrap'
                        let mem = document.createElement('button');
                        mem.style.height = '16.6%';
                        mem.style.width = '10%'
                        mem.classList.add('colors')
                        toolbar.append(mem)
                    }
                    let undoRedo = document.createElement('div')
                    undoRedo.style.display = 'flex';
                    undoRedo.style.flexFlow = 'row wrap'
                    undoRedo.style.height = '5%'
                    undoRedo.style.width = '80%'
                    undoRedo.style.alignContent = 'space-evenly'
                    undoRedo.style.justifyContent = 'space-evenly'
                    toolbar.append(undoRedo)


                    
                        let unReLabel = document.createElement('div');                            
                        unReLabel.style.height = '40%';
                        unReLabel.style.width = '80%'
                        unReLabel.style.fontSize = '60%'
                        unReLabel.textContent = 'undo / redo'
                        undoRedo.append(unReLabel)

                    for(let i = 0; i < 2; i++){
                        let mem = document.createElement('button');
                        mem.style.height = '40%';
                        mem.style.width = '40%'
                        mem.style.borderRadius = '30px'
                        mem.style.backgroundColor= 'rgb(65,53,53)'
                        
                        if(i == 0){
                            mem.classList.add('undo')
                        } else {
                            mem.classList.add('redo')
                        }
                        undoRedo.append(mem)
                    }


                            class tools{};
                         for(let i = 0; i < 3; i++){
                            let toolBtns = document.createElement('button');
                            toolBtns.style.height = '6.2%';
                            toolBtns.style.width = '50%'
                            toolBtns.style.margin='15%'
                            toolBtns.style.borderRadius= '50%'
                            toolBtns.classList.add('tools')
                            toolBtns.style.fontSize= '60%';
                            toolBtns.style.color = 'dark grey'
                            toolBtns.style.backgroundColor= 'rgb(65,53,53)'
                            toolBtns.style.boxShadow= '1px 1px 1px grey, 0 0 3px black';
                            toolBtns.style.textShadow = 'rgba(0,0,0,0.5) -1px 0, rgba(0,0,0,0.3) 0 -1px, rgba(255,255,255,0.5) 0 1px, rgba(0,0,0,0.3) -1px -2px';
                            toolbar.append(toolBtns)
                         }
                     

                    


        //options / right bar
            const trim = document.createElement('div');
            trim.style.backgroundColor = '#e0a912'
            trim.style.width = '10vh'
            trim.style.height = '80vh'
            trim.style.display = 'flex';
            trim.style.flexFlow = 'column wrap';
            trim.style.alignContent= 'center';
            // trim.style.borderLeft='1px solid black'
            //15 300
            trim.style.height = '80vh'
            //88 1225

                     
                    let clrBtn = document.createElement('button')
                    clrBtn.setAttribute('id','clearScreen')
                    clrBtn.style.height = '5%';
                    clrBtn.style.width= '80%'
                    clrBtn.textContent= 'CLEAR'
                    clrBtn.style.borderRadius = '30px'
                    clrBtn.style.backgroundColor= 'rgb(65,53,53)';
                    clrBtn.style.boxShadow= '1px 1px 1px grey, 0 0 3px black';
                    trim.append(clrBtn);

        //Canvas
            let artBlock = document.createElement('div');
            artBlock.style.width = '82vh';
            //84.6 1650
            artBlock.style.height = '80vh';
            //88 1225
            artBlock.style.backgroundColor = 'pink';
            artBlock.style.outline = '1px solid black'
            artBlock.style.display = 'flex'
            artBlock.style.flexFlow = 'row wrap';


        //bottom / color picker
            const dropdown = document.createElement('div');
            dropdown.style.width = '100%'
            //100 1950
            dropdown.style.height = '10vh'
            //11.8 165
            // dropdown.style.borderBottomLeftRadius = '30px'
            // dropdown.style.borderBottomRightRadius = '30px'
            // dropdown.style.backgroundColor = '#272429'
            dropdown.style.backgroundColor = '#e0a912'
            dropdown.style.alignContent = 'center'
            dropdown.style.justifyContent = 'center'
            dropdown.style.display = 'flex'
            dropdown.style.flexFlow = 'row wrap';


                    //bottom buttons
                        let colorWheelClick = document.createElement('div');
                        let colorWheel = document.createElement('input')
                        colorWheel.style.opacity = 0
                        colorWheel.style.padding = 'auto';
                        colorWheel.style.height = '8vh'
                        colorWheel.style.width = '8vh'
                        colorWheel.type = 'color';
                        colorWheel.style.borderRadius = '5px'
                        colorWheel.style. boxShadow= '1px 1px 1px grey, 0 0 3px black';
                        colorWheelClick.append(colorWheel)
                        colorWheelClick.style.height = '8vh';
                        colorWheelClick.style.width = '8vh';
                        colorWheelClick.style.backgroundColor = 'rgb(65,53,53)';
                        colorWheelClick.style.borderRadius= '50%'
                        colorWheelClick.style.outline = '1px solid black'
                        colorWheelClick.style.boxShadow= '1px 1px 1px grey, 0 0 3px black';
                        dropdown.append(colorWheelClick)

                        //button loop
                            class btns {};
                            for(let i = 1; i < 8; i++){
                            let btn = document.createElement('button');
                            let col = ['R','O','Y','G','B','V','B'];
                            let baGr = ['#ff0000', '#FFA500', '#FFFF00', '#008000', '#0000ff', '#800080', '#000000'];
                            btn.classList.add('btns')
                            btn.style.height = '60%';
                            btn.style.width = '6%';
                            btn.style.borderRadius = '50%'
                            btn.style.margin = '10px'
                            btn.style.fontWeight = 'bold'
                            btn.textContent = `${col[i - 1]}`;
                            btn.style.textShadow = 'rgba(0,0,0,0.5) -1px 0, rgba(0,0,0,0.3) 0 -1px, rgba(255,255,255,0.5) 0 1px, rgba(0,0,0,0.3) -1px -2px';
                            btn.style.backgroundColor = `${baGr[i - 1]}`;
                            if(i == 7 ){btn.style.color = 'dark gray'}
                            btn.style. boxShadow= '1px 1px 1px grey, 0 0 3px black';
                            dropdown.append(btn);
                            }


                        







document.body.appendChild(app)
app.appendChild(topper)
app.appendChild(toolbar)
app.appendChild(artBlock)
app.appendChild(trim)
app.appendChild(dropdown)

makeGrid(artBlock, 2)

//functions
for(let i = 0; i < artBlock.children.length; i++){
    makePixel(artBlock.children[i], 32)
}
let changeArray = [];
let lastChange = [];
let memoryColor = ['#ff0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#FFFFFF']
let currentColor = 'black'
let colorButtons = dropdown.querySelectorAll('.btns')
let colMem = toolbar.querySelectorAll('.colors')


for(let i =0; i< colMem.length; i++){
    colMem[i].style.backgroundColor = memoryColor[memoryColor.length -1 -i]
    colMem[i].addEventListener('click', function(){
        currentColor = colMem[i].style.backgroundColor
    })
}

colorWheel.addEventListener('change', function(){
    for(let i = 0; i < colMem.length; i++){
        colMem[i].style.backgroundColor = memoryColor[memoryColor.length -1 -i]
    }
})


colorWheel.addEventListener("input", function(){
        memoryColor.push(`${this.value}`);
        currentColor = memoryColor[memoryColor.length -1];
        console.log(memoryColor)
        colorWheelClick.style.backgroundColor=currentColor    
        colorWheel.value = currentColor
});

 

 for(let i = 0; i < colorButtons.length; i++){
    colorButtons[i].addEventListener('click', function(){
        
        memoryColor.push(colorButtons[i].style.backgroundColor);
        currentColor = memoryColor[memoryColor.length - 1]
        colorWheelClick.style.backgroundColor=currentColor;
        for(let j = 0; j < colMem.length; j++){
            colMem[j].style.backgroundColor=memoryColor[memoryColor.length-1-j]
        }
        
    })
}



let memory = []
let quadrant = artBlock.querySelectorAll('.pixelQuadrant');
let pixels = artBlock.querySelectorAll('.pixel')
let depressed = false
let toolList= toolbar.querySelectorAll('.tools')
let eraseBtn = toolList[0];
let saveBtn = toolList[1]
let loadBtn = toolList[2]
let flood = false;
let changes = [];
let changeSave =[];
let undoBtn = toolbar.querySelector('.undo');
let redoBtn = toolbar.querySelector('.redo')
let undRed = {}
let redoChange = []/



eraseBtn.textContent = 'erase';
saveBtn.textContent = 'save';
loadBtn.textContent = 'load'


artBlock.addEventListener('mousedown', function(){
        depressed = true;
        for(let i = 0; i < pixels.length; i++){
        lastChange.push(pixels[i].style.backgroundColor)
        }
})

// 

for(let i = 0; i < pixels.length; i++){
    pixels[i].addEventListener('mousedown', function(){
        pixels[i].style.backgroundColor = `${currentColor}`;
    
    })
    pixels[i].addEventListener('mouseenter', function(){
        if(depressed){
            pixels[i].style.backgroundColor = `${currentColor}`
        }
    })

    artBlock.addEventListener('mouseup', function(){
        changes.push(lastChange)

        
    })
}
let pixelData = {}
let storeData = []



document.addEventListener('mouseup', function(){
    depressed = false;
   
})




undoBtn.addEventListener('click', function(){
    for(let i = 0; i < pixels.length; i++){
        pixels[i].style.backgroundColor = changes[changes.length - 1][i]
        redoChange.push(lastChange)
        console.log(changes)
    }
})

saveBtn.addEventListener('click', function(){
    localStorage.clear;
    
    for(let i = 0; i < pixels.length; i++){
        localStorage.removeItem(`${i}`)
        if(pixels[i].style.backgroundColor != 'pink'){
            pixelData[i] = pixels[i].style.backgroundColor;
            localStorage.setItem(`${i}`, JSON.stringify(pixelData[i]))
        }
    
    }
})

loadBtn.addEventListener('click', function(){
    for(let i = 0; i < pixels.length; i++){
    pixels[i].style.backgroundColor =JSON.parse(window.localStorage.getItem(`${i}`))
    if(pixels[i].style.backgroundColor == undefined){
        pixels[i].style.backgroundColoor= 'pink'
    }
    }    
    // console.log(artBlock)
})






clrBtn.addEventListener('click', function(){
    for(let i = 0; i < pixels.length; i++){
        pixels[i].style.backgroundColor = 'pink'
    }
})

eraseBtn.addEventListener('click', function(){
    currentColor = 'pink'
})

