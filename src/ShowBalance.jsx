import React from 'react'
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
export function ShowBalance() {
    const {connection} = useConnection();
    const wallet = useWallet();
    async function getUserBalance() {
        const balance = await connection.getBalance(wallet.publicKey);
        document.getElementById("balance").innerHTML= balance / LAMPORTS_PER_SOL;
    }

    getUserBalance();
  return (
    <div>Show Balance - 
        <span id='balance'></span> SOL
    </div>
  )
}

