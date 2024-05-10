import { useState } from "react";

/**
 * Permet de passer de la valeur true à false
 * @param {boolean} initial
 */
export function useToggle(initial = false) {
    const [state, setState] = useState(initial)
    const toggle = () => setState(v => !v)
    return [state, toggle]
}