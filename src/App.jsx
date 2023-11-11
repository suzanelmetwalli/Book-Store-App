import AddForm from "./Components/AddForm/AddForm"
import BookContainer from "./Components/Book/BookContainer"
import Container from "./Components/Container/Container"
import Header from "./Components/Header/Header"

function App() {
 

  return (
    <>
      <Header/>
      <Container>
        <AddForm/>
        <BookContainer/>
      </Container>
    </>
  )
}

export default App
