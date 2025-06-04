// import { useConnection, useWallet } from "@solana/wallet-adapter-react";
// import {
//   LAMPORTS_PER_SOL,
//   PublicKey,
//   SystemProgram,
//   Transaction,
// } from "@solana/web3.js";

// export function SendTokens() {
//   const wallet = useWallet();
//   const { connection } = useConnection();

//   async function sendTokens() {
//     let recipient = document.getElementById("recipient").value;
//     let amount = document.getElementById("amount").value;
//     const transaction = new Transaction();
//     transaction.add(
//       SystemProgram.transfer({
//         fromPubkey: wallet.publicKey,
//         toPubkey: new PublicKey(recipient),
//         lamports: amount * LAMPORTS_PER_SOL, // Convert SOL to lamports
//       })
//     );
//     await wallet.sendTransaction(transaction, connection);
//     alert("Sent" + amount + " SOL to " + recipient);
//   }

//   return (
//     <div>
//       <h2>Send Tokens</h2>
//       <input type="text" id="recipient" placeholder="Recipient Public Key" />
//       <br />
//       <input type="number" id="amount" placeholder="Amount in SOL" />
//       <br />
//       <button onClick={sendTokens}>Send</button>
//     </div>
//   );
// }
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";


export function SendTokens() {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }));

        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount + " SOL to " + to);
    }

    return <div>
        <input id="to" type="text" placeholder="To" />
        <input id="amount" type="text" placeholder="Amount" />
        <button onClick={sendTokens}>Send</button>
    </div>
}