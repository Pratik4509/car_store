import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const Navbar = () => {

    const [region, setRegion] = useState('')

    return (
        <header className="border-b border-slate-200">
            <div className="mx-48 p-3 flex justify-between ">
                <div className="flex flex-shrink-0 items-center">
                    <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                    />
                </div>
                <div className="flex items-center gap-4 text-base font-normal">
                    <div>
                        العربية
                    </div>
                    <div className="flex ">
                        <label htmlFor="cars">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </label>
                        <RegionDropdown
                            classes='w-32'
                            country='India'
                            value={region}
                            onChange={(val) => setRegion(val)} />
                    </div>
                    |
                    <button className="py-2 px-3">Log in</button>
                    <button className="py-2 px-3 bg-[#77bb00] text-white rounded">Sign up</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar