import { useEffect, useState } from "react";
import configuration from "../json/MultiPostVoting.json"
import { Web3 } from "web3";
import creatElection from "../utils/CreateElection";
import addPostWithCandidates from "../utils/addPostWithCandidates";


function MetamaskButton({ updateContract, updateAccount }) {
  const [contract, setContract] = useState(null);

  async function init() {
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
    const networkID = await web3.eth.net.getId();
    const contractAddress = configuration.networks[networkID].address;
    const contractABI = configuration.abi;

    const contract = new web3.eth.Contract(contractABI, contractAddress);
    console.log(contract);
    updateContract(contract)
    setContract(contract);
  }

  useEffect(() => {
    init();
    window.ethereum.on("accountsChanged", handleAccountsChanged);
    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
    };
  }, []);
  const handleAccountsChanged = async (accounts) => {
    if (accounts.length > 0) {
      const account = accounts[0];
      updateAccount(account);
      console.log(account);
    }
  }

  const onConnect = async () => {
    try {
      let provider = window.ethereum;
      if (typeof provider !== "undefined") {
        await provider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        updateAccount(account)
        console.log(account);
        console.log(contract)
       
      } else {
        console.log("Non-ethereum browser detected.Please install Metamask");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className=" bg-blue-500 h-8 w-[180px] flex mt-6 rounded-lg text-white font-bold text-sm hover:bg-blue-700 cursor-pointer ">
      <button onClick={onConnect} className=" m-auto">
        Connect To Metamask
      </button>
    </div>
  );
}

export default MetamaskButton;
