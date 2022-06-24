import TodoApp from "../Exercise/TodoList";
import DadJokes from "../Exercise/DadJokes";
import GitHub from "../Exercise/Github";
import Movies from "../Exercise/Movies";
import Pokedex from "../Exercise/Pokedex";
import TourApp from '../Exercise/TourApp';
import WhereWorld from "../Exercise/WhereWorld";
import Home from "../Exercise/Home/Home";

export const listRouter =[

    {
        path: "/",
        element: <Home />,
        name:'Home'
      },
      {
        path: "/todopp",
        element: <TodoApp />,
        name: "Todo app"
      },
      {
        path: "/dadjokes",
        element: <DadJokes />,
        name:'Dad Jokes'
      },
      {
        path: "/github",
        element: <GitHub />,
        name:'Github'

      },
      {
        path: "/movies",
        element: <Movies />,
        name:'Movies'

      },
      {
        path: "/pokedex",
        element: <Pokedex />,
        name:'Pokedex'

      },
      {
        path: "/world",
        element: <WhereWorld />,
        name:'Where World'

      },
      {
        path: "/tourapp",
        element: <TourApp />,
        name:'Tour App'

      },
    // <Routes>
    //   <Route path='/todoapp' element={<TodoApp/>} />
    //   <Route path='/tourapp' element={<TourApp/>} />
    //   <Route path='/dadjokes' element={<DadJokes/>} />
    //   <Route path='/github' element={<GitHub/>} />
    //   <Route path='/movies' element={<Movies/>} />
    //   <Route path='/pokedex' element={<Pokedex/>} />
    //   <Route path='/whereworld' element={<WhereWorld/>} />

    //   </Routes>
]