import DuckPic from '../../assets/imgs/Duck.jpeg';
import { UserGroupIcon, UsersIcon } from '@heroicons/react/20/solid';
import ContentTabs from './ContentTabs';

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

export default function Content() {
  return (
    <>
      <div className="topic-container w-3/4 m-auto">
        <div className="topic flex">
          <img className='topic__icon w-12 h-12 mr-3' src={DuckPic} alt="Pic of a duck" />
          <div className="topic__info">
            <h2 className="topic__info__name">{topics[0].title}</h2>
            <div className="flex">
              <UserGroupIcon className="mt-1 mr-2 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <h4 className="topic__info__students">{`+ ${topics[0].students} Students`}</h4>
            </div>
          </div>
        </div>
      </div>
      <ContentTabs />
    </>
  )

}