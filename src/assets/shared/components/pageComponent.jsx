import {useContext} from 'react';
import { DadosContext } from '../context/ContextApp';

const PageComponent = () => {
    const {showComponentPage, setShowComponentPage, mode} = useContext(DadosContext)
    return (
        <div className={` absolute  w-screen h-full z-50 bg-dark flex justify-center items-center ${showComponentPage ? 'top-0 left-0 translate-x-0 translate-y-0': 'translate-x-[100vw] '} transition-transform`}>
            <span className='text-white'>    {mode}</span>
        </div>
    );
}

export default PageComponent;
