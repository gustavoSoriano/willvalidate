# willvalidate

> Validation Forms

Available in [awesome-vue](https://github.com/vuejs/awesome-vue/blob/master/README.md) 

## Setup
#### Install dependencies
``` 
npm install willvalidate --save
``` 

#### Into main.js vuejs (Single File Components)
``` 
import Vue from 'Vue'
import willvalidate from 'willvalidate'
Vue.use(willvalidate)
```

## Usage
#### Ex: within methods 
```
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
```
<script src="./PATH/node_modules/willvalidate/dist/willvalidate.js"></script>
```

#### Use Attr html5 for validation
``` 
Ex: require, maxlength, minlength, type, pattern, min, max and others
```

## Customize
```
# error class 
.has-danger{}

# set errorMessage | optional - if not informed will show default message
Ex: <input type="number" min="5" max="20" errorMessage="Preencha corretamente" required  />
```


[Demo](https://gustavosoriano.github.io/willvalidate/)
