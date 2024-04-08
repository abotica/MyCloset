import style from "./TableRow.module.css"
import Options from "../Options/Options"

function TableRow({result}){
    return (
        <tr className={style.tableRow}>
            <td>{result.item}</td>
            <td>{result.brand}</td>
            <td>{result.price}</td>
            <td>{result.onSale}</td>
            <td>{result.size}</td>
            <td>{result.color}</td>
            <td>{result.dateBought}</td>
            <td><img src={result.imagePath}></img></td>
            <td><Options></Options></td>
        </tr>
    )
}

export default TableRow