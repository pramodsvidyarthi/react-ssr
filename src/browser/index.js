import React from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/App';

hydrate(<App initialData={window.__INITIAL_DATA__} />, document.getElementById('root'));