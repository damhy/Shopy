import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from '../src/screens/HomeScreen'

import { Container } from 'react-bootstrap'
import ProductScreen from './screens/ProductScreen'
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
