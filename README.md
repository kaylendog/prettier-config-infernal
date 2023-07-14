# prettier-config-infernal

A personalized Prettier config from the depths of hell.

## Quick Start

Install the package, along with Pretter:

```
npm install --save-dev prettier prettier-config-infernal
```

Create a `.prettierrc.json` file in the root of your project:

```json
"prettier-config-infernal"
```

## Options

This config enforces the following formatting rules:

- Tabs for indentation
- Double quotes for strings
- LF line endings - you should change this if you're on Windows
- Trailing commas
- Arrow parentheses
- Print width of 100 characters - works nicely on my 2k monitor with 2 windows side-by-side

### Overrides

The config includes a couple of overrides for specific file types, which are listed below.

#### YAML

- 4 spaces for indentation - tabs tend to break YAML files

## License

This project is licensed under the MIT License - see the
[LICENSE](https://github.com/kaylendog/prettier-config-infernal/blob/main/LICENSE) file for details.
