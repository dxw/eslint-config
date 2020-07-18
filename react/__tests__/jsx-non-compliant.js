const { ESLint } = require("eslint");

const fixturePath = "react/__fixtures__/non-compliant.jsx";

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
        "errorCount": 6,
        "filePath": "react/__fixtures__/non-compliant.jsx",
        "fixableErrorCount": 0,
        "fixableWarningCount": 0,
        "messages": Array [
          Object {
            "column": 7,
            "endColumn": 29,
            "endLine": 3,
            "line": 3,
            "message": "'ArrowFunctionComponent' is assigned a value but never used.",
            "messageId": "unusedVar",
            "nodeType": "Identifier",
            "ruleId": "no-unused-vars",
            "severity": 2,
          },
          Object {
            "column": 55,
            "endColumn": 59,
            "endLine": 3,
            "line": 3,
            "message": "'test' is missing in props validation",
            "nodeType": "Identifier",
            "ruleId": "react/prop-types",
            "severity": 2,
          },
          Object {
            "column": 10,
            "endColumn": 27,
            "endLine": 5,
            "line": 5,
            "message": "'FunctionComponent' is defined but never used.",
            "messageId": "unusedVar",
            "nodeType": "Identifier",
            "ruleId": "no-unused-vars",
            "severity": 2,
          },
          Object {
            "column": 22,
            "endColumn": 26,
            "endLine": 6,
            "line": 6,
            "message": "'test' is missing in props validation",
            "nodeType": "Identifier",
            "ruleId": "react/prop-types",
            "severity": 2,
          },
          Object {
            "column": 7,
            "endColumn": 21,
            "endLine": 9,
            "line": 9,
            "message": "'ClassComponent' is defined but never used.",
            "messageId": "unusedVar",
            "nodeType": "Identifier",
            "ruleId": "no-unused-vars",
            "severity": 2,
          },
          Object {
            "column": 29,
            "endColumn": 33,
            "endLine": 11,
            "line": 11,
            "message": "'test' is missing in props validation",
            "nodeType": "Identifier",
            "ruleId": "react/prop-types",
            "severity": 2,
          },
        ],
        "usedDeprecatedRules": Array [],
        "warningCount": 0,
      },
    ]
  `);
});
