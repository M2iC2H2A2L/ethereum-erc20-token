const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  it("Should mint tokens to deployer", async function () {
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy();
    await myToken.deployed();

    const [owner] = await ethers.getSigners();
    expect(await myToken.balanceOf(owner.address)).to.equal(1000000n * (10n ** 18n));
  });
});
