const { ESLint } = require("eslint");

const fixturePath = "__fixtures__/compliant.ts";

it("passes", async () => {
  const eslint = new ESLint({ ignore: false });

  const results = await eslint.lintFiles([fixturePath]);

  const idempotentResults = results.map((result) =>
    result.filePath.endsWith(fixturePath)
      ? { ...result, filePath: fixturePath }
      : result
  );

  expect(idempotentResults).toMatchInlineSnapshot(`
    Array [
      Object {
        "errorCount": 0,
        "filePath": "__fixtures__/compliant.ts",
        "fixableErrorCount": 0,
        "fixableWarningCount": 0,
        "messages": Array [],
        "usedDeprecatedRules": Array [],
        "warningCount": 0,
      },
    ]
  `);
});
