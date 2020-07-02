# @dxw/eslint-config

Standard ESLint configuration for dxw projects

## Installation

```sh
npm install --save-dev @dxw/eslint-config
```

or

```sh
yarn add --dev @dxw/eslint-config
```

## Usage

Create an `.eslintrc.json` file (or equivalent) in the root directory of your
project:

```json
{
  "extends": ["@dxw"]
}
```

## Caveats

This configuration assumes that you're writing (and therefore linting) ES6 and
that you're using dxw's other standard tools:

- Prettier
- Jest

You may need some additional configuration if that's not the case.

## Related

- [`@dxw/eslint-config-react`](https://github.com/dxw/eslint-config-react)
