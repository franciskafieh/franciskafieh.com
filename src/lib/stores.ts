import { writable } from "svelte/store";

const stored = JSON.parse(localStorage.getItem("prefersLight")!);
export const prefersLight = writable(Boolean(stored));
prefersLight.subscribe(value => {
    localStorage.setItem("prefersLight", value.toString());
    console.log(value)
});