import twitterLogo from './assets/twitter-logo.svg';
import './App.css';
import {notification} from "antd";
import { useEffect, useState } from  'react';
import idl from "./idl.json"
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, Provider, web3 } from '@project-serum/anchor';

// WEB 3
const {SystemProgram, Keypair}  = web3;
let baseAccount = Keypair.generate();
const programID =  new PublicKey(idl.metadata.address);
const network = clusterApiUrl('devnet');
const opts = {
  preflightCommitment: "processed" //can be procedded | finalized
}

// WEB 3 Functions



// Constants
const TWITTER_HANDLE = 'HenshawSamuel';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;


const TEST_GIFS = [
	"https://media1.giphy.com/media/ADSJHOoIvyjKM/giphy.gif?cid=ecf05e47zmmdelzaax8jgupg3qnpx1lblqe059k5ehvn02ew&rid=giphy.gif&ct=g",
	"https://media0.giphy.com/media/OkhbcKxPDCKli/giphy.gif?cid=ecf05e47v2g43r8tfdfv700uqvesofvu3yhpyrxsa9cg7fcf&rid=giphy.gif&ct=g",
	"https://media2.giphy.com/media/wzWxTUiXRQDYc/giphy.gif?cid=ecf05e47d2xyp96y32if8ymylbiqk1z1gk1inxs9qecxpqap&rid=giphy.gif&ct=g",
	"https://media2.giphy.com/media/2y98KScHKeaQM/giphy.gif?cid=ecf05e47no3h1m39189fjq1mcgl3kssssg5o1trhxlephn66&rid=giphy.gif&ct=g"
]


const App = () => {

  // REACT STATE
  const [wallet, setWallet] = useState({isWallet: false, address: null})
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [gifList, setGifList] = useState([]);

  const getProvider = () => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new Provider(connection, window.solana, opts.preflightCommitment);
    return provider
  }
  
  const getGifList =  async () => {
    try {
      const provider = getProvider();
      const program = new Program(idl, programID, provider)
      const account = await program.account.baseAccount.fetch(baseAccount.publicKey);

      console.log("Got the account", account)
      setGifList(account.gifList)
    } catch (error) {
      console.log("Error in getGifList: ", error)
      setGifList(null);
    }
  }

  
  const createGifAccount = async () => {
    try {
      const provider = getProvider();
      const program = new Program(idl, programID, provider);
     
      await program.rpc.initialize({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount]
      });
      console.log("Created a new BaseAccount w/ address:", baseAccount.publicKey.toString())
      await getGifList();
  
    } catch(error) {
      console.log("Error creating BaseAccount account:", error)
    }
  }

  const checkIfWalletIsisWallet = async () => {
      try {
        const {solana} = window;

        if(!solana) {
          setWallet({...wallet, isWallet: false})
          return notification.error({message: "", description: "Solana object not found! Get a Phantom Wallet 👻"})
        }

        if(solana.isPhantom){
          
          const {publicKey} = await solana.connect({onlyIfTrusted: true});
          setWallet({isWallet: true, address: publicKey.toString()})
          console.log("Connected to Phantom Wallet")
          console.log("publicKey: ", publicKey.toString())
        }
      } catch (error) {
          console.log(error)
          setWallet({...wallet, isWallet: false})
          notification.error({message: "", description: "App could not connect to wallet"});
      }
  }


  const connectWallet = async () => {
    const { solana } = window;

    try {
      setLoading(true)
      if (solana) {
        const {publicKey} = await solana.connect();
        console.log('isWallet with Public Key:', publicKey.toString());
        setWallet({address: publicKey.toString(), isWallet: true});
        console.log("publicKey: ", publicKey.toString())
      }
    } catch (error) {
        notification.error({message: "", description: "could not connect to wallet"})
    }finally {
      setLoading(false)
    }
  };

  const sendGif = (event) => {
    event.preventDefault()
    if(inputValue.length > 0){
      setGifList([...gifList, inputValue])
      setInputValue("")
      return console.log("Gif link:", inputValue)
    }

    console.log("Empty Input detected")
  }



  const onChangeInput = (event) => {
    setInputValue(event.target.value)
  }


  const renderNotisWalletContainer = () => (
    <button className="cta-button connect-wallet-button" onClick={connectWallet} disabled={loading}>
      {loading ? ( <span> <i className='spinner-border spinner-border-sm'></i> connecting to wallet...</span> ) : "Connect to Wallet"}
    </button>
  );

  const renderConnectedContainer = () => (
    gifList == null ?
        <div className="connected-container">
          <button className="cta-button submit-gif-button" onClick={createGifAccount}>
            Do One-Time Initialization For GIF Program Account
          </button>
        </div>
    :
        <div className="connected-container">
          <form onSubmit={sendGif}>
            <input type="text" placeholder="Enter gif link!" onChange={onChangeInput} value={inputValue} />
            <button type="submit" className="cta-button submit-gif-button">Submit</button>
        </form>
          <div className="gif-grid">
            {gifList.map((gif, index) => (
              <div className="gif-item" key={index}>
                <img src={gif} alt={gif} />
              </div>
            ))}
          </div>
        </div>
  )

  

  useEffect(() => { 
    console.log("running");

     const onLoad = async () => {
        await checkIfWalletIsisWallet();
     } 
     window.addEventListener('load', onLoad);
     

     return () => {
       window.removeEventListener('load', onLoad);
     }
    
  }, []);

  useEffect(() => {
    if(wallet.address){
      console.log('Fetching GIF list...');
      getGifList()
    }
  }, [wallet.address])


  return (
    <div className="App py-5">
      <div className="container">
        <div className="header-container">
           <p className={` ${wallet.isWallet ? "text-success" : "text-danger"}`}>
             {wallet.isWallet ? "😇 Connected to Wallet " : "😟 No Wallet Detected"}
            </p>
         
          <p className="header">🖼 Henshaw GIF Portal</p>
          <p className="sub-text">
            View your GIF collection in the metaverse ✨
          </p>
          {!wallet.address && renderNotisWalletContainer()}
          {wallet.address && renderConnectedContainer()}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
