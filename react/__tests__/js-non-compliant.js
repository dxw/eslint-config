const { ESLint } = require("eslint");

const fixturePath = "react/__fixtures__/non-compliant.js";

it("has issues", async () => {
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
        "errorCount": 1,
        "filePath": "react/__fixtures__/non-compliant.js",
        "fixableErrorCount": 0,
        "fixableWarningCount": 0,
        "messages": Array [
          Object {
            "column": 7,
            "endColumn": 11,
            "endLine": 1,
            "line": 1,
            "message": "'func' is assigned a value but never used.",
            "messageId": "unusedVar",
            "nodeType": "Identifier",
            "ruleId": "no-unused-vars",
            "severity": 2,
          },
        ],
        "usedDeprecatedRules": Array [],
        "warningCount": 0,
      },
    ]
  `);
});
