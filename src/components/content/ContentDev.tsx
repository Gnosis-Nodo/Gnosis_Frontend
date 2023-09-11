import DuckPic from '../../assets/imgs/Duck.jpeg';
import { UserGroupIcon, UsersIcon } from '@heroicons/react/20/solid';
import ContentTabsDev from './ContentTabsDev';
import { Link } from 'react-router-dom';

const topics = [
  {
    title: 'JavaScript',
    students: 80,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, facere quo et in velit magni veniam alias molestiae dicta laudantium maxime! Quae, nisi. Sequi eveniet, quos magnam molestiae enim cum.',
  },
  {
    title: 'Java',
    students: 50,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, facere quo et in velit magni veniam alias molestiae dicta laudantium maxime! Quae, nisi. Sequi eveniet, quos magnam molestiae enim cum.',
  },
];


export default function ContentDev() {
  return (
    <>
      <div className="topic-container w-3/4 m-auto">
        <div className="topic flex items-center my-10">
          <img className='topic__icon w-20 h-20 mr-3' src={DuckPic} alt="Pic of a duck" />
          <div className="topic__info">
            <h1 className="topic__info__name text-5xl font-bold">{topics[0].title}</h1>
            <div className="flex">
              <UserGroupIcon className="mt-1 mr-2 h-5 w-5 flex-none text-[#000]-600" aria-hidden="true" />
              <h4 className="topic__info__students">{`+ ${topics[0].students} Students`}</h4>
            </div>
          </div>
        </div>
      </div>
      <ContentTabsDev />
      <div className="playground__link__container w-2/5 m-auto text-center h-2/5 mt-5">
        <Link to="/playground" className='text-xl font-bold bg-[rgb(247,221,58)] shadow-lg p-5'>VAMOS A PRACTICAR</Link>  
      </div>
    </>
  )

}