import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title= `${title} - ZooZest`;
    },[title])
}
export default useTitle;