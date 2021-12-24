const db = require('../../config/databaseConnection');
const storeInDb = async (referenceLink, voteCount, answerCount) => {
  const linkComponents = referenceLink.split("/");
  const referenceHash = linkComponents[linkComponents.length - 2];
  console.log(referenceHash);
  console.log(await db.has("234"));
  if (await db.has(referenceHash)) {
    const reference = await db.get("referenceHash");
    reference.refCount += 1;
  } else {
    await db.set(referenceHash, {
      path: referenceLink,
      refCount: 1,
      votes: voteCount,
      answers: answerCount,
    });
  }
};

module.exports = storeInDb;
