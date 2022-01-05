export function getRandomNumber(min: number, max: number): number{
    if(max<min){
        [max, min] = [min, max]
    }
    return Math.round(min + Math.random()*(max-min))
}

export function getRandomMatrix(minValue: number, maxValue: number, nRows: number, nColumns: number): number[][]{
    if(nRows <0 || nColumns < 0){
        throw Error("number rows or number of columns can not be a negative")
    }
    const res = new Array<number[]>();
    for(let i = 0; i< nRows; i++){
        res[i] = []
        for(let j=0; j < nColumns; j++){
            res[i][j] = getRandomNumber(minValue, maxValue)
        }
    }
    return res
}