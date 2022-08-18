async function main() {
    const [deployer] = await ethers.getSigners();
    const FunToken = await ethers.getContractFactory("FunToken");
    const Fun_Token = await FunToken.deploy();
    console.log("Token address: ", Fun_Token.address);

}
main()
    .then(() => process.exit(0))
    .catch((error => {
        console.error(error);
        process.exit(1);
    }))