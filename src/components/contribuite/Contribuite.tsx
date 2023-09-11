import ContentTabsContribute from '../content/ContentTabsContribute';
import Card from './Card';
import Constributors from './Contributors';
import Message from './Message';

const Contribuite = () => {
        return(
        <>
        <div className='container flex flex-wrap gap-[50px] items-center content-start justify-center flex-row mt-[15px] ml-[200px]'>
        <Message/>
        </div>
        <div>
{/*             <button className="selector mr-4 ml-12 hover:bg-[#000A61] text-black hover:text-white">Empezar</button>
            <button className="selector hover:bg-[#000A61] text-black hover:text-white">Contribuidores</button> */}
            <ContentTabsContribute />
        </div>
            <div className='container  flex flex-wrap gap-[50px]  gap-y-0 items-center content-start justify-center flex-row  '>
                <Card/>
                <Constributors/>
            </div>
        </>
    )
}

export default Contribuite