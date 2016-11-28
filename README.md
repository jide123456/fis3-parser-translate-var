# fis3-parser-translate-var

> a simple fis3 plugin that be use to translate variate, view [source](https://github.com/jide123456/fis3-parser-translate-var)

## usage

```javascript
fis
    .media('prod')
    .match('*.{html,css,js}')
    .parser: [
        fis.plugin('translate-var', {
            maps: {
                __DOMAIN__: 'http://test.cdn.com',
                __PORT__: 8080
            }    
        })
    ]
```

## demo

before
```
// html
<img src="__DOMAIN__:__PORT__/img/img01.jpg" alt="">

// css
.background {background-image: url(__DOMAIN__:__PORT__/bg/bg01.png)}

// js
var url = '__DOMAIN__:__PORT__/resource/list'
```

after
```
// html
<img src="http://test.cdn.com:8080/img/img01.jpg" alt="">

// css
.background {background-image: url(http://test.cdn.com:8080/bg/bg01.png)}

// js
var url = 'http://test.cdn.com:8080/resource/list'
```

## options

### maps | object

a key value use to translate
