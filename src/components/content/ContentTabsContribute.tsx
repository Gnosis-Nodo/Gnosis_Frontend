import React from "react";

import Recommendations from "./recommendations/Recommendations";

const tabsInfoAudio = [
  {
    id: 1,
    title: "Get Started",
    content: {
      p1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque. \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque. \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque.',
      p2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque. \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nobis nemo corporis facilis magni dolorum exercitationem ullam laborum possimus, cupiditate vero quisquam, ducimus a. Consequatur dolore officia consequuntur impedit iusto!',
      p3: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque. \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque. \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorem alias aliquam? Assumenda dignissimos officiis error nam dolor ipsa placeat obcaecati, aut non labore quo quae ut? Asperiores, consectetur numquam.',
      p4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, saepe impedit quia itaque delectus, fuga tenetur maiores, et rerum nulla laudantium dolore similique! Perspiciatis fugiat voluptatum reprehenderit quaerat maxime praesentium?',
    },
  },
  {
    id: 2,
    title: "Contribute",
    content: {
      p1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque. \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque. \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque. \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque.',
      p2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque. \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nobis nemo corporis facilis magni dolorum exercitationem ullam laborum possimus, cupiditate vero quisquam, ducimus a. Consequatur dolore officia consequuntur impedit iusto!',
      p3: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorem alias aliquam? Assumenda dignissimos officiis error nam dolor ipsa placeat obcaecati, aut non labore quo quae ut? Asperiores, consectetur numquam.',
      p4: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque. \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, natus. Dolor quaerat eaque ipsum officiis est magnam, sed laborum nam voluptatibus! Repellendus commodi enim quia aspernatur, perferendis veritatis soluta atque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, saepe impedit quia itaque delectus, fuga tenetur maiores, et rerum nulla laudantium dolore similique! Perspiciatis fugiat voluptatum reprehenderit quaerat maxime praesentium?',
    },
  },
];
const TabsContribute = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap mt-1">
        <div className="w-full">
          <div className="ul-container bg-slate-200">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row w-2/5 ml-10"
              role="tablist">
              {tabsInfoAudio.map((tab) => (
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
        </div>
      </div>
    </>
  );
};

export default function ContentTabsContribute() {
  return (
    <>
      <TabsContribute />
    </>
  );
}