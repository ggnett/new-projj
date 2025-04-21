import { createRoot } from 'react-dom/client';
import App from './components/App';

import './index.scss';
import { BrowserRouter } from 'react-router-dom';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
);
