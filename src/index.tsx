import { createRoot } from 'react-dom/client';
import App from './components/App';

import './index.scss'

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App/>);
