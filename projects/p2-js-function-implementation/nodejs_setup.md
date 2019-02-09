Node.js Setup
----------------------------------------


### Download Node.js

1. Visit [https://nodejs.org/en/download/current/](https://nodejs.org/en/download/current/)

2. Switch version to `Current (Latest Features)`

3. Select the installer for your platform

4. Go through the steps required to run the installer on your platform

### Verify it works

1. Open up terminal/command prompt.

2. Enter the following sequence of commands
   (Run line by line. Do not include $ signs).
```
OSX / Linux
$ mkdir test
$ cd test
$ touch index.js
$ npm init --yes
$ echo "console.log('test')" > index.js
$ node index.js
```

```
Windows
$ mkdir test
$ cd test
$ npm init --yes
$ echo console.log("test") > index.js
$ node index.js
```

You should see `test` outputted in your terminal, and the files `index.js` and `package.json` in your current directory.
