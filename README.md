# hashquery

A 1kb library to manage window.location.hash as key=value like query string


## usage

http//foo.com

```javascript
hashquery.set('hello', 'world');
```

http//foo.com#**hello=world**

```javascript
hashquery.set('foo', 'bar');
```

http//foo.com#**hello=world&foo=bar**

```javascript
var x = hashquery.get('hello'); // x = 'world'
```

```javascript
hashquery.del('hello');
```
http//foo.com#**foo=bar**

```javascript
hashquery.del('foo');
```
http//foo.com


## install

```sh
npm install hashquery
```


## usage

### it can be included globally:

```html
<script type="text/javascript" src="node_modules/hashquery/hashquery.iife.js"></script>
<script type="text/javascript">
    hashquery.set('hello', 'world');
    hashquery.set('foo', 'bar');
    var x = hashquery.get('hello'); // x = 'world'
</script>
```


### it can also be used with import:

```javascript
import * as hashquery from 'hashquery';

hashquery.set('hello', 'world');
hashquery.set('foo', 'bar');
var x = hashquery.get('hello'); // x = 'world'
```

see index.html for its usage


# license

MIT