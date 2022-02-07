const cripto = requere('crito-js');
const chain  = require('./chain');

module.exports.generateHash = function({ index, prevHash, timetamp, data}){
    return cripto.SHA256(data + index + prevHash+ timetamp).toString();
}

module.exports.create = (data) => {
    const lastBlock = chain.last();

    const newblock = {
        index: lastBlock.index + 1,
        prevHash: lastBlock.hash,
        timetamp: new Date().getTime(),
        data: data,
    }
    newblock.hash = this.generateHash(newblock);
    return newblock;
}

module.exports.validateBlock = (newblock, lastBlock = chain.last()) => {
    let blockIsvalid = false;

    if(newBlock == lastBlock.index + 1){
        blockIsvalid = true;
    }
    else if(newBlock.prevHash == lastBlock.hash){
        blockIsvalid = true;
    }
    else if(newBlock.hash == this.generateHash(newBlock)){
        blockIsvalid = true
    }

    return blockIsvalid;
}