import { useState } from "react"

const FormularioColaboradores= (props) => {
const [nombre, setNombre] = useState('')
const [correo, setCorreo] = useState('')

const capturarNombre = (e) => {setNombre(e.target.value)}
const capturarCorreo = (e) => {setCorreo(e.target.value)}

const guardarcolaboradorform = (e) => {
e.preventDefault();

const colaborador = {
id: "3" + Math.random(),
nombre: nombre,
correo: correo
}

props.guardarColaborador(colaborador)
}

return ( 
    <form onSubmit={guardarcolaboradorform}>
        <label>Nombre</label>
        <input type="text" onChange={capturarNombre} value={nombre} />
        <label>Correo</label>
        <input type="text" onChange={capturarCorreo} value={correo} />
        <button type="submit">Guardar</button>
    </form>
)
}

export default FormularioColaboradores