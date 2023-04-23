import {useEffect} from "react"
const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Tripmates`;
    },[title])
}

export default useTitle;