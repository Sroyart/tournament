import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import globals from "globals"
import tsParser from "@typescript-eslint/parser"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: [
      "**/postcss.config.js",
      "**/db.ts",
      "**/middleware.ts",
      "**/eslint.config.mjs",
    ],
  },
  ...compat.extends(
    "eslint:recommended",
    "prettier",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/strict-type-checked",
  ),
  {
    plugins: {
      react,
      "react-hooks": reactHooks,
      "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        project: true,
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "array-callback-return": [
        "error",
        {
          allowImplicit: false,
          checkForEach: true,
          allowVoid: true,
        },
      ],

      "no-await-in-loop": "error",
      "no-constant-binary-expression": "error",
      "no-constructor-return": "error",

      "no-duplicate-imports": [
        "error",
        {
          includeExports: true,
        },
      ],

      "no-new-native-nonconstructor": "error",

      "no-promise-executor-return": [
        "error",
        {
          allowVoid: true,
        },
      ],

      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "no-unused-private-class-members": "error",
      "require-atomic-updates": "error",
      "arrow-body-style": ["error", "as-needed"],

      "camelcase": [
        "error",
        {
          properties: "always",
          ignoreDestructuring: true,
          ignoreImports: true,
          ignoreGlobals: true,
        },
      ],

      "capitalized-comments": [
        "error",
        "always",
        {
          ignoreConsecutiveComments: true,
        },
      ],

      "class-methods-use-this": [
        "error",
        {
          enforceForClassFields: true,
        },
      ],

      "complexity": ["error", 7],
      "consistent-return": "error",
      "curly": ["error", "all"],
      "default-param-last": "error",
      "dot-notation": "error",
      "eqeqeq": ["error", "always"],
      "func-name-matching": "error",
      "func-names": "error",

      "func-style": [
        "error",
        "declaration",
        {
          allowArrowFunctions: true,
        },
      ],

      "grouped-accessor-pairs": ["error", "getBeforeSet"],
      "guard-for-in": "error",
      "init-declarations": ["error", "always"],

      "logical-assignment-operators": [
        "error",
        "always",
        {
          enforceForIfStatements: true,
        },
      ],

      "max-classes-per-file": [
        "error",
        {
          ignoreExpressions: true,
        },
      ],

      "max-depth": ["error", 3],

      "max-lines": [
        "error",
        {
          max: 150,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      "max-lines-per-function": [
        "warn",
        {
          max: 50,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      "max-nested-callbacks": ["error", 3],
      "max-params": ["error", 3],
      "multiline-comment-style": ["error", "separate-lines"],
      "new-cap": "error",
      "no-alert": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-console": "error",
      "no-else-return": "error",
      "no-empty-function": "error",
      "no-empty-static-block": "error",
      "no-eq-null": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-label": "error",
      "no-implicit-coercion": "error",
      "no-implicit-globals": "error",
      "no-implied-eval": "error",
      "no-inline-comments": "error",
      "no-invalid-this": "error",
      "no-iterator": "error",
      "no-labels": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-loop-func": "error",
      "no-multi-assign": "error",
      "no-multi-str": "error",
      "no-nested-ternary": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-object-constructor": "error",
      "no-octal-escape": "error",
      "no-param-reassign": "error",
      "no-plusplus": "error",
      "no-proto": "error",
      "no-return-assign": ["error", "always"],
      "no-script-url": "error",
      "no-sequences": "error",
      "no-shadow": "error",
      "no-throw-literal": "error",
      "no-undef-init": "error",
      "no-undefined": "error",

      "no-underscore-dangle": [
        "error",
        {
          allowFunctionParams: false,
        },
      ],

      "no-unneeded-ternary": [
        "error",
        {
          defaultAssignment: false,
        },
      ],

      "no-unused-expressions": [
        "error",
        {
          enforceForJSX: true,
        },
      ],

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],

      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
        },
      ],

      "no-useless-call": "error",

      "no-useless-computed-key": [
        "error",
        {
          enforceForClassMembers: true,
        },
      ],

      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-var": "error",

      "no-warning-comments": [
        "error",
        {
          terms: ["todo"],
        },
      ],

      "object-shorthand": ["error", "always"],
      "one-var": ["error", "never"],
      "operator-assignment": ["error", "always"],
      "prefer-arrow-callback": "error",

      "prefer-const": [
        "error",
        {
          destructuring: "any",
          ignoreReadBeforeAssign: false,
        },
      ],

      "prefer-destructuring": "error",
      "prefer-exponentiation-operator": "error",
      "prefer-numeric-literals": "error",
      "prefer-object-has-own": "error",
      "prefer-object-spread": "error",
      "prefer-promise-reject-errors": "error",

      "prefer-regex-literals": [
        "error",
        {
          disallowRedundantWrapping: true,
        },
      ],

      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "radix": "error",
      "require-await": "error",
      "require-unicode-regexp": "error",
      "symbol-description": "error",
      "yoda": "error",

      "line-comment-position": [
        "error",
        {
          position: "above",
        },
      ],

      "indent": "off",
      "linebreak-style": ["off"],
      "newline-before-return": "error",
      "no-undef": "error",
      "padded-blocks": ["error", "never"],

      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",

          next: [
            "break",
            "case",
            "cjs-export",
            "class",
            "continue",
            "do",
            "export",
            "if",
            "return",
            "switch",
            "try",
            "while",
          ],
        },
        {
          blankLine: "always",

          prev: [
            "break",
            "case",
            "cjs-export",
            "class",
            "continue",
            "do",
            "export",
            "if",
            "return",
            "switch",
            "try",
            "while",
          ],

          next: "*",
        },
        {
          blankLine: "never",
          prev: ["const", "let"],
          next: "const",
        },
      ],

      "quotes": [
        "error",
        "double",
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],

      "space-before-blocks": "error",
      "semi": ["error", "never"],
      "@next/next/no-html-link-for-pages": ["error", "./src/app"],
      "@next/next/no-img-element": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "react/no-unescaped-entities": [
        "error",
        {
          forbid: [">", "}"],
        },
      ],

      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
]
