# textfield-exmple

Install and build

1. yarn install
2. yarn build

## Problem 1: Textfield types seem to have some issues

On the `master` branch compilation produces:

```
ERROR in [at-loader] ./node_modules/@atlaskit/textfield/dist/cjs/theme.d.ts:19:66 
    TS2694: Namespace '"/path-to-my-project/textfield-example/node_modules/@atlaskit/theme/dist/cjs/components"' has no exported member 'Theme'.
```

## Problem 2: Requires emotion 

Seems we require emotion dependency. Compile branch `without-emotion` to see what happens if we do not install emotion and do not `import "@emotion/core"` in `index.tsx`.

```
ERROR in [at-loader] ./node_modules/@atlaskit/textfield/dist/cjs/theme.d.ts:19:66 
    TS2694: Namespace '"/path-to-my-project/textfield-example/node_modules/@atlaskit/theme/dist/cjs/components"' has no exported member 'Theme'.

ERROR in [at-loader] ./node_modules/@atlaskit/textfield/dist/cjs/components/Textfield.d.ts:3:86 
    TS2344: Type '"start" | "hidden" | "color" | "content" | "size" | "style" | "default" | "wrap" | "open" | "multiple" | "disabled" | "cite" | "data" | "form" | "label" | "span" | "summary" | "title" | ... 352 more ... | "wmode"' does not satisfy the constraint '"start" | "hidden" | "color" | "content" | "size" | "style" | "default" | "wrap" | "open" | "multiple" | "disabled" | "cite" | "data" | "form" | "label" | "span" | "summary" | "title" | ... 353 more ... | "translate"'.
  Type '"css"' is not assignable to type '"start" | "hidden" | "color" | "content" | "size" | "style" | "default" | "wrap" | "open" | "multiple" | "disabled" | "cite" | "data" | "form" | "label" | "span" | "summary" | "title" | ... 353 more ... | "translate"'.

ERROR in [at-loader] ./node_modules/@atlaskit/textfield/dist/cjs/components/Textfield.d.ts:5:85 
    TS2344: Type '"start" | "hidden" | "color" | "content" | "size" | "style" | "default" | "wrap" | "open" | "multiple" | "disabled" | "cite" | "data" | "form" | "label" | "span" | "summary" | "title" | ... 352 more ... | "wmode"' does not satisfy the constraint '"start" | "hidden" | "color" | "content" | "size" | "style" | "default" | "wrap" | "open" | "multiple" | "disabled" | "cite" | "data" | "form" | "label" | "span" | "summary" | "title" | ... 353 more ... | "translate"'.
  Type '"css"' is not assignable to type '"start" | "hidden" | "color" | "content" | "size" | "style" | "default" | "wrap" | "open" | "multiple" | "disabled" | "cite" | "data" | "form" | "label" | "span" | "summary" | "title" | ... 353 more ... | "translate"'.

ERROR in [at-loader] ./src/index.tsx:8:14 
    TS2741: Property 'css' is missing in type '{ name: string; defaultValue: string; label: string; isRequired: true; }' but required in type 'Pick<Pick<Pick<PublicProps, "start" | "hidden" | "color" | "content" | "size" | "style" | "default" | "wrap" | "open" | "multiple" | "disabled" | "cite" | "data" | "form" | ... 356 more ... | "wmode"> & RefAttributes<...>, "start" | ... 369 more ... | "wmode"> & RefAttributes<...> & WithContextProps, "start" | ... 3...'.

``` 
