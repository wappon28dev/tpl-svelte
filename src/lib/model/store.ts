import type Kitchen from "@smui/snackbar/kitchen";
import { writable } from "svelte/store";

export const isLoading = writable(true);
export const isLandscape = writable(false);

export const kitchen = writable<Kitchen>();
