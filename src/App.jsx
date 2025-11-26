import './App.css'


function FormularioDeEvento() {
  return (
    <form className='form-evento'>
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor="">
          Qual o nome do evento?
        </label>
        <input type="text" placeholder='Summer dev hits' id='nome' />

        <label htmlFor="">
          Data do evento
        </label>
        <input type="text" placeholder="xx/xx/xxxx" />

        <label htmlFor="">
          Tema do evento
        </label>
        <select>
          <option>Olar</option>
          <option>Tchau</option>
        </select>

      </fieldset>
    </form>
  )
}


function App() {

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>

      <section>
        <img src="/banner.png" alt="" />
      </section>

      <FormularioDeEvento />

    </main>
  )
}

export default App
