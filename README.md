# PRESENTA Vega-Lite Block

This block displays a [Vega-Lite](https:/www.youtube.com) chart within a [PRESENTA Lib](https://github.com/presenta-software/presenta-lib) document.

## Installation


Please read the installation istructions for official plugins [here](https://lib.presenta.cc/extend/#install-an-official-plugin) using this unique identifier: `block-vegalite`

## Usage

To configure this block use this setting:

```js
{
    type: 'vegalite',
    vega: {...},
    url: '...' // alternative to 'vega' prop
}
```

| Prop name | Description                                          | Default value | Possible values |
| --------- | ---------------------------------------------------- | ------------- | --------------- |
| type      | Define this block type **(required)**                |               | vegalite        |
| vega      | A valid Vega-Lite javascript object                  |               | JS object       |
| url       | The URL that points to a valid Vega-Lite json config |               | A valid URL     |
|           |                                                      |               |                 |

Note that `vega` and `url` are alternatives, one of them needs to be set and valid.