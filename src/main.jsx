import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './01-useState/SimpleForm'
// import { SimpleFormWithCustomHook } from './01-useState/SimpleFormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffectt/Layout';
import { MemoHook } from './06-memos/MemoHook';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemoHook />
  </StrictMode>
);
