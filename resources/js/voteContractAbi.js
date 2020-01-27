const voteContractAbi = [
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_partie",
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
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "candidatId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "matchId",
                "type": "uint256"
            }
        ],
        "name": "voteByUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
