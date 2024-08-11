
import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'


function App() {

  const baseState = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  return (
    <>
      <Description/>
      <Options options={baseState}/>
      <Feedback feedback={baseState}/>
    </>
  )
}

export default App
