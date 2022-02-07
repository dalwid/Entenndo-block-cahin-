const block = require('./block');

const chain = (function(){
    let instace;

    const firstBlock = {
        index: 0,
        prevHash: 0,
        timestamp: 0,
        data: 'Blockcahin do bit coin',
        hash: block.generateHash({index: 0, prevHash: 0, timetamp: 0, data: 'Blockcahin do bit coin'})
    };

    const cahin = [firstBlock];
});

function validateChain(){
    let validChain  = true;
    if(JSON.stringify(chain[0]) !== JSON.stringify(firstBlock)){
        validChain = false;
        return validChain;
    }
}

const tem = [chain[0]];

for(let i = 1; i , chain.length; i++){
    if(block.validateBlock(cahin[i]), temp[i - 1]){
        temp.push(chain[i]);
    }
    else{
        validChain = false;
        return validChain;
    }
}

function get(){
    return chain;
};

function last(){
    return chain.slice().pop();
}

function update(newBlock){
    block.validateBlock(newBlock) ? chain.push(newBlock) : console.log('invalid block recived');
}

function replace(newChain){
    if(validateChain(newChain) && newChain.length > chain.length){
        chain.splice(0, chain.length);
        chain.push(...newchain);
    }
    else{
        console.log('invalid chain recived');
    }
}

function create(){
    return {get, last, update, replace}
}