import './Account.scss';
import AccountHeader from '../../../components/partials/accountHeader/AccountHeader';

export default function Account() {
  return (
    <>
        <AccountHeader></AccountHeader>
        <h2>Setting account</h2>
        <main>
            <section>
                <h3>Profile</h3>
                <div className='profile-container'>

                </div>
                <h3>Photo</h3>
                <div className='photo-container'>
                    <img src="" alt="user" />
                    <button>Upload</button>
                </div>
                <h3>Email</h3>
                <div className='email-container'>

                </div>
            </section>
            <section className='deleted-section'>
                <div className='deleted-container'>
                    <div className='reset-account'>
                        <h2>Reset account</h2>
                        <p></p>
                        <button>Reset</button>
                    </div>
                    <div className='delete-account'>
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