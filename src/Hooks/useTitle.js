import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Wild Live`;
    }, [title])
};

export default useTitle;