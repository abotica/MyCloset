import { useContext, useEffect, useState } from "react"
import style from "./ItemsFilter.module.css"
import UrlContext from "../UrlContext"
import axios from "axios"

function ItemsFilter() {
    const [filter, setFilter] = useState("")
    const { URL, setItems, items } = useContext(UrlContext)

    function handleOnChange(event) {
        setFilter(event.target.value)
    }

    useEffect(() => {
        if (filter == "all") {
            axios.get(URL)
                .then(result => setItems([...result.data]))
        }
        else if (filter !== "") {
            filterItems()
        }
    }, [filter])

    async function filterItems() {
        const data = (await axios.get(URL)).data

        const filteredItems = data.filter(item => item.size === filter)

        setItems([...filteredItems])
    }

    return (
        <div className={style.mainDiv}>
            <h3>Filter options:</h3>
            <div className={style.sizeFilters}>
            Size:
                <label><input name="filterSize" onChange={handleOnChange} type="radio" value={"xs"}></input>XS</label>
                <label><input name="filterSize" onChange={handleOnChange} type="radio" value={"s"}></input>S</label>
                <label><input name="filterSize" onChange={handleOnChange} type="radio" value={"m"}></input>M</label>
                <label><input name="filterSize" onChange={handleOnChange} type="radio" value={"l"}></input>L</label>
                <label><input name="filterSize" onChange={handleOnChange} type="radio" value={"xl"}></input>XL</label>
                <label><input name="filterSize" onChange={handleOnChange} type="radio" value={"xxl"}></input>XXL</label>
                <label><input name="filterSize" onChange={handleOnChange} type="radio" value={"universal"}></input>Universal</label>
                <label><input name="filterSize" onChange={handleOnChange} type="radio" value={"all"}></input>All</label>
            </div>
            {/* <div className={style.saleFilters}>
            On sale:
            <label><input name="filterSale" onChange={handleOnChange} type="radio" value={"yes"}></input>YES</label>
            <label><input name="filterSale" onChange={handleOnChange} type="radio" value={"no"}></input>NO</label>
            <label><input name="filterSale" onChange={handleOnChange} type="radio" value={"both"}></input>BOTH</label>
            </div> */}


        </div>
    )
}

export default ItemsFilter