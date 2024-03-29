import LogoGnosis from '../../../assets/svg/logo-gnosis.svg';
import LogoGoogle from '../../../assets/imgs/google-logo-png.png';
import LogoInstagram from '../../../assets/imgs/instagram-logo-png.png';
import LogoLinkedin from '../../../assets/imgs/linkedin-logo-png.png';
import { Link } from 'react-router-dom';
import './Login.scss';
import UserDB from '../userDB/UserDB';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (e: any) => {
    e.preventDefault();

    // Find the user in UserDB based on the entered email
    const user = UserDB.find((user) => user.email === email);
    localStorage.setItem("token", "user");
    if (!user) {
      setError('User not found');
      return;
    }

    if (user.password !== password) {
      setError('Incorrect password');
      return;
    }

    // Perform successful login action
    console.log('Login successful');
    setIsLogged(true);


    
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            className="mx-auto h-28 w-auto"
            src={LogoGnosis}
            alt="logo-gnosis"
          />
          <h2 className="mt-1 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Gnosis
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" action="#" method="get" onSubmit={handleLogin}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder: px-3 outline-none"
                />
              </div>
            </div>
            <label htmlFor="checkbox-reminder" className='text-sm pl-1'>
              <input id='checkbox' type="checkbox" /> Remind me
            </label>
            <div className='grid justify-items-center'>
              <button
                type="submit"
                className="flex justify-center w-medium rounded-md bg-[#000A61] px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-2 mt-4">
                <Link to="/welcome"> Sign in </Link>
              </button>
            </div>
          </form>
          {error && <p className='error bg-red-100 text-lg '>{error}</p>}
          <div className="text-sm text-center">
            <Link to='/register' className="text-xs font-medium text-[#000000] hover:text-indigo-500 underline">
              Forgot password?
            </Link>
          </div>
          <p className="mt-8 mx-auto text-center text-sm text-gray-500">
            Sign in with your social media{' '} <br />
          </p>
          <div className='social-media'>
            <a href={'https://www.google.com/'} className="google-logo">
              <img src={LogoGoogle} alt="google-logo" />
            </a>
            <a href={'https://www.instagram.com/'} className="instagram-logo">
              <img src={LogoInstagram} alt="instagram-logo" />
            </a>
            <a href={'https://www.linkedin.com/'} className="linkedin-logo">
              <img src={LogoLinkedin} alt="linkedin-logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}