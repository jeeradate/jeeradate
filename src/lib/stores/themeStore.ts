import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultTheme = 'skeleton';

const initialValue = browser ? window.localStorage.getItem('theme') ?? defaultTheme : defaultTheme;

const theme = writable<string>(initialValue);

theme.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('theme', value);
  }
});

export default theme;