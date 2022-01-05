import * as React from "react"
import LifeMatrix from "../service/life-matrix"
import { getRandomMatrix } from "../util/random"
import lifeGameConfig from '../configuration/life-game-config.json'
import Matrix from './matrix'
import { customMatrix } from "../util/custom"
const LifeGame: React.FC = () => {
    const m = getRandomMatrix(0, 1, lifeGameConfig.dimension, lifeGameConfig.dimension)
    const lifeMatrix = React.useRef<LifeMatrix>(new LifeMatrix(m))
    const [numbers, setNumbers] = React.useState<number[][]>(lifeMatrix.current.matrix)
    function tick() {
        setNumbers(lifeMatrix.current.nextStep())
    }

    React.useEffect(() => {
        const interval = setInterval(tick, lifeGameConfig.tickInterval)
        return () => clearInterval(interval)
    }, [])

    return <div style={{ display: 'flex', justifyContent: "center"}}>
    <Matrix matrix={numbers}/>
</div>
}

export default LifeGame