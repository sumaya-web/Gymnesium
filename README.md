# Gymnesium

## Use of Prettier Extension in the Workspace

- Open settings
- Go to workspace
- Choose default formatter - `Prettier Code Formatter`
- Choose format on save - `enable`

This will create `.vscode` folder and `settings.json file`.

To set our own `Prettier` styling in our project we need to create a file named `.prettier.json` . Here, we will write down our styling.

### Some Prettier Styling.Elements That I Like

``` json
"semi": true,
"tabWidth": 4,
"singleQuote": true,
"bracketSpacing": false,
"bracketSameLine": true,
"trailingComma": "none",
"arrowParens": "avoid"
```

[Learn Prettier](https://prettier.io/docs/en/)  
[Prettier Configuration](https://prettier.io/docs/en/configuration)  
[Prettier Styling Options](https://prettier.io/docs/en/options)
