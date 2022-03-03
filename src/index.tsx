import 'bulmaswatch/darkly/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/CellList/CellList';

const App = () => {
  useEffect(() => {
    document.title = 'Js - Markdown Sandbox';
  }, []);

  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
