import React from 'react'
import loading from './loading.gif'

export default function Loading() {
    return (
        <div className="text-center loading-gif">
            <img className="loading-img" src={loading} alt="loading" />
        </div>
    )
}