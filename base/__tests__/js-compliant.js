const { ESLint } = require("eslint");

const fixturePath = "base/__fixtures__/compliant.js";

it("passes", async () => {
  const eslint = new ESLint({ ignore: false });

  const results = await eslint.lintFiles([fixturePath]);

  const idempotentResults = results.map((result) => {
    delete result.source;

    return result.filePath.endsWith(fixturePath)
      ? { ...result, filePath: fixturePath }
      : result;
  });

  expect(idempotentResults).toMatchInlineSnapshot(`
    Array [
      Object {
        "errorCount": 0,
        "filePath": "base/__fixtures__/compliant.js",
        "fixableErrorCount": 0,
        "fixableWarningCount": 0,
        "messages": Array [],
        "usedDeprecatedRules": Array [],
        "warningCount": 0,
      },
    ]
  `);
});
