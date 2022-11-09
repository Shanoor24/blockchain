// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const CRUD = await hre.ethers.getContractFactory("CRUD");
  const crud = await CRUD.deploy();

  await crud.deployed();

  // console.log(
  //   "CRUD deployed to:", crud.address
  // );

  // const employee3 = await crud.employees(0);
  // console.log(employee3);

  const totalNumberOfEmployee1 = await crud.totalEmployees()

  const response = await crud.createEmployee(
    "Shanoor",
    "shanoorfb2403@gmail.com",
    25,
    "0x12cd69c795D32E0e66563A85b241C86B44b3601c"
  )

  const response2 = await crud.createEmployee(
    "Shanoorr",
    "shanoorrfb2403@gmail.com",
    25,
    "0x12cd69c795D32E0e66563A85b241C86B44b3601c"
  )

  console.log(response2)

  const totalNumberOfEmployee2 = await crud.totalEmployees();
  const employee = await crud.employees(0);
  console.log(employee);

  await crud.updateEmployee("Balekundri", "shanoorfb2403@gmail.com");

  const employee2 = await crud.employees(0);
  console.log(employee2);

  await crud.deleteEmployee("shanoorfb2403@gmail.com");

  const employee3 = await crud.employees(0);
  console.log(employee3);

  const totalNumberOfEmployee3 = await crud.totalEmployees();

  console.log(response, totalNumberOfEmployee1, totalNumberOfEmployee2, totalNumberOfEmployee3);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
