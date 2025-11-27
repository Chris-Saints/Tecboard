import './lista-suspensa.estilos.css'

export function ListaSuspensa(props) {
    return (
        <select {...props} className="select-form">
            <option></option>
        </select>
    )
}