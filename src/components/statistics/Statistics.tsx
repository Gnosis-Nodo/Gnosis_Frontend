import Diagrama from '../../assets/imgs/diagrama.png'
import Avatar from '../../assets/imgs/pixton-avatar-cuerpo-entero 1.png'

const Statics = () => {
    return (
        <div>
            <div>
        
                <div className='flex justify-center gap-[50px]'>
                <div className='w-[554px] h-[554px]'>
                <h1 className='text-[38px] text-[#000A61]'>¡Hola! María Alejandra Rodríguez</h1>
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
        </div>
    )
}

export default Statics;