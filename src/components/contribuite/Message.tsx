import Image_15 from '../../assets/imgs/image 15.svg'

const Message = () => {
    return(
        <div className='flex w-[100%] h-[100%] ml-[10px]'>
            <div className='flex-col flex justify-center items-center'>
            <h1 className='flex w-[601px] h-[44px] flex-col justify-center flex-shrink-0 text-[var(--second-font, #000)] font-Barlow text-35 font-semibold mt-[15px]'>Together, we create the future of code.</h1>
            <p className='flex w-[617px] h-[107px] flex-col justify-center flex-shrink-0 text-[var(--second-font, #000)] font-Barlow text-26 font-normal font-medium leading-normal'>Be part of something big! Join our programming platform and share your ideas with a passionate community, no matter if you are a novice or an expert, this is a place where you can learn and have fun come on, the time is now.</p>
            </div>
            <div className='w-[240px] h-[206px] mt-[50px]'>
                <img src={Image_15} alt="" />
            </div>
        </div>
    )
}

export default Message