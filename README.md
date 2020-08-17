## Class Type

#### src/routes/Home.js

```javascript
(...)
 state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }
(...)

```

#### src/routes/Detail.js

```javascript
(...)
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

```

## Function Type

#### index.js

```javascript
(...)
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
// HashRouter >> BrowserRouter
```

#### src/routes/Home.js

```javascript
  const [loading, setLoading] = useState({
    isLoading: true,
    movies: [],
  });

  const movieList = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    setLoading({ movies, isLoading: false });
  };

  useEffect(() => {
    movieList();
  }, []);

  1. state = {}, setState() >> useState() Hook으로 변경
  2. componentDidMount() >> useEffect() Hook으로 변경
```

#### src/routes/Detail.js

```javascript

(...)
function Detail({ location, history }) {
  if (location.state === undefined) {
    history.push("/");
  }

```
