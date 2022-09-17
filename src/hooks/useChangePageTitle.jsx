import { useEffect } from "react";

export default function useChangePageTitle(title) {
    useEffect(() => {
        if (title) {
            document.title = title
        }
    }, [title])
}