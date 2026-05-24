// write common utility functions here 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';    
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }   

    return color;
}

function getRandomPosition(canvasWidth, canvasHeight) {
    return {
        x: getRandomInt(0, canvasWidth),
        y: getRandomInt(0, canvasHeight)
    };
}   

function getRandomVelocity(maxSpeed) {
    return {
        x: getRandomFloat(-maxSpeed, maxSpeed),
        y: getRandomFloat(-maxSpeed, maxSpeed)
    };
}

function getRandomSize(minSize, maxSize) {
    return getRandomInt(minSize, maxSize);
}   
function getRandomShape() {
    const shapes = ['circle', 'square', 'triangle'];
    return shapes[Math.floor(Math.random() * shapes.length)];
}

export {
    getRandomInt,
    getRandomFloat,
    getRandomColor,
    getRandomPosition,
    getRandomVelocity,  
    getRandomSize,
    getRandomShape
};
    
