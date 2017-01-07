import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import '../sass/styles.scss';
import '../assets/favicon.ico';

import Layout from './components/Layout';

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);