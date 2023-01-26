import Router from "./Router/Router"
import GlobalStyle from "./GlobalStyled"
import GlobalStates from "./contexts/GlobalStates"

function App() {

  return (
    <GlobalStates>
      <GlobalStyle />
      <Router />
    </GlobalStates>
  )
}

export default App
