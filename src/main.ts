import { mount } from 'svelte';
import './lib/app.css';
import './lib/tokens.css';
import App from './App.svelte';

const target = document.getElementById('app');

if (target) {
  mount(App, { target });
}