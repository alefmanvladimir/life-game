import * as React from "react"
import Row from "./row"
type MatrixProps = {
    matrix: number[][]
}

const Matrix: React.FC<MatrixProps> = (props)=>{
    function getRows(): React.ReactNode[] {
        return props.matrix.map((r, index)=><Row key={index} row={r}></Row>)
    }
    return <div style={{display: 'flex', flexDirection: 'column'}}>
        {getRows()}
    </div>
}

export default Matrix