import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

import { ToastContainer } from 'react-toastify';

const App = () => (
  <>
  <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
