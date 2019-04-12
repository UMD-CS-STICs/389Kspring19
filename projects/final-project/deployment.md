# Deploying using `now`

You can deploy your midterm project using a neat little utility called [now](https://zeit.co/now).

To get started, install both the desktop client and the command line application.

**Desktop Client**

1. Visit https://zeit.co/download
2. Click Download Now
3. Create an account (you will need to verify your email address)

**Command Line Client**

1. Run `sudo npm install now -g` to install. If that doesn't work, try running `sudo npm install now -g --unsafe-perm`.
2. Run `now --login` and authenticate yourself using the same email.


### How to Deploy
-----------------

Navigate to an exising project, open up `package.json`.

You should already have a `script` key that looks like this:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

We want to add one more command called `start` to tell `now` what command to use to start our server.

```javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js" /* Add this */
},
```

Now simply run `now deploy`.

That's literally it. You should have a link copied to your clipboard. Paste it into your browser, and view your live application!

### Enviroment Variables
------------------------

One really cool feature of `now` is the ability to view the source code of a live website. If you append `/_src/` to the URL, you can view all of the server-side files.

BUT we don't want to display our enviroment variables. So instead of putting it in our .env file (which is now public to everyone), we run:

`now deploy -e MONGODB="mongo url here"`

Or, if you want to use the `.env` file as is, run:

`now deploy --dotenv`

And it will turn your `.env` file into a `-e` command automatically.



# Deploying using `Heroku`
Visit the Heroku website here: https://www.heroku.com/ and register for an account.

Go to your dashboard page and in the top right corner there should be a `New` button, click on it and select `Create new app`.

Name your new application. This will be what users will enter into the url to get to your application. You can change this later in the `Settings` tab of that project later.

After confirming, you should be in the `Deploy` tab. From here, go down to the `Deployment Method` section and choose the `GitHub` option. Connect your github account in the `Connect to GitHub` section. After doing so, choose the GitHub repository that you want to deploy from.

If you wish to have Heroku automatically deploy, choose the `Enable Automatic Deploys` option. The `Choose a branch to deploy` option essentially entails where Heroku will listen for updates to your application. We will stick with the master branch for now. Now, whenever you push a commit to the master branch, Heroku will automatically update your application.

Note: You may need to manaully deploy from time to time. You can find the option to do so at the very bottom in the `Manual deploy` section.

## index.js Changes
------------------------
Notice how in our index.js we originally had:
```
app.listen(3000, function() {
    console.log('Listening!');
});
```
This tells our local instance to listen on a specific port that we want assigned to it. Since this is our local machine we can designate our application to preoccupy a certain port. Now when we are deploying, the deployment service will instead assign a port to the end user since not all applications can run on port 3000. So we need to change our code to compensate for that:
```
app.listen(process.env.PORT || 3000, function() {
    console.log('Listening!');
});
```
This tells our server to either use a port that the environment provides or we statically assign one.
