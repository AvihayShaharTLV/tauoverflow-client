import H1 from "../general-components/H1"
import { LoremIpsum } from 'react-lorem-ipsum';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const Intro = () => {
    const { loginWithRedirect } = useAuth0();
    const goNext = () => {
        loginWithRedirect()
    }
    const { user, isLoading } = useAuth0();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoading) {
            if (user)
                navigate('/homepage');
        }
    }, [isLoading])


    return (<div dir="rtl">
        <H1 text={"ברוכים הבאים לTauOverflow!"} />
        <div className="text-center p-5 w-1/2 m-auto">
            <LoremIpsum p={2} />
            <button
                onClick={goNext}
                className="m-1 mt-7 inline-flex select-none justify-center py-2 mx-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                כדי להשתמש באתר, עליך להתחובר!
            </button>
        </div>
    </div>
    )
}
export default Intro