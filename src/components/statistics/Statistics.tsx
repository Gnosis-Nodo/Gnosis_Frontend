import Diagrama from '../../assets/imgs/diagrama.png'
import LogoScript from '../../assets/imgs/logo-javaScript.png'
import LogoPhyton from '../../assets/imgs/logo-phyton.png'
import Avatar from '../../assets/imgs/pixton-avatar-cuerpo-entero 1.png'

const Statics = () => {
    return (
        <div>
            <div>
        
                <div className='flex justify-center gap-[50px]'>
                <div className='w-[554px] h-[554px]'>
                <h1 className='text-[38px] text-[#000A61]'>¡Hola! Claudia Restrepo</h1>
                <img className='w-[100%] h-[100%]' src={Diagrama} alt="" />
                </div>

                <div className='w-[314px] h-[593px] mt-[50px]'>
                <img className='w-[100%] h-[100%]'src={Avatar} alt="" />
                </div>
                </div>
            </div>

            <h1 className='text-[38px] text-[#000A61] ml-[50px]'>Metas Alcanzadas</h1>

            <div className='flex justify-center'>
                <div className='bg-[Blue] w-[429px] h-[39px] text-center text-[white]'>
                    <p className='mt-[5px]'>30%</p>
                </div>
                <div className='bg-[Red] w-[429px] h-[39px] text-center text-[white]'>
                    <p className='mt-[5px]'>30%</p>
                </div>
                <div className='bg-[Blue] w-[655px] h-[39px] text-center text-[white]'>
                    <p className='mt-[5px]'>40%</p>
                </div>
            </div>
                <div className='flex'>
                    <div className='w-[429px] h-[49px] text-center'>
                    <h2 className='text-[#000A61] text-[25px]'>+30min en linea</h2>
                    </div>
                    <div className='w-[429px] h-[49px]'>
                    <h2 className='text-[#000A61] text-[25px]'>5 lecturas guardas</h2>
                    </div>
                    <div className='text-center'>
                    <h2 className='text-[#000A61] text-[25px]'>Participación foro</h2>
                    </div>
                </div>
                <div className=' w-[1200px] h-[464px] flex-shrink-0  rounded-[71px] ml-[30px] bg-gray-300 bg-opacity-50 mt-[20px]'>
                    <div className='flex items-center gap-[10px] ml-[40px] '>
                        <img className='w-[80px] h-[80px] flex-shrink-0' src={LogoScript} alt="?" />
                        <h3 className='text-main-font text-[30px]'>JavaScript</h3>
                         <div className='w-[880px] h-[14px] bg-[#D9D9D9] rounded-[7px]' >
                            <div className='w-[97px] h-[14px] bg-[Blue] rounded-[7px]'>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-[10px] ml-[40px]'>
                        <img className='w-[50px] h-[50px] flex-shrink-0 ml-[15px]' src={LogoPhyton} alt="?" />
                        <h3 className='text-main-font text-[35px]'>Python</h3>
                        <div className='w-[930px] h-[14px] bg-[#D9D9D9] rounded-[7px]' >
                            <div className='w-[97px] h-[14px] bg-[Blue] rounded-[7px]'>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default Statics;