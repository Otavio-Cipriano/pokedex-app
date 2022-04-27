import { useEffect, useRef } from "react";

// Hook Start
export default function useElementOnScreen(callBackFunction, options) { 

    const containerRef = useRef(null)  // const to store target element

    useEffect(()=>{
        let observerRefValue = null;  // variable to store the old ref value to unmounts

        const observer = new IntersectionObserver(callBackFunction, options) // creating the new intersectionObserver

        if(containerRef.current){  // condition to start observe target element, if target exist
            observer.observe(containerRef.current)
            observerRefValue = containerRef.current  // storing the current target
        }

        return () => { //unmounting observer 
            if(observerRefValue) observer.unobserve(observerRefValue)
        }

    }, [containerRef, options, callBackFunction]) // call function again if  target or options change


    return {containerRef} // returning ref and state
}
//Hook End