import { ArrowPathIcon, Bars3BottomLeftIcon, GlobeAltIcon } from '@heroicons/react/20/solid';
import PlaygroundPrev from '../../assets/imgs/Playground_Preview.png';
import CallToAction from './CallToAction';

export default function Landing() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Improve your learning path</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gnosis: Your Personalized Learning Companion</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Are you eager to enhance your skills and knowledge in your area of interest? Look no further! Gnosis is here to guide you on your journey of continuous learning. 
                Whether you're passionate about technology, art, science, or any other field, our web companion is designed to curate and recommend the best books, podcasts, academic papers, magazines, and more tailored to your specific interests. Say goodbye to endless searching and hello to a personalized learning experience that empowers you to grow and excel.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={PlaygroundPrev} alt="Playground preview"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <Bars3BottomLeftIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Variety of topics.</strong> Lorem Explore an extensive array of topics and fields of interest with Gnosis. Whether you're into tech, arts, science, or niche specialties, our platform caters to your curiosity. Our vast database ensures you'll always find something that resonates with your passions and goals.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Updated content.</strong> Anim aute Stay on the cutting edge of knowledge with Gnosis's constantly refreshed content. We keep our recommendations up to date, so you never miss out on the latest insights, trends, and breakthroughs. Your learning journey remains relevant and exciting, no matter how fast your field evolves.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <GlobeAltIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Online resources.</strong> Ac Access a treasure trove of online resources handpicked just for you. From in-depth research papers to engaging podcasts and informative magazines, Gnosis connects you with valuable online content that enriches your understanding and empowers your growth. Learning has never been this accessible or convenient.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Unlock Your Full Potential.</h2>
              <p className="mt-6">
                At Gnosis, we believe that learning is a lifelong adventure, and we're here to make that adventure exciting, accessible, and meaningful for you. 
                By simply entering your field of interest in our search box or creating a personalized profile, you'll gain access to a treasure trove of carefully curated content from experts and thought leaders. 
                Whether you're a novice looking to get started or a seasoned professional aiming to stay at the forefront of your industry, Gnosis is your trusted companion on the path to continuous improvement. Start your journey today and let us help you discover the resources that will propel your skills to new heights.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CallToAction></CallToAction>
    </div>
  )
}