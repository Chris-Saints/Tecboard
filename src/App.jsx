import './App.css'
import { Banner } from './components/Banner'
import { CardEvento } from './components/CardEvento'
import { FormularioDeEvento } from './components/FormularioDeEventos'
import { Tema } from './components/Tema'

export function App() {

  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    }
  ]

  const eventos = [
    {
      capa: '../public/Imagem1.svg',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no front',
      descricao: 'Valorizando e impulsionando a participação feminina no desenvolvimento front-end.'
    }
  ]


  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>

      <Banner />

      <FormularioDeEvento />

      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item}/>

            <CardEvento evento={eventos[0]} />
          </section>
        )
      })} 
    </main>
  )
}
