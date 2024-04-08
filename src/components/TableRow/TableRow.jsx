import style from "./TableRow.module.css"
import Options from "../Options/Options"
import { useContext, useState } from "react"
import UrlContext from "../UrlContext"
import SelectInput from "../FormInputs/SelectInput"
import FieldInput from "../FormInputs/FieldInput"
import RadioInput from "../FormInputs/RadioInput"
import HatImage from "/src/assets/Hat.png"
import JeansImage from "/src/assets/Jeans.png"
import JumperImage from "/src/assets/Jumper.png"
import ShortsImage from "/src/assets/Shorts.png"
import TShirtImage from "/src/assets/T-shirt.png"
import axios from "axios"

function TableRow({ result }) {
    const { itemsDropdownOptionValues, itemsDropdownInnerText, sizesDropdownOptionValues, sizesDropdownInnerText, URL, items, setItems} = useContext(UrlContext)
    const [editField, setEditField] = useState(false)

    const [itemEdited, setItemDataEdited] = useState(
        {
            itemEdit: "",
            brandEdit: "",
            priceEdit: "",
            onSaleEdit: "",
            sizeEdit: "",
            colorEdit: "#000000",
            dateBoughtEdit: "",
            imagePathEdit: "",
        }
    )

    function changeInput(event) {
        const { name, value } = event.target
        setItemDataEdited({ ...itemEdited, [name]: value })
    }

    function determineImagePath(itemName){
        switch (itemName) {
            case "hat":
                return HatImage
        
            case "jumper":
                return JumperImage

            case "jeans":
                return JeansImage

            case "shorts":
                return ShortsImage

            case "t-shirt":
                return TShirtImage
        }
    }

    function handlePutRequest(){
        const putObject = formatObject(itemEdited)
        axios.put(URL + `/${result.id}`, putObject)
        .then(() => axios.get(URL))
        .then(result => setItems([...result.data]))
    }

    function formatObject(objectEdited){
        const path = determineImagePath(objectEdited.itemEdit)
        return {
            item: objectEdited.itemEdit,
            brand: objectEdited.brandEdit,
            price: objectEdited.priceEdit,
            onSale: objectEdited.onSaleEdit,
            size: objectEdited.sizeEdit,
            color:  objectEdited.colorEdit,
            dateBought: objectEdited.dateBoughtEdit,
            imagePath: path,
        }
    }

    return (
        <tr className={style.tableRow}>
            <td>{editField ? <SelectInput labelText={""}
                selectValue={itemEdited.itemEdit}
                selectName={"itemEdit"}
                onChange={changeInput}
                optionValues={itemsDropdownOptionValues}
                innerText={itemsDropdownInnerText}
                showLabel={false}
            ></SelectInput> : result.item}</td>
            <td>{editField ? <FieldInput labelText={""} inputType={"text"} inputName={"brandEdit"} inputPlaceholder={"Brand name"} inputValue={itemEdited.brandEdit} onChange={changeInput} showLabel={false}></FieldInput> : result.brand}</td>
            <td>{editField ? <FieldInput labelText={""} inputType={"number"} inputName={"priceEdit"} inputPlaceholder={"Price"} inputValue={itemEdited.priceEdit} onChange={changeInput} numberStep={"0.01"} showLabel={false}></FieldInput> : result.price}</td>
            <td>{editField ? <RadioInput labelText={""} radioValues={["yes", "no"]} radioLabels={["Yes", "No"]} onChange={changeInput} radioName={"onSaleEdit"} item={itemEdited} showLabel={false}></RadioInput> : result.onSale}</td>
            <td>{editField ? <SelectInput labelText={""}
                selectValue={itemEdited.sizeEdit}
                selectName={"sizeEdit"}
                onChange={changeInput}
                optionValues={sizesDropdownOptionValues}
                innerText={sizesDropdownInnerText}
                showLabel={false}
            ></SelectInput> : result.size}</td>
            <td>{editField ? <FieldInput labelText={""} inputType={"color"} inputName={"colorEdit"} inputValue={itemEdited.colorEdit} onChange={changeInput} showLabel={false}></FieldInput> : <input type="color" value={result.color} disabled></input>}</td>
            <td>{editField ? <FieldInput labelText={""} inputType={"date"} inputName={"dateBoughtEdit"} inputValue={itemEdited.dateBoughtEdit} onChange={changeInput} showLabel={false}></FieldInput> : result.dateBought}</td>
            <td><img src={result.imagePath}></img></td>
            <td><Options dataId={result.id} setEditField={setEditField} editField={editField} handlePutRequest={handlePutRequest}></Options></td>
        </tr>
    )
}

export default TableRow