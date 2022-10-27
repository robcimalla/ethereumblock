import React from 'react'
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Coin } from "../components";

const Navbar = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum%2Cbitcoin%2Crocket-pool%2Coptimism%2Crocket-pool-eth&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
            .then(res => {
                setCoins(res.data)
                console.log(res.data)
            }).catch(error => console.log("error"));
    }, []);

    const fetchCoins = coins;

    return (
        <div className="coin-wrapper flex flex-wrap items-center border-y border-black-400 xl:h-12">
            {fetchCoins.map(coin => {
                return <Coin key={coin.id} name={coin.name} price={coin.current_price} image={coin.image} price_change_24h={coin.price_change_percentage_24h} />
            })}
        </div>
    )
}

export default Navbar;
