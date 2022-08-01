import './App.css';
import { addWorksFunc, deleteWorksFunc, useHooksContext } from './store'
import { Home, Contact, News } from './Pages'
import { Link, Route, Routes } from 'react-router-dom'
function App() {
  const [state, dispatch] = useHooksContext();
  const handleWork = () => {
    dispatch(addWorksFunc(state.input))
  }
  const deleteWorks = (index) => {
    return () => {
      console.log(index)
      dispatch(deleteWorksFunc(index))
    }
  }
  console.log(state)
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/'>
              hello1
            </Link>
          </li>
          <li>
            <Link to='/news'>
              hello2
            </Link>
          </li>
          <li>
            <Link to='contact'>
              hello3
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
