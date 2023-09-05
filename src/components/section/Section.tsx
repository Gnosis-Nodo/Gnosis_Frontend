import './Section.scss';

export default function Section() {
  return (
    <>
    <header className='products'>
      <div className='coding'>
        <img src="" alt="coding-logo" />
        <p>Coding</p>
      </div>
      <div className='audio'>
        <img src="" alt="audio-logo" />
        <p>Audio</p>
      </div>
      <div className='reading'>
        <img src="" alt="reading-logo" />
        <p>Reading</p>
      </div>
            <div className='video'>
            <img src="" alt="video-logo" />
              <p>Video</p>
            </div>
            <p>Discover different ways to learn </p>
        </header>
    <main className='front'>
        
        <nav>
            <div>
                <input type="text" />
                <img src="" alt="search-icon" />
            </div>
            <select name="topics" id="topics">
              <option value="0">Selection</option>
              <option value="1">Coding</option>
              <option value="2">Audio</option>
              <option value="3">Reading</option>
              <option value="4">Video</option>
            </select>
        </nav>
        <section>
          <div className='card-container'>
            <div className='card'>
              <img src="" alt="card-logo" />
              <p>Title</p>
            </div>
            <div className='progress'>
              <span className='portion'>4/100</span>
              <span className='amount-concepts'>28 concepts</span>
            </div>
            <div className='progress-bar'>
              <progress id='bar' value="4" max="100">4 %</progress>
              <p className='last-seen'>Last seen 2 days ago</p>
            </div>
          </div>
        </section>
    </main>
    </>
  )
}