import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'
import { ParallaxProvider } from 'react-scroll-parallax';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ParallaxProvider>
        <App />
    </ParallaxProvider>
);
