


// Example express application adding the parse-server module to expose Parse
// compatible API routes.

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var path = require('path');

const resolve = require('path').resolve;

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}

var api = new ParseServer({
  databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
   push: {
    android: {
      senderId: '139783637603', // The Sender ID of GCM
      apiKey: 'AIzaSyB_2yWQmTn04usSEQWr_hq1ca987xTiOEY' // The Server API Key of GCM
    },
     ios: {
        pfx: 'LBLPushProd.p12',
        passphrase: '', // optional password to your p12/PFX
        bundleId: 'BRICS.LBLFantasyLeagues',
        production: true
      }
    
    
  },
  fileKey: process.env.FILE_KEY || 'b49e7a8a-3b2a-49ae-9e34-b010a7540e52',
  appId: process.env.APP_ID || 'myAppId',
  masterKey: process.env.MASTER_KEY || '', //Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',
  publicServerURL: 'http://lblfantasy.herokuapp.com/parse',
  // Your apps name. This will appear in the subject and body of the emails that are sent.
  appName: 'LBLFantasy',
   emailAdapter: {
   module: 'parse-server-mailgun',
    options: {
      // The address that your emails come from 
      fromAddress: 'LBLFantasy <noreply@lblfantasy.com>',
      // Your domain from mailgun.com 
      domain: 'lblfantasy.com',
      // Your API key from mailgun.com 
      apiKey: 'key-1ab4bd482ab38e8ac4877c6684258454',
       templates: {
        passwordResetEmail: {
          subject: 'Reset your password',
         pathPlainText: resolve(__dirname, 'resetpass.txt'),
          pathHtml: resolve(__dirname, 'resetpass.html'),
          callback: (user) => { return { firstName: user.get('firstName') }}   
     // Now you can use {{firstName}} in your templates 
        }
     
    }
   }
   },
  liveQuery: {
    classNames: ["Posts", "Comments"] // List of classes to support for query subscriptions
  }
});
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

var app = express();

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('I dream of being a website.  Please star the parse-server repo on GitHub!');
});

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
app.get('/test', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('parse-server-example running on port ' + port + '.');
});

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);

