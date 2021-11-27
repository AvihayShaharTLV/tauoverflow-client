import { useState, useEffect } from "react";

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark");
    }, [isDarkMode])

    return [isDarkMode, setIsDarkMode];
}
export default useDarkMode