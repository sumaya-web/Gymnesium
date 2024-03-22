# Gymnesium

Project: **Gymnesium**.  

The project is created using Bootstrap v5.3.x (latest). This project uses some jquery plugins like Slick-slider, VenoBox, & Counterup Js. Here, the flat icons are also used.

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

### Responsive Media Breakpoints [Typical Device Breakpoints]

``` css
@media (max-width: 1400px) {
    /* xxl */
}

@media (min-width: 1200px) and (max-width: 1399px) {
    /* xl device */
}

@media (min-width: 992px) and (max-width: 1199px) {
    /* lg device */
}

@media (min-width: 768px) and (max-width: 991px) {
    /* md device */
}

@media (min-width: 576px) and (max-width: 767px) {
    /* sm device */
}

@media (min-width: 0px) and (max-width: 575px) {
    /* xs device */
}
```
