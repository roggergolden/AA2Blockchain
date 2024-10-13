async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Carga el contrato
  const Token = await ethers.getContractFactory("LoyaltyToken");

  console.log("Contract factory loaded.");

  // Despliega el contrato con una cantidad inicial de 1 millón de tokens
  const token = await Token.deploy(1000000);

  console.log("Deploy transaction sent, waiting for deployment...");

  // Espera a que el contrato se despliegue completamente usando "wait"
  const txReceipt = await token.waitForDeployment();

  // Imprime la dirección donde se ha desplegado el contrato
  console.log("Token deployed to:", token.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error during deployment:", error);
    process.exit(1);
  });
