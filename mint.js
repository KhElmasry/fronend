const Web3 = require('web3');
const web3 = new Web3('4e79e9a2-b4ce-40ab-b3da-0f9459f0068c');

const contractAddress = '0xF8402BE77548A298F6Ef979f5AAd90573cfC99A0';
const contractABI = [{...}];
const contract = new web3.eth.Contract(contractABI, contractAddress);

const mintButton = document.getElementById('mintButton');
const mintCount = document.getElementById('mintCount');

mintButton.addEventListener('click', () => {
  contract.methods.mint().send({from: web3.eth.defaultAccount})
    .then(() => {
      mintCount.innerHTML = parseInt(mintCount.innerHTML) + 1;
    })
    .catch(error => {

      async function mintNFT() {
        // Get the number of NFTs to mint
        const nftCount = parseInt(document.getElementById("nft-count").value);
      
        // Call the contract to mint the NFTs
        const result = await web3.eth.sendTransaction({
          to: CONTRACT_ADDRESS,
          value: nftCount * NFT_PRICE,
          data: MINTER_ABI.encodeABI()
        });
      
        // Update the number of mints displayed on the website
        document.getElementById("mint-count").innerHTML = parseInt(document.getElementById("mint-count").innerHTML) + nftCount;
      
        // Show a success message
        alert("NFTs minted successfully!");
      }
      
      console.
