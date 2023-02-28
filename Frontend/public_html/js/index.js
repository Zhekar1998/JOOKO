import { WalletConnection } from 'near-api-js';
// // import 'regenerator-runtime/runtime';
import { Wallet } from './near-wallet';
import { utils }  from 'near-api-js';
import { Account } from 'near-api-js';
import * as nearAPI from "near-api-js";





  const CONTRACT_ADDRESS = process.env.CONTRACT_NAME;
  const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });
  //===================================================================


  // Setup on page load
  window.onload = async () => {
    let isSignedIn = await wallet.startUp();

    if (isSignedIn) {
      signedInFlow();
    } else {
      signedOutFlow();
    } 
 };
 
  async function signedInFlow(){
    document.getElementById("signed_in_flow").style.display = "block";
    document.getElementById("signed_out_flow").style.display = "none";
    console.log("signedInFlow");
    
     const { network } = wallet.walletSelector.options;
  const connectionConfig = {
    networkId: network.networkId,
    keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: network.nodeUrl,
    headers: {}
  };
  
  
 const nearConnection = await nearAPI.connect(connectionConfig); 
  const account = await nearConnection.account(wallet.accountId);
  console.log(account.getAccountBalance());
}


function signedOutFlow(){
    document.getElementById("signed-in-flow").style.display = "none";
    document.getElementById("signed-out-flow").style.display = "block";
    console.log("signedOutFlow");
}
 
// Button clicks
  document.getElementById('sign_in_button').onclick = () => { wallet.signIn(); };
  document.getElementById('sign_out_button').onclick = () => { wallet.signOut(); };