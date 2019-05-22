# Example app for deploying to Heroku

### Usage

```
npm start
```

### Deployment to Heroku

First ensure that you have the Heroku CLI installed.

Create a Heroku app:

```
heroku create [optional-app-name]
```

Check that a new remote `heroku` was added to the Git repository:

```
git remote -v
```

Type `heroku open` to open the app in browser. `heroku local` serves the locally.

Navigate to the app you created in Heroku dashboard and enable GitHub integration in "Deploy" tab. Connect your repository and enable automatic deploys from `master` branch. Then push to `master` to see your app being automatically deployed.
