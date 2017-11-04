# First steps with service workers

## Learning the building blocks of progressive web apps

This code is associated with the blog post [First steps with service workers](https://rodujs.wordpress.com/2017/11/04/first-steps-with-service-workers) on Rodujs.

The code contains an example for starting to create progressive web apps that use a simple service worker to show the concept.

You should open the Chrome DevTools and go to the Network tab. There you can toggle the offline status on and off to see how the app responds in the absence of connectivity.

## Setup an HTTPS connection on localhost

Service workers are only available when using a connection over HTTPS. To use HTTPS with your local server, you will need to follow the instructions below and generate a dummy certificate to use.

Generate an SSL certificate to use with the http-server package:

`openssl req -newkey rsa:2048 -new -nodes -x509 -days 1000 -keyout key.pem -out cert.pem`

I also used these instructions that have worked with both http-server and Express: http://blog.mgechev.com/2014/02/19/create-https-tls-ssl-application-with-express-nodejs/

`openssl rsa -in key.pem -out newkey.pem && mv newkey.pem key.pem`

Then to remove the password request:

`openssl rsa -in key.pem -out newkey.pem && mv newkey.pem key.pem`

## Run the app

To run the app, simply run `npm start`

## Run the Chrome browser to allow self-signed certificates

We need to address additional security measures for using the self-signed certificates we just created.

The next step involves running Chrome under a new (clean) user profile, ignoring errors related to the certificates that the browser may report for security reasons:

`google-chrome --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost:8080`

The command above assumes you are working on Linux. Otherwise, you just need to adjust the *user-data-dir* path and the call to *google-chrome* executable itself.
