# The Backend
The has been a lot of talk how different new technologies will make backend developers useless. Well brace yourselves because the time has come! With The Backend the frontend developers can implement the backend code inside the frontend and all in Javascript!

![javascript](http://www.nikola-breznjak.com/blog/wp-content/uploads/2014/10/scepticKid.jpg)

### Install
```shell
git clone https://github.com/heppu/the-backend.git
npm install
```
### Run
```shell
npm start
```

### Usage examples

Simple hello world
```javascript
var settings = {
  "url": "http://localhost:3000/",
  "method": "POST",
  "headers": {
    "content-type": "text/plain",
  },
  "data": "res.send('Hello World!');"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

List all files in current folder
```javascript
var settings = {
  "url": "http://localhost:3000/",
  "method": "POST",
  "headers": {
    "content-type": "text/plain",
  },
  "data": `
    let exec = require('child_process').exec;
    let cmd = 'ls';
    exec(cmd, function(error, stdout, stderr) {
        res.send(stdout);
    });`
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
* When you execute shell commands always remember to be careful so that you don't accidentally delete anything important!

![eval](http://pbs.twimg.com/media/CQ3sxTBUsAAOkc8.jpg)
