import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/CounterApp';
import { CounterWithCustomHook } from './components/CounterWithCustomHook';
import { FormWithCustomHook } from './components/FormWithCustomHook';
import { SimpleForm } from './components/SimpleForm';
import { HookApp } from './HookApp';
import { CustomHooks } from './hooks/CustomHooks';
import { FocusScreen } from './components/FocusScreen';
import { RealExampleRef } from './components/RealExampleRef';
import { LayoutEffect } from './components/LayoutEffect';
import { Memorize } from './components/Memorize';
import { MemoHook } from './hooks/MemoHook';

ReactDOM.render(
    <MemoHook />,
  document.getElementById('root')
);

