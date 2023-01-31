const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const contractAddress = '0xF8402BE77548A298F6Ef979f5AAd90573cfC99A0';
const contractABI = [{4e79e9a2-b4ce-40ab-b3da-0f9459f0068c}];
const contract = new web3.eth.Contract(contractABI, contractAddress);

const mintButton = document.getElementById('mintButton');
const mintCount = document.getElementById('mintCount');

mintButton.addEventListener('click', () => {
  contract.methods.mint().send({from: web3.eth.defaultAccount})
    .then(() => {
      mintCount.innerHTML = parseInt(mintCount.innerHTML) + 1;
    })
    .catch(error => {
      console.error(error);
    });
});
