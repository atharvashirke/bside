function getRandomInt(min, max) {
    return Math.floor(min + (Math.random() * (max - min)));
}

export const randomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
}

export const randomVector = (obj) => {
    let vector = [0, 0 ,0];
    vector[0] = getRandomInt(obj.xRange.fromX, obj.xRange.toX);
    vector[1] = getRandomInt(obj.yRange.fromY, obj.yRange.toY);
    vector[2] = getRandomInt(obj.zRange.fromZ, obj.zRange.toZ);
    return vector
}