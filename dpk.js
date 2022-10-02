const crypto = require("crypto");

let deterministicPartitionKey = (event) => {
  //define constants
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = TRIVIAL_PARTITION_KEY;
  if (event) {
    const data = JSON.stringify(event);
    candidate = event.partitionKey
      ? event.partitionKey.toString()
      : crypto.createHash("sha3-512").update(data).digest("hex");
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};

module.exports = {
  deterministicPartitionKey,
};
