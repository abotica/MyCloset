import { useContext } from "react"
import TableRow from "../TableRow/TableRow"
import style from "./Table.module.css"
import UrlContext from "../UrlContext"

function Table(){
    const {items} = useContext(UrlContext)
    return (
        <table className={style.table}>

        <thead>
        <tr>
            <th>ITEM</th>
            <th>BRAND</th>
            <th>PRICE</th>
            <th>ON SALE</th>
            <th>SIZE</th>
            <th>COLOR</th>
            <th>DATE BOUGHT</th>
            <th>IMAGE</th>
            <th>OPTIONS</th>
        </tr>
        </thead>

        <tbody>
        {items.map(item => (
                <TableRow key={item.id} result={item}></TableRow>
            ))}
        </tbody>
            

        </table>
    )
}

export default Table