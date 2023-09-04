import React from "react";
import HowToJs from "../../assets/imgs/graph_how_to_JS.png";
import WebDev from "../../assets/imgs/graph_web_dev.png";
import WebProject from "../../assets/imgs/graph_web_project.png";
import Recommendations from "./recommendations/Recommendations";

const tabsInfo = [
  {
    id: 1,
    title: "JavaScript",
    content: {
      p1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque. \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque.',
      p2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nobis nemo corporis facilis magni dolorum exercitationem ullam laborum possimus, cupiditate vero quisquam, ducimus a. Consequatur dolore officia consequuntur impedit iusto!',
      p3: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorem alias aliquam? Assumenda dignissimos officiis error nam dolor ipsa placeat obcaecati, aut non labore quo quae ut? Asperiores, consectetur numquam.',
      p4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, saepe impedit quia itaque delectus, fuga tenetur maiores, et rerum nulla laudantium dolore similique! Perspiciatis fugiat voluptatum reprehenderit quaerat maxime praesentium?',
    },
    graphs: {
      g1: HowToJs,  
    }
  },
  {
    id: 2,
    title: "Web Development",
    content: {
      p1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque. \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque.',
      p2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nobis nemo corporis facilis magni dolorum exercitationem ullam laborum possimus, cupiditate vero quisquam, ducimus a. Consequatur dolore officia consequuntur impedit iusto!',
      p3: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorem alias aliquam? Assumenda dignissimos officiis error nam dolor ipsa placeat obcaecati, aut non labore quo quae ut? Asperiores, consectetur numquam.',
      p4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, saepe impedit quia itaque delectus, fuga tenetur maiores, et rerum nulla laudantium dolore similique! Perspiciatis fugiat voluptatum reprehenderit quaerat maxime praesentium?',
    },
    graphs: {
      g1: WebDev, 
    }
  },
  {
    id: 3,
    title: "Web Projects",
    content: {
      p1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque. \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque.',
      p2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nobis nemo corporis facilis magni dolorum exercitationem ullam laborum possimus, cupiditate vero quisquam, ducimus a. Consequatur dolore officia consequuntur impedit iusto!',
      p3: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorem alias aliquam? Assumenda dignissimos officiis error nam dolor ipsa placeat obcaecati, aut non labore quo quae ut? Asperiores, consectetur numquam.',
      p4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, saepe impedit quia itaque delectus, fuga tenetur maiores, et rerum nulla laudantium dolore similique! Perspiciatis fugiat voluptatum reprehenderit quaerat maxime praesentium?',
    },
    graphs: {
      g1: WebProject, 
    }
  },
];

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap mt-1">
        <div className="w-full">
          <div className="ul-container bg-slate-200">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row w-2/5 ml-10"
              role="tablist">
              {tabsInfo.map((tab) => (
                <li key={tab.id} className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === tab.id
                        ? "text-white bg-slate-600"
                        : "text-slate-600 bg-white")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(tab.id);
                    }}
                    data-toggle="tab"
                    href={`#link${tab.id}`}
                    role="tablist"
                  >
                    {tab.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto w-4/5 text-center">
              <div className="tab-content tab-space">
                {tabsInfo.map((tab) => (
                  <div className={`${openTab === tab.id ? "block" : "hidden"} p-2`} id={`link${1}`}>
                    <h1 className="font-bold text-2xl text-left pl-14">{ tab.title }</h1>
                    <p className="py-5">
                      {tab.content.p1}
                    </p>
                    <img className="py-5 m-auto" src={tab.graphs.g1} alt={`Graphic 1 of the topic ${tab.title}`} />
                    <p className="py-5">
                      {tab.content.p2}
                    </p>
                    <p className="py-5">
                      {tab.content.p3}
                    </p>
                    <p className="py-5">
                      {tab.content.p4}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Recommendations />
          </div>
        </div>
      </div>
    </>
  );
};

export default function ContentTabs() {
  return (
    <>
      <Tabs />;
    </>
  );
}