module.exports = {
    "env": {
        "es6": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:jsx-a11y/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "babel",
        "import",
        "jest",
        "jsx-a11y",
        "module-resolver",
        "react"
    ],
    "settings": {
        "react": {
            "version": "detect"
        },
        "import/resolver": {
            "babel-module": {}
        }
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-extra-parens": [
            "error",
            "all",
            {
                "ignoreJSX": "multi-line"
            }
        ],
        "no-template-curly-in-string": [
            "error"
        ],
        "array-callback-return": [
            "error"
        ],
        "block-scoped-var": [
            "error"
        ],
        "class-methods-use-this": [
            "error"
        ],
        "complexity": [
            "error",
            10
        ],
        "consistent-return": [
            "error"
        ],
        "curly": [
            "error"
        ],
        "default-case": [
            "error"
        ],
        "dot-location": [
            "error"
        ],
        "dot-notation": [
            "error"
        ],
        "eqeqeq": [
            "error"
        ],
        "max-classes-per-file": [
            "error"
        ],
        "no-caller": [
            "error"
        ],
        "no-else-return": [
            "error"
        ],
        "no-empty-function": [
            "error",
            {
                "allow": [
                    "arrowFunctions"
                ]
            }
        ],
        "no-eq-null": [
            "error"
        ],
        "no-eval": [
            "error"
        ],
        "no-extend-native": [
            "error"
        ],
        "no-extra-bind": [
            "error"
        ],
        "no-extra-label": [
            "error"
        ],
        "no-fallthrough": [
            "off"
        ],
        "no-floating-decimal": [
            "error"
        ],
        "no-implicit-coercion": [
            "error"
        ],
        "no-implied-eval": [
            "error"
        ],
        // BABEL
        // "no-invalid-this": [
        //     "error"
        // ],
        "no-iterator": [
            "error"
        ],
        "no-labels": [
            "error"
        ],
        "no-lone-blocks": [
            "error"
        ],
        "no-loop-func": [
            "error"
        ],
        "no-magic-numbers": [
            "error"
        ],
        "no-multi-spaces": [
            "error"
        ],
        "no-multi-str": [
            "error"
        ],
        "no-new": [
            "error"
        ],
        "no-new-wrappers": [
            "error"
        ],
        "no-octal-escape": [
            "error"
        ],
        "no-param-reassign": [
            "error"
        ],
        "no-proto": [
            "error"
        ],
        "no-return-assign": [
            "error"
        ],
        "no-return-await": [
            "error"
        ],
        "no-script-url": [
            "error"
        ],
        "no-self-compare": [
            "error"
        ],
        "no-sequences": [
            "error"
        ],
        "no-throw-literal": [
            "error"
        ],
        "no-unmodified-loop-condition": [
            "error"
        ],
        "no-unused-expressions": [
            "error"
        ],
        "no-useless-call": [
            "error"
        ],
        "no-useless-concat": [
            "error"
        ],
        "no-useless-return": [
            "error"
        ],
        "no-void": [
            "error"
        ],
        "prefer-promise-reject-errors": [
            "error"
        ],
        "radix": [
            "error",
            "as-needed"
        ],
        "require-await": [
            "error"
        ],
        "vars-on-top": [
            "error"
        ],
        "yoda": [
            "error"
        ],
        "strict": [
            "error",
            "never"
        ],
        "no-label-var": [
            "error"
        ],
        "no-shadow": [
            "error"
        ],
        "no-undef-init": [
            "error"
        ],
        "no-undefined": [
            "error"
        ],
        "no-use-before-define": [
            "error"
        ],
        "array-bracket-newline": [
            "error",
            {
                "minItems": 3
            }
        ],
        "array-bracket-spacing": [
            "error",
            "always",
            {
                "objectsInArrays": false,
                "arraysInArrays": false
            }
        ],
        "array-element-newline": [
            "error",
            {
                "minItems": 3
            }
        ],
        "block-spacing": [
            "error"
        ],
        "brace-style": [
            "error"
        ],
        "camelcase": [
            "error"
        ],
        "capitalized-comments": [
            "error",
            "always"
        ],
        "comma-dangle": [
            "error"
        ],
        "comma-spacing": [
            "error"
        ],
        "comma-style": [
            "error"
        ],
        "computed-property-spacing": [
            "error"
        ],
        "consistent-this": [
            "error"
        ],
        "eol-last": [
            "error"
        ],
        "func-call-spacing": [
            "error"
        ],
        "func-names": [
            "error"
        ],
        "func-style": [
            "error",
            "declaration",
            {
                "allowArrowFunctions": true
            }
        ],
        "function-paren-newline": [
            "error",
            {
                "minItems": 4
            }
        ],
        "implicit-arrow-linebreak": [
            "error"
        ],
        "jsx-quotes": [
            "error"
        ],
        "key-spacing": [
            "error"
        ],
        "keyword-spacing": [
            "error"
        ],
        "line-comment-position": [
            "error"
        ],
        "lines-around-comment": [
            "error",
            {
                "beforeBlockComment": true,
                "beforeLineComment": true
            }
        ],
        "lines-between-class-members": [
            "error"
        ],
        "max-depth": [
            "error",
            5
        ],
        "max-len": [
            "error",
            {
                "code": 100,
                "ignoreUrls": true,
                "ignoreStrings": true
            }
        ],
        "max-lines": [
            "error",
            {
                "max": 400,
                "skipBlankLines": true,
                "skipComments": true
            }
        ],
        "max-lines-per-function": [
            "error"
        ],
        "max-nested-callbacks": [
            "error",
            5
        ],
        "max-params": [
            "error"
        ],
        "max-statements-per-line": [
            "error"
        ],
        "multiline-comment-style": [
            "error"
        ],
        "multiline-ternary": [
            "error",
            "always-multiline"
        ],
        "new-cap": [
            "error"
        ],
        "new-parens": [
            "error"
        ],
        "newline-per-chained-call": [
            "error"
        ],
        "no-array-constructor": [
            "error"
        ],
        "no-inline-comments": [
            "error"
        ],
        "no-lonely-if": [
            "error"
        ],
        "no-multi-assign": [
            "error"
        ],
        "no-multiple-empty-lines": [
            "error"
        ],
        "no-new-object": [
            "error"
        ],
        "no-tabs": [
            "error"
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "no-underscore-dangle": [
            "error"
        ],
        "no-unneeded-ternary": [
            "error"
        ],
        "no-whitespace-before-property": [
            "error"
        ],
        "nonblock-statement-body-position": [
            "error",
            "below"
        ],
        "object-curly-newline": [
            "error",
            {
                "ObjectExpression": { "multiline": true, "minProperties": 3 },
                "ObjectPattern": { "multiline": true },
                "ImportDeclaration": { "minProperties": 4 },
                "ExportDeclaration": "always"
            }
        ],
        "object-curly-spacing": [
            "error",
            "always",
            {
                "arraysInObjects": true,
                "objectsInObjects": true
            }
        ],
        "object-property-newline": [
            "error"
        ],
        "one-var": [
            "error",
            {
                "initialized": "never",
                "uninitialized": "consecutive"
            }
        ],
        "one-var-declaration-per-line": [
            "error"
        ],
        "operator-linebreak": [
            "error",
            "before"
        ],
        "padded-blocks": [
            "error",
            "always",
            {
                "allowSingleLineBlocks": true
            }
        ],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": [ "const", "let", "var" ],
                "next": "*"
            },
            {
                "blankLine": "any",
                "prev": [ "const", "let", "var" ],
                "next": [ "const", "let", "var" ]
            },
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            },
            {
                "blankLine": "always",
                "prev": "import",
                "next": "*"
            },
            {
                "blankLine": "any",
                "prev": "import",
                "next": "import"
            },
            {
                "blankLine": "always",
                "prev": "*",
                "next": "case"
            },
            {
                "blankLine": "always",
                "prev": "*",
                "next": "default"
            }
        ],
        "prefer-object-spread": [
            "error"
        ],
        "quote-props": [
            "error",
            "as-needed"
        ],
        "semi-spacing": [
            "error"
        ],
        "semi-style": [
            "error"
        ],
        "sort-keys": [
            "error",
            "asc",
            {
                "natural": true
            }
        ],
        "sort-vars": [
            "error"
        ],
        "space-before-blocks": [
            "error"
        ],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-in-parens": [
            "error"
        ],
        "space-infix-ops": [
            "error"
        ],
        "space-unary-ops": [
            "error"
        ],
        "spaced-comment": [
            "error"
        ],
        "switch-colon-spacing": [
            "error"
        ],
        "arrow-body-style": [
            "error"
        ],
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "arrow-spacing": [
            "error"
        ],
        "no-confusing-arrow": [
            "error"
        ],
        "no-duplicate-imports": [
            "error"
        ],
        "no-useless-computed-key": [
            "error"
        ],
        "no-useless-constructor": [
            "error"
        ],
        "no-useless-rename": [
            "error"
        ],
        "no-var": [
            "error"
        ],
        "object-shorthand": [
            "error"
        ],
        "prefer-arrow-callback": [
            "error"
        ],
        "prefer-const": [
            "error"
        ],
        "prefer-destructuring": [
            "error",
            {
                "object": true,
                "array": false
            }
        ],
        "prefer-numeric-literals": [
            "error"
        ],
        "prefer-rest-params": [
            "error"
        ],
        "prefer-spread": [
            "error"
        ],
        "prefer-template": [
            "error"
        ],
        "rest-spread-spacing": [
            "error"
        ],
        "sort-imports": [
            "error",
            {
                "ignoreDeclarationSort": true
            }
        ],
        "symbol-description": [
            "error"
        ],
        "template-curly-spacing": [
            "error"
        ],
        "yield-star-spacing": [
            "error"
        ],
        "babel/no-invalid-this": [
            "error"
        ],
        "import/named": [
            "error"
        ],
        "import/default": [
            "error"
        ],
        "import/namespace": [
            "error"
        ],
        "import/no-absolute-path": [
            "error"
        ],
        "import/no-dynamic-require": [
            "error"
        ],
        "import/no-webpack-loader-syntax": [
            "error"
        ],
        "import/no-self-import": [
            "error"
        ],
        "import/no-cycle": [
            "error"
        ],
        "import/no-useless-path-segments": [
            "error",
            {
                "noUselessIndex": true
            }
        ],
        "import/no-relative-parent-imports": [
            "error"
        ],
        "import/no-unused-modules": [
            "error",
            {
                "missingExports": false,
                "unusedExports": true
            }
        ],
        "import/export": [
            "error"
        ],
        "import/no-named-as-default": [
            "error"
        ],
        "import/no-named-as-default-member": [
            "error"
        ],
        "import/no-deprecated": [
            "error"
        ],
        "import/no-extraneous-dependencies": [
            "error"
        ],
        "import/no-mutable-exports": [
            "error"
        ],
        "import/no-amd": [
            "error"
        ],
        "import/first": [
            "error"
        ],
        "import/exports-last": [
            "error"
        ],
        "import/extensions": [
            "error",
            "never",
            {
                "json": "always",
                "png": "always",
                "jpg": "always",
                "svg": "always"
            }
        ],
        "import/order": [
            "error",
            {
                "newlines-between": "always"
            }
        ],
        "import/newline-after-import": [
            "error",
            {
                "count": 2
            }
        ],
        "import/prefer-default-export": [
            "error"
        ],
        "import/max-dependencies": [
            "error",
            {
                "max": 20
            }
        ],
        "import/no-unassigned-import": [
            "error",
            {
                "allow": [
                    "**/*.css"
                ]
            }
        ],
        "import/no-named-default": [
            "error"
        ],
        "import/no-anonymous-default-export": [
            "error"
        ],
        "import/dynamic-import-chunkname": [
            "error"
        ],
        "jest/consistent-test-it": [
            "error",
            {
                "fn": "test",
                "withinDescribe": "test"
            }
        ],
        "jest/expect-expect": [
            "error"
        ],
        "jest/lowercase-name": [
            "error"
        ],
        "jest/no-alias-methods": [
            "error"
        ],
        "jest/no-disabled-tests": [
            "error"
        ],
        "jest/no-commented-out-tests": [
            "error"
        ],
        "jest/no-empty-title": [
            "error"
        ],
        "jest/no-focused-tests": [
            "error"
        ],
        "jest/no-identical-title": [
            "error"
        ],
        "jest/no-jasmine-globals": [
            "error"
        ],
        "jest/no-jest-import": [
            "error"
        ],
        "jest/no-mocks-import": [
            "error"
        ],
        "jest/no-large-snapshots": [
            "error",
            {
                "maxSize": 100
            }
        ],
        "jest/no-test-callback": [
            "error"
        ],
        "jest/no-test-prefixes": [
            "error"
        ],
        "jest/no-test-return-statement": [
            "error"
        ],
        "jest/no-truthy-falsy": [
            "error"
        ],
        "jest/prefer-expect-assertions": [
            "error"
        ],
        "jest/prefer-spy-on": [
            "error"
        ],
        "jest/prefer-strict-equal": [
            "error"
        ],
        "jest/prefer-to-be-null": [
            "error"
        ],
        "jest/prefer-to-be-undefined": [
            "error"
        ],
        "jest/prefer-to-contain": [
            "error"
        ],
        "jest/prefer-to-have-length": [
            "error"
        ],
        "jest/require-tothrow-message": [
            "error"
        ],
        "jest/valid-describe": [
            "error"
        ],
        "jest/valid-expect-in-promise": [
            "error"
        ],
        "jest/valid-expect": [
            "error"
        ],
        "jest/prefer-todo": [
            "error"
        ],
        "jest/prefer-called-with": [
            "error"
        ],
        "module-resolver/use-alias": [
            "error"
        ],
        "react/boolean-prop-naming": [
            "error",
            {
                "validateNested": true
            }
        ],
        "react/button-has-type": [
            "error"
        ],
        "react/default-props-match-prop-types": [
            "error"
        ],
        "react/destructuring-assignment": [
            "error"
        ],
        "react/display-name": [
            "error"
        ],
        "react/forbid-component-props": [
            "error"
        ],
        "react/no-access-state-in-setstate": [
            "error"
        ],
        "react/no-array-index-key": [
            "error"
        ],
        "react/no-children-prop": [
            "error"
        ],
        "react/no-danger": [
            "error"
        ],
        "react/no-danger-with-children": [
            "error"
        ],
        "react/no-deprecated": [
            "error"
        ],
        "react/no-direct-mutation-state": [
            "error"
        ],
        "react/no-find-dom-node": [
            "error"
        ],
        "react/no-is-mounted": [
            "error"
        ],
        "react/no-multi-comp": [
            "error"
        ],
        "react/no-redundant-should-component-update": [
            "error"
        ],
        "react/no-render-return-value": [
            "error"
        ],
        "react/no-typos": [
            "error"
        ],
        "react/no-string-refs": [
            "error"
        ],
        "react/no-this-in-sfc": [
            "error"
        ],
        "react/no-unescaped-entities": [
            "error"
        ],
        "react/no-unknown-property": [
            "error"
        ],
        "react/no-unsafe": [
            "error"
        ],
        "react/no-unused-prop-types": [
            "error"
        ],
        "react/no-unused-state": [
            "error"
        ],
        "react/no-will-update-set-state": [
            "error"
        ],
        "react/prefer-es6-class": [
            "error"
        ],
        "react/prefer-read-only-props": [
            "error"
        ],
        "react/prefer-stateless-function": [
            "error"
        ],
        "react/prop-types": [
            "error"
        ],
        "react/react-in-jsx-scope": [
            "error"
        ],
        "react/require-default-props": [
            "error"
        ],
        "react/require-render-return": [
            "error"
        ],
        "react/self-closing-comp": [
            "error"
        ],
        "react/sort-comp": [
            "error"
        ],
        "react/sort-prop-types": [
            "error",
            {
                "requiredFirst": true,
                "sortShapeProp": true
            }
        ],
        "react/state-in-constructor": [
            "error"
        ],
        "react/static-property-placement": [
            "error"
        ],
        "react/style-prop-object": [
            "error"
        ],
        "react/void-dom-elements-no-children": [
            "error"
        ],
        "react/jsx-boolean-value": [
            "error"
        ],
        "react/jsx-child-element-spacing": [
            "error"
        ],
        "react/jsx-closing-bracket-location": [
            "error"
        ],
        "react/jsx-closing-tag-location": [
            "error"
        ],
        // "react/jsx-curly-newline": [
        //     "error",
        //     {
        //         "multiline": "require",
        //         "singleline": "forbid"
        //     }
        // ],
        "react/jsx-curly-spacing": [
            "error",
            {
                "when": "never",
                "children": {
                    "when": "always"
                }
            }
        ],
        "react/jsx-equals-spacing": [
            "error"
        ],
        "react/jsx-filename-extension": [
            "error"
        ],
        "react/jsx-first-prop-new-line": [
            "error"
        ],
        "react/jsx-handler-names": [
            "error"
        ],
        "react/jsx-indent": [
            "error"
        ],
        "react/jsx-indent-props": [
            "error"
        ],
        "react/jsx-key": [
            "error"
        ],
        "react/jsx-max-depth": [
            "error",
            {
                "max": 10
            }
        ],
        "react/jsx-max-props-per-line": [
            "error",
            {
                "maximum": 2
            }
        ],
        "react/jsx-no-bind": [
            "error",
            {
                "ignoreRefs": true
            }
        ],
        "react/jsx-no-comment-textnodes": [
            "error"
        ],
        "react/jsx-no-duplicate-props": [
            "error"
        ],
        "react/jsx-no-literals": [
            "error"
        ],
        "react/jsx-no-target-blank": [
            "error"
        ],
        "react/jsx-no-undef": [
            "error"
        ],
        "react/jsx-one-expression-per-line": [
            "error"
        ],
        "react/jsx-curly-brace-presence": [
            "error",
            {
                "props": "never",
                "children": "never"
            }
        ],
        "react/jsx-fragments": [
            "error"
        ],
        "react/jsx-pascal-case": [
            "error"
        ],
        "react/jsx-props-no-multi-spaces": [
            "error"
        ],
        "react/jsx-props-no-spreading": [
            "error"
        ],
        "react/jsx-sort-default-props": [
            "error"
        ],
        "react/jsx-sort-props": [
            "error",
            {
                "shorthandLast": true,
                "reservedFirst": true
            }
        ],
        "react/jsx-tag-spacing": [
            "error"
        ],
        "react/jsx-uses-react": [
            "error"
        ],
        "react/jsx-uses-vars": [
            "error"
        ],
        "react/jsx-wrap-multilines": [
            "error",
            {
                "declaration": "parens-new-line",
                "assignment": "parens-new-line",
                "return": "parens-new-line",
                "arrow": "parens-new-line"
            }
        ]
    }
};