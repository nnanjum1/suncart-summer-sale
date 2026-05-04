"use client"
import React from 'react'

const Search = ({ search, setSearch }) => {
    return (
        <div className="w-full flex justify-center mb-6">
            <input
                type="text"
                placeholder="Search products..."
                className="input input-bordered w-full max-w-md"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default Search
