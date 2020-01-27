const Web3 = require('web3');

const voteContractAbi = [
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_parti",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_nom",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_prenom",
                "type": "string"
            }
        ],
        "name": "addCandidat",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "candidatId",
                "type": "uint256"
            }
        ],
        "name": "addDefaite",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_homeCandidatId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_awayCandidatId",
                "type": "uint256"
            }
        ],
        "name": "addMatch",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "candidatId",
                "type": "uint256"
            }
        ],
        "name": "addNul",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "candidatId",
                "type": "uint256"
            }
        ],
        "name": "addVictoire",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "calculateLigueWinner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "candidatId",
                "type": "uint256"
            }
        ],
        "name": "getCandidatAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "candidatId",
                "type": "uint256"
            }
        ],
        "name": "getCandidatDefaites",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "candidatId",
                "type": "uint256"
            }
        ],
        "name": "getCandidatNom",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "candidatId",
                "type": "uint256"
            }
        ],
        "name": "getCandidatNuls",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "candidatId",
                "type": "uint256"
            }
        ],
        "name": "getCandidatParti",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "candidatId",
                "type": "uint256"
            }
        ],
        "name": "getCandidatPrenom",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "candidatId",
                "type": "uint256"
            }
        ],
        "name": "getCandidatVictoires",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getLigueWinnerId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "matchId",
                "type": "uint256"
            }
        ],
        "name": "getMatchAwayCandidatId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "matchId",
                "type": "uint256"
            }
        ],
        "name": "getMatchHomeCandidatId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "matchId",
                "type": "uint256"
            }
        ],
        "name": "getMatchNbVotes",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "incrementCurrentLigueNbMatch",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "matchId",
                "type": "uint256"
            }
        ],
        "name": "incrementMatchNbVotes",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "initLigue",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "matchId",
                "type": "uint256"
            }
        ],
        "name": "matchResult",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "matchId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "candidatId",
                "type": "uint256"
            }
        ],
        "name": "vote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

let userAccount;
let voteContract;

window.startApp = function() {
    const voteContractAddress = "0x1a0cef4ce7e29b150c45f880b3af661d1b4ea8a1";
    voteContract = new web3js.eth.Contract(voteContractAbi, voteContractAddress);

    /*let accountInterval = setInterval(function() {
        // Vérifie si le compte a changé
        if (web3.eth.accounts[0] !== userAccount) {
            userAccount = web3.eth.accounts[0];
            // Appelle une fonction pour mettre à jour l'interface avec le nouveau compte
            // updateInterface();
        }
    }, 100);*/
};

// Init a new league
window.initLeague = function() {
    return voteContract.methods.initLigue().call();
};

window.addEventListener('load', function () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
        //userAccount = web3.eth.accounts[0];
    } else {
        // Handle the case where the user doesn't have MetaMask installed
        // Probably show them a message prompting them to install MetaMask
        console.log("User doesn't have MetaMask");
    }

    // Now you can start your app & access web3 freely:
    startApp();
});
