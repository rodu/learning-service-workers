# First steps with service workers

## Learning the building blocks of progressive web apps

This code contains a simple example for learning the basics of Progressive Web Apps and uses a simple service worker to show the concept.

You should open the Chrome Dev-Tools and go to the Network tab. There you can toggle the offline status ON and OFF to see how the app responds in the absence of connectivity.

## Run the app

To run the app, simply run `npm start`

### Please Note
**Service workers need a trusted host to activate, which means they are to be served over HTTPS!**
They activate when serving from localhost, because that is treated as a trusted host by most browsers.
