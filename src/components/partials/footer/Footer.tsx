
export default function Footer() {
  return (
    <>
      <footer className="grotesk bg-[#00073E]">
      <h2 className="mt-16 text-7xl font-bold tracking-tight text-white ml-5 pt-5">Gnosis</h2>
        <div className="max-w-8xl mx-auto px-5 py-24 text-white pt-14 mb-1">
          <div className="order-first flex flex-wrap text-center">
            <div className="w-full px-4 md:w-2/4 lg:w-1/4">
              <h2 className="mb-3 text-lg tracking-widest font-bold ">Resources</h2>
              <nav className="list-none space-y-2 py-3">
                <li>
                  <a href="/">Applications</a>
                </li>
                <li>
                  <a href="/">Documentation</a>
                </li>
                <li>
                  <a href="/">System</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-2/4 lg:w-1/4">
              <h2 className="mb-3 text-lg tracking-widest font-bold ">Pricing</h2>
              <nav className="mb-10 list-none space-y-2 py-3">
                <li>
                  <a href="/pricing">Overview</a>
                </li>
                <li>
                  <a href="/pricing">Premium Plans</a>
                </li>
                <li>
                  <a href="/pricing">Promotions</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-2/4 lg:w-1/4">
              <h2 className="mb-3 text-lg tracking-widest font-bold ">Team</h2>
              <nav className="mb-10 list-none space-y-2 py-3">
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/">Partnerships</a>
                </li>
                <li>
                  <a href="/about">Careers</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-2/4 lg:w-1/4">
              <h2 className="mb-3 text-lg tracking-widest font-bold ">Social</h2>
              <nav className="mb-10 list-none space-y-2 py-3">
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <a href="/">Github</a>
                </li>
                <li>
                  <a href="/">LinkedIn</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
          
            <div className="absolute right-0 -mt-24 hidden text-white lg:inline-block ">
              <a href="/" className="mr-16">
                Terms & Conditions
              </a>
              <a href="/" className="mr-16">
                Privacy Policy
              </a>
              <a href="/" className="mr-16">
                Cookie Policy
              </a>
            </div>
            <div className="right-0 inline-block pt-12 pb-6 pr-20 text-sm text-white md:hidden">
              <a href="/" className="mr-16">
                Terms & Conditions
              </a>
              <a href="/" className="mr-16">
                Privacy Policy
              </a>
              <a href="/" className="mr-16">
                Cookie Policy
              </a>
            </div>
      </footer>
    </>
  );
}