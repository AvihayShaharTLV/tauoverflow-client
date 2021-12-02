import { useState, useEffect } from "react";

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if(isDarkMode){
            document.documentElement.classList.remove("dark")
        }
        else{
            document.documentElement.classList.add("dark")
        }
            
    }, [isDarkMode])

    return [isDarkMode, setIsDarkMode];
}
export default useDarkMode