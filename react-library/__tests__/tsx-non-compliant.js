const { ESLint } = require("eslint");

const fixturePath = "react-library/__fixtures__/non-compliant.tsx";

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
        "filePath": "react-library/__fixtures__/non-compliant.tsx",
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
          Object {
            "column": 31,
            "endColumn": 35,
            "endLine": 9,
            "line": 9,
            "message": "'test' is missing in props validation",
            "nodeType": "Identifier",
            "ruleId": "react/prop-types",
            "severity": 2,
          },
        ],
        "usedDeprecatedRules": Array [],
        "warningCount": 1,
      },
    ]
  `);
});
