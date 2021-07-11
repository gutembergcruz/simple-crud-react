import { Header } from './components/Header/'
import { GlobalStyle } from './global'
import { List } from './components/List'

function App(props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <List />
    </>
  );
}

export default App;
