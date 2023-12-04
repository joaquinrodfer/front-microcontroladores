import { useEffect, useState } from 'react'

import DataButton from './components/DataButton'
import './App.css'
import DataRealTime from './components/DataRealTime'
import DataHistorical from './components/DataHistorical'


function App() {
  const [lastData, setLastData] = useState(true)

  useEffect(() => {
    console.log(lastData)
  }, [lastData])
  
  return (
    <>
      <header>
        <h1>Control Almazara</h1>
        <div className="buttons">
          <DataButton active={lastData} data='Tiempo Real' onClick={() => setLastData(true)} />
          <DataButton active={!lastData} data='Histórico' onClick={() => setLastData(false)} />
        </div>
      </header>
      <hr />
      <section className="data">
        {lastData ? <DataRealTime /> : <DataHistorical />}
      </section>
      <footer>
        <p>David Cruz Negrillo - Joaquín Rodríguez Ferrer - Andrés Serrano Barajas </p>
          <p>2023 - Cooperativa El Olivo Seco S.L.</p>
      </footer>
    </>
  )
}

export default App
