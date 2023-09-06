import LogoGnosis from '../../../assets/imgs/logo-gnosis.svg';
import LogoGoogle from '../../../assets/imgs/google-logo-png.png';
import LogoInstagram from '../../../assets/imgs/instagram-logo-png.png';
import LogoLinkedin from '../../../assets/imgs/linkedin-logo-png.png';
import { Link } from 'react-router-dom';
import './Login.scss';

export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-28 w-auto"
            src={ LogoGnosis }
            alt="logo-gnosis"
          />
          <h2 className="mt-1 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Gnosis
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-2x1 font-bold leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-1">
                <input
                placeholder='email@adress.com'
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-2x1 font-bold leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  placeholder='password'
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <label htmlFor="checkbox-reminder">
              <input id='checkbox' type="checkbox" />Remind me
            </label>
            
            <div>
              <button
                type="submit"
                className="flex w-medium justify-right rounded-md bg-[#000A61] px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="text-sm">
            <Link to ='/src/components/user/register/Register.tsx' className="text-1 font-medium text-[#000000] hover:text-indigo-500">
              Forgot password?
            </Link>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
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
            
        </div>
      </div>
    </>
  )
}