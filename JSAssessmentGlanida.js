/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _zodiacSign, _bloodType, _MBTI) {
    const NFT = {
        "name":  _name,
        "zodiacSign": _zodiacSign,
        "bloodType": _bloodType,
        "MBTI": _MBTI,
    }
    NFTs.push (NFT);
    console.log ("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for(let i = 0; i < NFTs.length; i++){
        console.log("\nID\t\t\t" + (i + 1));
        console.log("\nName:\t\t" + NFTs[i].name);
        console.log("zodiacSign:\t" + NFTs[i].zodiacSign);
        console.log("bloodType:\t" + NFTs[i].bloodType);
        console.log("MBTI:\t\t" + NFTs[i].MBTI);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply () {
    console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT ("Pen", "Capricorn", "A", "INFJ");
mintNFT ("Jai", "Sagittarius", "A+", "ENTP");
mintNFT ("Sevi", "Cancer", "O+", "ISFJ");
mintNFT ("Wiji", "Pisces", "A", "INFJ");
mintNFT ("Saki", "Virgo", "A+", "ISFJ");
listNFTs();
getTotalSupply();
