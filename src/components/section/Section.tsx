import Coding from '../../assets/svg/coding-data-development-svg-com.svg';
import Audio from '../../assets/svg/audio-guide-svg.svg';
import Reading from '../../assets/svg/reading-logo-svg.svg';
import Video from '../../assets/svg/video-library-svg.svg';
import Python from '../../assets/svg/python-logo-only.svg';
import Locked from '../../assets/svg/lock-logo.svg';
import JS from '../../assets/svg/javascript-logo.svg';
import Java from '../../assets/svg/java-logo.svg';
import HTML from '../../assets/svg/html-5-logo.svg';
import './Section.scss';

export default function Section() {
  return (
    <>
      <header className='products'>
        <div className='products-info'>
          <div className='coding'>
            <img src={ Coding } alt="coding-logo" />
            <h3>Coding</h3>
          </div>
          <div className='audio'>
            <img src={ Audio } alt="audio-logo" />
            <h3>Audio</h3>
          </div>
          <div className='reading'>
            <img src={ Reading } alt="reading-logo" />
            <h3>Reading</h3>
          </div>
          <div className='video'>
            <img src={ Video } alt="video-logo" />
            <h3>Video</h3>
          </div>
        </div>
        <p>Discover 4 different ways to learn, easy and, fun. We have more than courses and concepts to study </p>
      </header>
      <nav className='searching-section'>
        <div className='searching-navbar'>
          <input placeholder='Search...'
            id="search"
            name="search"
            type="text"
            autoComplete="last-name"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4 placeholder: px-3 outline-none"/>
        </div>
        <select name="topics" id="topics">
          <option value="0">Selection</option>
          <option value="1">Coding</option>
          <option value="2">Audio</option>
          <option value="3">Reading</option>
          <option value="4">Video</option>  
        </select>
      </nav>
      <main>
        <div className='card-display'>
          <div className='card-container'>
            <div className='card-heading'>
              <img src= { JS } alt="js-logo" />
              <h2>JavaScript</h2>
            </div>
            <div className='progress'>
              <span className='portion'>30/100 Exercises</span>
              <span className='amount-concepts'>28 concepts</span>
            </div>
            <div className='progress-bar'>
              <progress id='bar' value="30" max="100">30%</progress>
              <p className='last-seen'>Last seen 2 days ago</p>
            </div>
          </div>
          <div className='card-container'>
            <div className='card-heading'>
              <img src={ Python } alt="python-logo" />
              <h2>Python</h2>
            </div>
            <div className='progress'>
              <span className='portion'>4/100 Exercises</span>
              <span className='amount-concepts'>32 concepts</span>
            </div>
            <div className='progress-bar'>
              <progress id='bar' value="4" max="100">4 %</progress>
              <p className='last-seen'>Last seen 1 hour ago</p>
            </div>
          </div>
          <div className='card-container'>
            <div className='card-heading'>
              <img src={ Java } alt="java-logo" />
              <h2>Java</h2>
            </div>
            <div className='progress'>
              <span className='portion'>16/130 Exercises</span>
              <span className='amount-concepts'>50 concepts</span>
            </div>
            <div className='progress-bar'>
              <progress id='bar' value="12" max="100">12%</progress>
              <p className='last-seen'>Last seen 2 days ago</p>
            </div>
          </div>
          <div className='card-container'>
            <div className='card-heading'>
              <img src={ HTML } alt="html-logo" />
              <h2>HTML 5</h2>
            </div>
            <div className='progress'>
              <span className='portion'>16/20 Exercises</span>
              <span className='amount-concepts'>12 concepts</span>
            </div>
            <div className='progress-bar'>
              <progress id='bar' value="80" max="100">80%</progress>
              <p className='last-seen'>Last seen 2 days ago</p>
            </div>
          </div>
          <div className='card-container'>
            <div className='card-heading'>
              <img src={ Locked } alt="lock-logo" />
              <h2>Spring</h2>
            </div>
            <div className='progress'>
              <span className='portion'>0/30 Exercises</span>
              <span className='amount-concepts'>18 concepts</span>
            </div>
            <div className='progress-bar'>
              <progress id='bar' value="0" max="100">0%</progress>
              <p className='last-seen'>Locked</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}