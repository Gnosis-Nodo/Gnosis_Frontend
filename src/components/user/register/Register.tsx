import LogoGoogle from '../../../assets/imgs/google-logo-png.png';
import LogoInstagram from '../../../assets/imgs/instagram-logo-png.png';
import LogoLinkedin from '../../../assets/imgs/linkedin-logo-png.png';
import './Register.scss';

export default function Register() {
  return (
    <>
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" action="#" method="POST">
          <div>
              <div className="flex items-center justify-between">
                <label htmlFor="name" className="block text-2x1 font-bold leading-6 text-gray-900">
                  Name
                </label>
              </div>
              <div className="my-1">
                <input
                  placeholder='Name'
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder: px-3 outline-none"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="last-name" className="block text-2x1 font-bold leading-6 text-gray-900">
                  Last name
                </label>
              </div>
              <div className="my-1">
                <input
                  placeholder='last-name'
                  id="last-name"
                  name="last-name"
                  type="last-name"
                  autoComplete="last-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder: px-3 outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-2x1 font-bold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-0.5">
                <input
                  placeholder='email@adress.com'
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder: px-3 outline-none"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-2x1 font-bold leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="my-1">
                <input
                  placeholder='password'
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder: px-3 outline-none"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-2x1 font-bold leading-6 text-gray-900">
                  Confirm password
                </label>
              </div>
              <div className="my-1">
                <input
                  placeholder='password'
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder: px-3 outline-none"
                />
              </div>
            </div>
            <div className='grid justify-items-center'>
              <button
                type="submit"
                className="flex justify-items-center w-medium rounded-md bg-[#000A61] px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-2 mt-4">
                Register
              </button>
            </div>
          </form>
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
            Sign in with your social media{' '} <br />
          </p>
          <div className='social-media'>
            <a href={'https://www.google.com/'} className="google-logo">
              <img src={ LogoGoogle } alt="google-logo" />
            </a>
            <a href={'https://www.instagram.com/'} className="instagram-logo">
              <img src={ LogoInstagram } alt="instagram-logo" />
            </a>
            <a href={'https://www.linkedin.com/'} className="linkedin-logo">
              <img src={ LogoLinkedin } alt="linkedin-logo" />
            </a>
          </div>
    </>
  )
}