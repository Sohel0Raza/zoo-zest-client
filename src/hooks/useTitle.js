import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title= `${title} - Kiddie Craft`;
    },[title])
}
export default useTitle;