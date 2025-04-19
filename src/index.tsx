import { createRoot } from 'react-dom/client';
import Count from './components/Count';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<Count />);
