import './Account.scss';
import Avatar from '../../../assets/svg/avatar-bad-breaking-svg.svg';
import AccountHeader from '../../../components/partials/accountHeader/AccountHeader';
import UserDB from '../userDB/UserDB';

export default function Account() {
return (
    <>
        <AccountHeader></AccountHeader>
        <h2 className='account-heading'>Setting account</h2>
        <main className='mainAccount'>
            <section className='personal-info'>
                <h3 className='account-topics'>Profile</h3>
                <div className='profile-container'>
                <form className="grid grid-rows-2 grid-cols-2 items-end space-y-2 gap-x-6" action="#" method="POST">
                    <div>
                        <div>
                            <label htmlFor="name" className="leading-6 text-gray-900">
                            Name
                            </label>
                        </div>
                        <div>
                            <input
                            placeholder={UserDB[0].name}
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder: px-3 outline-none"
                            />
                        </div>
                    </div>
                        <div>
                            <div>
                                <label htmlFor="last-name" className="block text-2x1 leading-6 text-gray-900">
                                Last name
                                </label>
                            </div>
                            <div>
                                <input
                                placeholder={UserDB[0].lastName}
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="last-name"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder: px-3 outline-none"
                                />
                            </div>
                        </div>
                        <div className="col-span-2">
                        <div>
                            <label htmlFor="name" className="block text-2x1 leading-6 text-gray-900">
                            Bio
                            </label>
                        </div>
                        <div>
                            <textarea
                            placeholder={UserDB[0].bio}
                            id="bio"
                            name="bio"
                            /* type="text" */
                            autoComplete="bio"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder: px-3 outline-none"
                            />
                        </div>
                    </div>
                </form>
                </div>
                <h3 className='account-topics'>Photo</h3>
                <div className='photo-container'>
                    <img src={ Avatar } alt="user" />
                    <button id='upload'>Upload</button>
                </div>
                <h3 className='account-topics'>Email</h3>
                <div className='email-container'>
                    <div>
                        <div>
                        <form className="grid grid-rows-2 grid-cols-2 items-end space-y-2 gap-x-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-2x1 leading-6 text-gray-900">
                                Email
                                </label>
                                <div className="mt-0.5">
                                    <input
                                    placeholder={UserDB[0].email}
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
                                <label htmlFor="password" className="block text-2x1 leading-6 text-gray-900">
                                Password
                                </label>
                                <div className="my-0.5">
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
                                <label htmlFor="password" className="block text-2x1 leading-6 text-gray-900">
                                New password
                                </label>
                                <div className="my-0.5">
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
                            <div className='flex justify-items-end'>
                                <button
                                    type="submit"
                                    className="flex justify-items-center w-medium rounded-md bg-[#000A61] px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-2 mt-4">
                                    Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </section>
            <section className='actions-user'>
                <div className="flex justify-center gap-x-4">
                    <div className="w-full justify-center border-solid border-2 border-[#C10F0F] bg-[#fca5a5] rounded-3xl px-10 py-10">
                        <h2 className='actions'>Reset account</h2>
                        <p className='description'>This option enables you restart all your profile configuration and start over new with Gnosis</p>
                        <button className='button-actions'>Reset</button>
                    </div>
                    <div className="w-full justify-center border-solid border-2 border-[#C10F0F] bg-[#fca5a5] rounded-3xl px-10 py-10">
                        <h2 className='actions'>Delete account</h2>
                        <p className='description'>Once you tap this button, you couldn't do anything, you're going to delete your current account. Are you sure?</p>
                        <button className='button-actions'>Delete</button>
                    </div>
                </div>
            </section>
        </main>
    </>
    )
}