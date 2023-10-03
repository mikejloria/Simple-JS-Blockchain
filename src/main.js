const { Blockchain, Transaction } = require("./blockchain");

let jsCoin = new Blockchain();
jsCoin.createTransaction(new Transaction("address1", "address2", 100));
jsCoin.createTransaction(new Transaction("address2", "address1", 100));

console.log("\nStarting the miner...");
jsCoin.minePendingTransactions("jays-address");

console.log("\nBalance of Jay is ", jsCoin.getBalanceOfAddress("jays-address"));

console.log("\nStarting the miner...");
jsCoin.minePendingTransactions("jays-address");

console.log("\nBalance of Jay is ", jsCoin.getBalanceOfAddress("jays-address"));

// console.log("Mining Block 1... ");
// jsCoin.addBlock(new Block(1, "9/11/2023", { amount: 1234 }));
// console.log("Mining Block 2... ");
// jsCoin.addBlock(new Block(2, "9/11/2023", { amount: 4321 }));

// jsCoin.chain[1].data = { amount: 10000000000 };
// jsCoin.chain[1].hash = jsCoin.chain[1].calculateHash();
// console.log("Is Blockchain Valid? " + jsCoin.isChainValid());

//console.log(JSON.stringify(jsCoin, null, 4));
