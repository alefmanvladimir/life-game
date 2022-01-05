import { getRandomMatrix } from "../util/random";

export default class LifeMatrix {
    constructor(private _matrix: number[][]) { }
    nextStep(): number[][] {
        const neighbours = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [0, -1], [1, -1], [1, 0], [1, 1]]
        this._matrix = this._matrix.map((row, i) => {
            return row.map((column, j) => {
                const lifeNeighbours = neighbours.reduce((acc, current) => {
                    try {
                        return this._matrix[i + current[0]][j + current[1]] + acc
                    } catch {
                        return acc
                    }
                }, 0)
                return willLive(lifeNeighbours, !!this._matrix[i][j]) ? 1 : 0
            })
        })
        return this._matrix;
    }

    get matrix() {
        return this._matrix
    }

    // set matrix(lifeMatrix: number[][]){
    //     this._matrix = lifeMatrix
    // }
}
function willLive(lifeNeighbours: number, alive: boolean): boolean {
    
    if (alive) {
        return lifeNeighbours >= 2 && lifeNeighbours < 4 ? true : false

    } else {
        return lifeNeighbours == 3 ? true : false
    }
}

