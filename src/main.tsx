import ReactDOM from 'react-dom/client'
import App from './App'
import ContextPovider from './context/ContextProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ContextPovider>
      <App />
    </ContextPovider>,
)
