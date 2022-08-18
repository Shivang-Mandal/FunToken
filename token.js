const { expect } = require("chai");


describe("FunToken Contract", function () {
    let FunToken;
    let Fun_Token;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    beforeEach(async function () {
        FunToken = await ethers.getContractFactory("FunToken");
        [owner, addr1, addr2, ...adrrs] = await ethers.getSigners();
        Fun_Token = await FunToken.deploy();
    });

    describe("Deployment", function () {

        it("Set the right owner", async function () {
            expect(await Fun_Token.owner()).to.equal(owner.address);

        });

        it("assigne token to owner", async function () {

            const ownerBalance = await Fun_Token.balanceOf(owner.address)
            expect(await Fun_Token.totalSupply()).to.equal(ownerBalance);
        });

    });

    describe("Transactions", function () {

        it("Transfer Token between accounts", async function () {
            await Fun_Token.transfer(addr1.address, 10);
            const addr1Balance = await Fun_Token.balanceOf(addr1.address);
            expect(addr1Balance).to.equal(10);

            await Fun_Token.connect(addr1).transfer(addr2.address, 5);
            const addr2Balance = await Fun_Token.balanceOf(addr2.address);
            expect(addr2Balance).to.equal(5);
        });

        it("not enough balance", async function () {
            const intitalOwnerBalance = await Fun_Token.balanceOf(owner.address);
            await expect(Fun_Token.connect(addr1).transfer(owner.address, 10)).to.be.revertedWith("Insufficient balance");
            expect(await Fun_Token.balanceOf(owner.address)).to.equal(intitalOwnerBalance);
        });

        it("Update balance", async function () {

            const initialOwnerBalance = await Fun_Token.balanceOf(owner.address);
            await Fun_Token.transfer(addr1.address, 5);
            expect(await Fun_Token.balanceOf(addr1.address)).to.equal(5);

            await Fun_Token.transfer(addr2.address, 10);
            expect(await Fun_Token.balanceOf(addr2.address)).to.equal(10);

            const finalOwnerBalance = await Fun_Token.balanceOf(owner.address);
            expect(finalOwnerBalance).to.equal(initialOwnerBalance - 15);




        });

    });


})