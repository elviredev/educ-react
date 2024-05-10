import {useEffect, useRef} from "react";

/**
 * Hook qui vient modifier le title de la page
 * @param {string} title
 */
export function useDocumentTitle(title) {

    const titleRef = useRef(document.title)

    // réinitialiser le title quand le composant est démonté
    useEffect(() => {
        return () => {
            document.title = titleRef.current
        }
    }, []);

    // au changement de title : si définit on l'affiche sinon on affiche le title initial
    useEffect(() => {
        document.title = title ? title : titleRef.current
    }, [title]);

}