import './App.css'
import Welcome from './components/Welcome'
import GoodMorning from './components/GoodMorning'
import Parent from './components/Parent'
import Description from './components/Description'
import Counter from './components/Counter'
import UserInfoForm from './components/UserInfoForm'
import Button from './components/Button'
import ParentFunction from './components/ParentFunction'

function App() {
  return (
    <>
      <Welcome/>
      <GoodMorning />
      <Parent />   
      <Description nome="Noara" idade={37} />
      <Counter />
      <UserInfoForm />
      <Button />
      <ParentFunction />
      {
        /*Comentario: Criação de Componentes*/
      }
    </>
  )
}

export default App