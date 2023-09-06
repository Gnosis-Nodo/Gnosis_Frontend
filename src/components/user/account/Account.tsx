import './Account.scss';
import AccountHeader from '../../../components/partials/accountHeader/AccountHeader';

export default function Account() {
  return (
    <>
        <AccountHeader></AccountHeader>
        <h2 className='account-heading'>Setting account</h2>
        <main>
            <section className='personal-info'>
                <h3>Profile</h3>
                <div className='profile-container'>
                <form className="flex items-center space-y-4 space-x-4" action="#" method="POST">
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
                </form>
                </div>
                <h3>Photo</h3>
                <div className='photo-container'>
                    <img src="" alt="user" />
                    <button>Upload <img src="" alt="" /></button>
                </div>
                <h3>Email</h3>
                <div className='email-container'>

                </div>
            </section>
            <section className="flex justify-center items-center space-y-4 space-x-4">
                <div className="flex space-x-4 items-center">
                    <div className="grid items-center">
                        <h2>Reset account</h2>
                        <p>This option enables you restart all your profile configuration and start over new with Gnosis</p>
                        <button>Reset</button>
                    </div>
                    <div className="grid items-center">
                        <h2>Delete account</h2>
                        <p></p>
                        <button>Delete</button>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}