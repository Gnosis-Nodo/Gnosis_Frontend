import Img_contribuite from '../../assets/imgs/Img-support.svg';

const Card = () => {
  const text = {
    descrirption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, aliquid. Provident ut, id dolorum.",
  };
  return (
    <>
    <div className="flex card w-[500px] h-[126px] bg-[#D9D9D980] rounded-[27px] bg-opacity-50 shadow-md flex-shrink-0 mt-[67px]">
        <div className='flex items-center content-start justify-center'>
       <img className="w-60 h-60" src={Img_contribuite} alt="?"/>
        </div>
        <div className='p-[12px] grap-[2px]'>
        <h1 className="text-[var(--second-font, #000)] font-Barlow text-2xl font-normal font-semibold leading-[]">Create a new exercise or concept</h1>
        <p className="text-xs pr-8 pt-1">{text.descrirption}</p> 
        </div>
    </div>
    <div className="flex card w-[500px] h-[126px] bg-[#D9D9D980] rounded-[27px] bg-opacity-50 shadow-md flex-shrink-0 mt-[67px]">
        <div className='flex items-center content-start justify-center'>
       <img className="w-60 h-60" src={Img_contribuite} alt="?"/>
        </div>
        <div className='p-[12px] grap-[2px]'>
        <h1 className="text-[var(--second-font, #000)] font-Barlow text-2xl font-normal font-semibold leading-[]">Online tutor</h1>
        <p className="text-xs pr-8 pt-1">{text.descrirption}</p> 
        </div>
    </div>
    <div className="flex card w-[500px] h-[126px] bg-[#D9D9D980] rounded-[27px] bg-opacity-50 shadow-md flex-shrink-0 mt-[67px]">
        <div className='flex items-center content-start justify-center'>
       <img className="w-60 h-60" src={Img_contribuite} alt="?"/>
        </div>
        <div className='p-[12px] grap-[2px]'>
        <h1 className="text-[var(--second-font, #000)] font-Barlow text-2xl font-normal font-semibold leading-[]">Proofreader</h1>
        <p className="text-xs pr-8 pt-1">{text.descrirption}</p> 
        </div>
    </div>
    <div className="flex card w-[500px] h-[126px] bg-[#D9D9D980] rounded-[27px] bg-opacity-50 shadow-md flex-shrink-0 mt-[67px]">
        <div className='flex items-center content-start justify-center'>
       <img className="w-60 h-60" src={Img_contribuite} alt="?"/>
        </div>
        <div className='p-[12px] grap-[2px]'>
        <h1 className="text-[var(--second-font, #000)] font-Barlow text-2xl font-normal font-semibold leading-[]">Create a tester</h1>
        <p className="text-xs pr-8 pt-1">{text.descrirption}</p> 
        </div>
    </div>
    <div className="flex card w-[500px] h-[126px] bg-[#D9D9D980] rounded-[27px] bg-opacity-50 shadow-md flex-shrink-0 mt-[67px]">
        <div className='flex items-center content-start justify-center'>
       <img className="w-60 h-60" src={Img_contribuite} alt="?"/>
        </div>
        <div className='p-[12px] grap-[2px]'>
        <h1 className="text-[var(--second-font, #000)] font-Barlow text-2xl font-normal font-semibold leading-[]">Create a work guide</h1>
        <p className="text-xs pr-8 pt-1">{text.descrirption}</p> 
        </div>
    </div>
    <div className="flex card w-[500px] h-[126px] bg-[#D9D9D980] rounded-[27px] bg-opacity-50 shadow-md flex-shrink-0 mt-[67px]">
        <div className='flex items-center content-start justify-center'>
       <img className="w-60 h-60" src={Img_contribuite} alt="?"/>
        </div>
        <div className='p-[12px] grap-[2px]'>
        <h1 className="text-[var(--second-font, #000)] font-Barlow text-2xl font-normal font-semibold leading-[]">Suggestions</h1>
        <p className="text-xs pr-8 pt-1">{text.descrirption}</p> 
        </div>
    </div>
    </>
    
  );
};

export default Card;
