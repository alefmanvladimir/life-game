import * as React from "react"
import lifeGameConfig from '../configuration/life-game-config.json'
const BORDER_SIZE = 1
const Row: React.FC<{ row: number[] }> = (props) => {
    const row = props.row
    const size = Math.min(window.innerHeight, window.innerWidth) / lifeGameConfig.dimension - BORDER_SIZE * 2

    function getCells(): React.ReactNode[] {
        return row.map((n, index) => <div key={index} style={getStyle(n)}></div>)
    }

    function getStyle(num: number): React.CSSProperties {
        return {
            backgroundColor: !!num ? 'black' : 'white',
            width: size,
            height: size,
            border: `${BORDER_SIZE}px solid gray`
        }
    }

    return <div style={{ display: "flex" }}>
        {getCells()}
    </div>
}

export default Row