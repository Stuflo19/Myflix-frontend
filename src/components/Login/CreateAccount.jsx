// Followed login guide from https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
import React, {useState} from 'react';
import PropTypes from 'prop-types';


async function createUser(credentials) {
    return fetch('/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

const toLogin = (event) => {
    sessionStorage.removeItem('token');
    window.location.reload()
}; 

export default function CreateAccount({ setToken }) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        if(password === confirmedPassword)
        {
            const result = await createUser({
              username,
              password
            });
            
            console.log("Result: " + result.result)

            if(result.result) {
                setToken("accountCreated")
            } else {
                // Creation of account failed
                setToken("error")
            }
        } else {
            // error
        }     
      }

    return (
        <div>
            <div className="grid h-screen w-screen place-items-center grid-cols-1">
            <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h1 className="text-3xl text-center mb-8 font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">My</span><span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-orange-600">Flix</span></h1>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input onChange={e => setUserName(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm your password</label>
                        <input onChange={e => setConfirmedPassword(e.target.value)} type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Account</button>
                    <button onClick={toLogin} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back to login</button>
                </form>
            </div>
            </div>
        </div>
    )
}

CreateAccount.propTypes = {
    setToken: PropTypes.func.isRequired
  }