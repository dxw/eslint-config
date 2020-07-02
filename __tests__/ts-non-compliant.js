const { ESLint } = require("eslint");

const fixturePath = "__fixtures__/non-compliant.ts";

it("has issues", async () => {
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
        "errorCount": 1,
        "filePath": "__fixtures__/non-compliant.ts",
        "fixableErrorCount": 1,
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
            "ruleId": "@typescript-eslint/no-unused-vars",
            "severity": 1,
          },
          Object {
            "column": 7,
            "endColumn": 12,
            "endLine": 2,
            "fix": Object {
              "range": Array [
                23,
                26,
              ],
              "text": "const",
            },
            "line": 2,
            "message": "'value' is never reassigned. Use 'const' instead.",
            "messageId": "useConst",
            "nodeType": "Identifier",
            "ruleId": "prefer-const",
            "severity": 2,
          },
          Object {
            "column": 8,
            "endColumn": 31,
            "endLine": 7,
            "line": 7,
            "message": "Missing return type on function.",
            "messageId": "missingReturnType",
            "nodeType": "FunctionDeclaration",
            "ruleId": "@typescript-eslint/explicit-module-boundary-types",
            "severity": 1,
          },
        ],
        "source": "const func = () => {
      let value = \\"some value\\";

      return value;
    };

    export function exportedFunc() {
      return false;
    }

    export default \\"default export\\";
    ",
        "usedDeprecatedRules": Array [],
        "warningCount": 2,
      },
    ]
  `);
});
