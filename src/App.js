import React from 'react';
import { useState } from 'react';
import { Main, Tabs, Header, Button, IdentityBadge } from '@aragon/ui';
import Project from './Project.js';
import ProjectList from './ProjectList.js';
import ML from './ML.js';
import Voting from './Voting.js';
import Dao from './Dao.js';
import Token from './Token.js';
import {ethers} from 'ethers';
import Logo from './Asset.svg';

const tokABI = [
  "function name() view returns (string)",
    "function symbol() view returns (string)",
    // mint tokens
    "function mint(address to)",
    // token holders
    "function tokenHolders(uint256) view returns(uint)",
    // token count
    "function tokenCount() view returns(uint)",
    // total supply
    "function totalSupply() view returns(uint)"
]
const tokAddress = "0x54cf9F316Bd8402d58A7d9a525Dc01A51c830244";

function App() {
  const [selected, setSelected] = useState(0)
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccountAddress(accounts[0]);
      setIsConnected(true);
      console.log(accountAddress);
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const tokcontract = new ethers.Contract(tokAddress, tokABI, provider);
      const name = tokcontract.name();
      const symbol = tokcontract.symbol();
      console.log(symbol);
    } catch (error) {
      setIsConnected(false);
    }
  };

  return (
    <Main>
      <Header
        primary={<img src={Logo} alt="React Logo" height={40} />}
        secondary={
          isConnected ? 
          <IdentityBadge
            customLabel={accountAddress}
            entity={accountAddress}
            compact
            connectedAccount
          /> :
          <Button mode="strong" label="Connect DAO" onClick={connectWallet} />
        }
      />
      <Tabs
      items={['Project', 'Project List', 'ML', 'Voting', 'Dao', 'Token']}
      selected={selected}
      onChange={setSelected}
    />
    {selected===0 ? <div><Project/></div> : 
     selected===1 ? <div><ProjectList/></div> :  
     selected===2 ? <div><ML/></div> :  
     selected===3 ? <div><Voting/></div> :    
     selected===4 ? <div><Dao/></div> :
     selected===5 ? <div><Token/></div> :  <div></div>}
   
    </Main>
  )
}

export default App;
