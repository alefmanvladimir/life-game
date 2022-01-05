export function customMatrix(): number [][]{
    const matrix: number[][] = []
    for(let i = 0; i< 5; i++){
        matrix[i] = []
        for(let j=0; j < 5; j++){
            matrix[i][j] = 0
        }
    }
    matrix[2][1] = 1
    matrix[2][2] = 1
    matrix[2][3] = 1
    return matrix
}