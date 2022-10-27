import React from 'react'

const Coin = ({ image, name, price, price_change_24h }) => {

    const isPrinceChanged = (price_change_24h) => {
        if (price_change_24h.toString().includes('-'))
            return false;
    }

    return (
        <div className="coin hover:bg-gray-200 hover:rounded border-full flex lg:flex-wrap items-center border-black-400 space-x-1 h-8 m-2">
            <img className="max-w-full h-auto rounded-full" height="15"
                width="15px" alt="crypto" src={image}></img>
            <span>{name}</span>
            <div style={{ background: isPrinceChanged === 'true' ? '#E8F6F3' : '#FFE5E5' }} className="rounded-lg price-wrapper space-x-2 m-1 ">
                <span className="coin-price">${price}</span>
                <span className="coin-price-change">{price_change_24h.toString().substring(0, 3)}%</span>
            </div>
        </div>
    )
}

export default Coin