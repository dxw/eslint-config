const { ESLint } = require("eslint");

const fixturePath = "react/__fixtures__/non-compliant.tsx";

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
        "errorCount": 0,
        "filePath": "react/__fixtures__/non-compliant.tsx",
        "fixableErrorCount": 0,
        "fixableWarningCount": 0,
        "messages": Array [
          Object {
            "column": 7,
            "endColumn": 61,
            "endLine": 7,
            "line": 7,
            "message": "'ArrowFunctionComponent' is assigned a value but never used.",
            "messageId": "unusedVar",
            "nodeType": "Identifier",
            "ruleId": "@typescript-eslint/no-unused-vars",
            "severity": 1,
          },
        ],
        "usedDeprecatedRules": Array [],
        "warningCount": 1,
      },
    ]
  `);
});
