const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const contractAddress = '0xF8402BE77548A298F6Ef979f5AAd90573cfC99A0';
const contractABI = [{...}]; // Replace with your actual contract ABI
const contract = new web3.eth.Contract(contractABI, contractAddress);

const mintButton = document.getElementById('mintButton');
const mintCount = document.getElementById('mintCount');

mintButton.addEventListener('click', async () => {
  const nftCount = parseInt(document.getElementById("nft-count").value);

  try {
    const result = await contract.methods.mint(nftCount).send({
      from: web3.eth.defaultAccount,
      value: nftCount * NFT_PRICE,
    });

    mintCount.innerHTML = parseInt(mintCount.innerHTML) + nftCount;
    alert("NFTs minted successfully!");
  } catch (error) {
    console.error(error);
  }
});
