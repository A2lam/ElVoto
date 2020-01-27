const Web3 = require('web3');
const voteContractAbi = require('./voteContractAbi.json');

function startApp() {
    const voteContractAddress = "0x522933a04dBA4CE1AA28797Da60D7B283D651BfD";
    voteContract = new web3js.eth.Contract(voteContractAbi, voteContractAddress);
}

window.addEventListener('load', function () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
    } else {
        // Handle the case where the user doesn't have MetaMask installed
        // Probably show them a message prompting them to install MetaMask
        console.log("User doesn't have metamask");
    }

    // Now you can start your app & access web3 freely:
    startApp()
});
