# `@wearedxw/eslint-config`

Standard ESLint configuration for dxw projects

## Installation

```sh
npm install --save-dev @wearedxw/eslint-config
```

or

```sh
yarn add --dev @wearedxw/eslint-config
```

## Usage

### Vanilla JavaScript / TypeScript

Create an `.eslintrc.json` file (or equivalent) in the root directory of your
project:

```json
{
  "extends": ["@wearedxw/eslint-config"]
}
```

### React

Create an `.eslintrc.json` file (or equivalent) in the root directory of your
project:

```json
{
  "extends": ["@wearedxw/eslint-config/react"]
}
```

#### Library

For libraries, we want to ensure we provide prop types for React components,
even when using TypeScript, as consumers of a library built with TypeScript
might be using JavaScript and so not benefit from type checking.

In this case, instead of extending `@wearedxw/eslint-config/react`, extend
`@wearedxw/eslint-config/react-library`:

```json
{
  "extends": ["@wearedxw/eslint-config/react-library"]
}
```

## Caveats

This configuration assumes that you're writing (and therefore linting) ES2020
and that you're using dxw's other standard tools:

- Prettier
- Jest

You may need some additional configuration if that's not the case.
