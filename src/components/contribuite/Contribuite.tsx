import Card from './Card';
import Message from './Message';

const Contribuite = () => {
        return(
        <>
        <div className='container w-[800px] h-[250px] flex flex-wrap gap-[50px] items-center content-start justify-center flex-row mt-[15px] ml-[200px]'>
        <Message/>
        </div>
        <div className="header-container topic flex w-100% h-auto mt-5 bg-[#D9D9D9] ">
            <p className="selector mr-4 ml-12 hover:bg-[#000A61] text-black hover:text-white">Empezar</p>
            <p className="selector hover:bg-[#000A61] text-black hover:text-white">Contribuidores</p>
        </div>
            <div className='container w-[1512px] h-[1634px] flex flex-wrap gap-[50px]  gap-y-0 items-center content-start justify-center flex-row mt-[15px] '>
                <Card/>
            </div>
        </>
    )
}

export default Contribuite