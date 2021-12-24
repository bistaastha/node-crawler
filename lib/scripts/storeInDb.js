let jsoning = require('jsoning');
let database = new jsoning("database.json");


const storeInDb = async(referenceLink, voteCount, answerCount) => {
    const linkComponents = referenceLink.split('/');
    const referenceHash = linkComponents[linkComponents.length - 2];

    if((await database.has(referenceHash) === true)) {
        const reference = await database.get('referenceHash');
        reference.refCount += 1;
    }
    else {
        await database.set(referenceHash, {path: referenceLink, refCount: 1, votes: voteCount, answers: answerCount});
    }
};

module.exports = storeInDb;