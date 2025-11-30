import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloFormulario } from "../TituloFormulario";
import './formulario-de-evento.estilos.css'

export function FormularioDeEvento({ temas, aoSubmeter }) {

  function aoFormSubmetido(formData){

    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function(item) {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento'),
      descricao: formData.get('descricao')
    }
    aoSubmeter(evento);
  }



  return (
    <form className='form-evento' action={aoFormSubmetido} >
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
          <Label htmlFor="capa">
            Qual é o endereço da imagem de capa?
          </Label>
          <CampoDeEntrada type="text" name="capa" placeholder='http://...' id='capa' />

        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do Evento
          </Label>
          <CampoDeEntrada type="date" placeholder='Summer dev hits' name='dataEvento' id='dataEvento' />

        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="tema">
            Tema do evento
          </Label>
          <ListaSuspensa name='tema' id='tema' itens={temas} />

        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="descricao">
            Qual a descrição do evento?
          </Label>
          <CampoDeEntrada type="text" name="descricao" placeholder='Descreva aqui' id='descricao' />

        </CampoDeFormulario>

        <Botao onClick='sumbit'>
          Criar evento
        </Botao>
      </div>
      
    </form>
  )
}