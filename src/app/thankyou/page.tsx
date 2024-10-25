import React from 'react'

function page() {
    return (
        <div className="flex items-center justify-center h-screen p-10">
            <div>
                <div className="flex flex-col items-center space-y-2 text-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-black-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className="text-4xl font-bold">Thank You !</h1>
                    <p>Thank you for your message ! i will be back to you as soon as possible </p>


                </div>
            </div>
        </div>
    )
}

export default page