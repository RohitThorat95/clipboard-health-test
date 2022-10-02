const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the hash string of length 128 when given empty object as input", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toHaveLength(128);
  });

  it("Returns the partitionKey when given partitionKey less than 256 as input ", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "secret" });
    expect(trivialKey).toBe("secret");
  });

  it("Returns the hash string of length 128 when given partitionKey more than 256 as input", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey:
        "asfsafasfasfsafsafsafasfsafafsafasfasfsafaasfsafasfasfsafsafsafasfsafafsafasfasfsafasfasfasfasfasfsafasasgsdgdsgdfgdfgdhdfhfhdfhdfhfdhfdhdfhdfhdfhfdhfdhdfhdfhdfhdfhfdhdfhdfhdfhdfhdfhdfhdfhfdfhfdhdfhfhfdhdfhdfhdfhdfhdfhdfhfdhdfhdfsfasfasfasfasfsafasasgsdgdsgdfgdfgdhdfhfhdfhdfhfdhfdhdfhdfhdfhfdhfdhdfhdfhdfhdfhfdhdfhdfhdfhdfhdfhdfhdfhfdfhfdhdfhfhfdhdfhdfhdfhdfhdfhdfhfdhdfhdf",
    });
    expect(trivialKey).toHaveLength(128);
  });
});
