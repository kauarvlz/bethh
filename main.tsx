import {createRoot} from 'react-dom/client';
import Home from './app/page';
import {content} from './app/content';
import './app/globals.css';

document.title = content.name+' | Prévia demonstrativa';
document.querySelector('meta[name="description"]')?.setAttribute('content',content.hero.description);
createRoot(document.getElementById('root')!).render(<Home/>);
