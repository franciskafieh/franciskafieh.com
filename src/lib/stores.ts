import { writable } from "svelte/store";

const stored = Boolean(localStorage.getItem("prefersLight"));

export const prefersLight = writable(stored);

prefersLight.subscribe(value => {
    localStorage.setItem("prefersLight", value.toString());
    console.log('new value is ' + value);
});