# willvalidate

> Validation Forms

Available in [awesome-vue](https://github.com/vuejs/awesome-vue/blob/master/README.md)
<br>
Available in [npm](https://www.npmjs.com/package/willvalidate) 


## Setup
#### Install dependencies
``` 
npm install willvalidate --save
``` 

#### Into main.js vuejs (Single File Components)
```js
import Vue from 'Vue'
import willvalidate from 'willvalidate'
Vue.use(willvalidate)
```

## Usage
#### Ex: within methods 
```js
export default {
  methods:{
    sendForm()
    {
       this.willvalidate( document.querySelector("#form") ) ? console.log("ok") : console.log("error")
    }
  }
}
``` 

## Or in script tag
```html
<script src="./PATH/node_modules/willvalidate/dist/willvalidate.js"></script>
```

#### Use Attr html5 for validation
``` 
Ex: require, maxlength, minlength, type, pattern, min, max and others
```

## Customize
```html
# error class 
.has-danger{}

# set errorMessage | optional - if not informed will show default message
Ex: <input type="number" min="5" max="20" errorMessage="Preencha corretamente" required  />
```


[Demo](https://gustavosoriano.github.io/willvalidate/)
