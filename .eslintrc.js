/*eslint-disable*/
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['next/core-web-vitals', 'plugin:storybook/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    //prettier
    'prettier/prettier': 0,
    // disable that monster
    //style
    'array-bracket-spacing': [2, 'never'],
    'arrow-parens': [2, 'always'],
    'brace-style': [2, 'stroustrup'],
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'curly': [2, 'multi-or-nest'],
    'eol-last': [2, 'always'],
    'indent': [2, 'tab', {
      'SwitchCase': 1,
      'ArrayExpression': 1,
      'ObjectExpression': 1,
      'ImportDeclaration': 1
    }],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'linebreak-style': [2, 'unix'],
    'max-len': [2, {
      'code': 130,
      'ignoreComments': true
    }],
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'object-curly-spacing': [2, 'always'],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'semi-style': [2, 'last'],
    'space-in-parens': [2, 'never'],
    'padded-blocks': [2, 'never'],
    //semantics
    'handle-callback-err': 0,
    'no-console': 1,
    'radix': [2, 'as-needed'],
    //react-jsx
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-closing-bracket-location': [2, {
      selfClosing: 'after-props',
      nonEmpty: 'tag-aligned'
    }],
    'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
    'react/jsx-one-expression-per-line': 2,
    'react/jsx-indent': [2, 'tab', {
      indentLogicalExpressions: true,
      checkAttributes: true
    }],
    'react/jsx-indent-props': [2, 'tab'],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [2, {
      'maximum': 1,
      'when': 'multiline'
    }],
    'react/jsx-pascal-case': [2, {
      allowAllCaps: true
    }],
    'react/jsx-tag-spacing': [2, {
      beforeSelfClosing: 'always'
    }],
    'react/jsx-wrap-multilines': [2, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }],
    //react-native
    'react-native/no-inline-styles': 0,
    //typescript
    'no-empty-function': 0,
    '@typescript-eslint/no-empty-function': 1,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/explicit-module-boundary-types': 1,
    'import/first': 0
  }
};