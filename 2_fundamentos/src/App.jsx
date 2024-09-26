import './App.css'
import Welcome from './components/Welcome'
import GoodMorning from './components/GoodMorning'
import Parent from './components/Parent'
import Description from './components/Description'
import Counter from './components/Counter'
import UserInfoForm from './components/UserInfoForm'
import Button from './components/Button'
import ParentFunction from './components/ParentFunction'
import Form from './components/Form'
import RenderConditional from './components/RenderConditional'
import LoginButton from './components/LoginButton'
import Warning from './components/Warning'
import NumberList from './components/NumberList'
import EstilizedButton from './components/EstilizedButton'
import BlueButton from './components/BlueButton'

function App() {
  return (
    <>
      <Welcome/>
      <hr />
      <GoodMorning />
      <hr />
      <Parent />   
      <hr />
      <Description nome="Noara" idade={37} />
      <hr />
      <Counter />
      <hr />
      <UserInfoForm />
      <hr />
      <Button />
      <hr />
      <ParentFunction />
      <hr />
      <Form />
      <hr />
      <RenderConditional user="Silvaney" />
      <hr />
      <LoginButton loggedIn={true} />
      <LoginButton loggedIn={false} />
      <hr />
      <Warning Warning={true}/>
      <NumberList numbers={[1,2,3,4]}/>
      <hr />
      <EstilizedButton />
      <hr />
      <BlueButton />
      {
        /*Comentario: Criação de Componentes*/
      }
    </>
  )
}

export default App