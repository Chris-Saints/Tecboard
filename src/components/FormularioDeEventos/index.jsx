import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloFormulario } from "../TituloFormulario";
import './formulario-de-evento.estilos.css'

export function FormularioDeEvento() {
  return (
    <form className='form-evento'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
        <Label htmlFor="nomeEvento">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada type="text" name="nomeEvento" placeholder='Summer dev hits' id='nomeEvento' />

        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do Evento
          </Label>
          <CampoDeEntrada type="date" placeholder='Summer dev hits' name='dataEvento' id='dataEvento' />

        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="temaEvento">
            Tema do evento
          </Label>
          <ListaSuspensa name='temaEvento' id='temaEvento' />

        </CampoDeFormulario>

        <Botao onClick='sumbit'>
          Criar evento
        </Botao>
      </div>
      
    </form>
  )
}