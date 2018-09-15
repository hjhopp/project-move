# Build Log

Projects never progress in a straight line. Here, I aim to outline what I do, have a place to talk things out to myself, and act as a reference should I forget something I've done.

*How do you get started on your dreams?*
*Start.*

## 8 September 2018

* Start the groundwork for what I want out of this project
  * MVP
* Get React Native up and running
  * Requires using Expo? Meh. Why do you need to make an account for so many services? This is why I want the app to be offline.

Confused by getting started with Expo. Both `create-react-native-app` and `expo` are initialized in a similar way, by running an init command which makes a new folder. I can't run both sequentially, bc you can't use the init command for either if the folder already exists?

*Solution*: cra has expo integrated already. Woo.

Problem: My desktop is hooked up to ethernet, my phone to wifi. Expo needs me to be on the same Wifi connection..
Trying to get ramped up on laptop which is able to connect to wifi.

Dealing with dependency bs.

Can't get app to load on expo .. what is the create-react-native app starter scripting doing?

Wow, getting this started is stupid

*SOLUTION* The link sent through the `npm start` script doesn't work. But, using the link sent from the desktop XDE app *does*.

### Notes

Running Expo in dev mode gives warnings and the ability to do hot fixes / tweaks with immediate visibility, but the app will run slower.
Test performance not in dev mode.

## 9 September 2018

More configuring eslint rules.
Does making an .eslintrc.json automatically make the project lint itself?

### Researching UX Design

* [UI Best Practices](https://www.smashingmagazine.com/2018/02/comprehensive-guide-to-mobile-app-design/)
* [10 Dos and Don'ts of Mobile UI Design](https://theblog.adobe.com/10-dos-donts-mobile-ux-design/)
* [Functional Minimal Web Design](https://www.smashingmagazine.com/2017/10/functional-minimal-web-design/)
* [W3C Guidelines](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)
* [11 Screens You'll Find in Many Successful Apps](https://theblog.adobe.com/11-screens-youll-find-many-successful-mobile-apps/)
* [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/)
* [Google Material Design](https://material.io/design/)
* [WebAIM's Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
* [UI kits for Adobe XD](https://theblog.adobe.com/five-top-ux-designers-five-ui-kits-adobe-xd-now-available-free/)
* [Color Scheme](https://www.smashingmagazine.com/2017/01/underestimated-power-color-mobile-app-design/)

### Guidlines

* One concept per page
* Limited color scheme
* "It's perfect when you can't remove anything more."
* Good UI has a purpose

Installed Adobe XD

## 14 September 2018

I feel like getting stuck on design is going to hold me back
Just get a basic set of wireframes for now

The MVP is a recreation of the current BWF app

* Go through the beginner/intermediate routines outlined above
  * Every movement has a
    * timer / rep count
    * animation
    * progression selection
    * reference to the section in the wiki
* You can select what routine you want before you workout

So you have a

### Main Page

* select from the three main routines

### Routine Page

* option to change progression
* timer / reps
* link to FAQ
* can swipe to previous or next exercise

### Nav Bar

* Go back home
* Nav through routine

I have so much respect for designers now.

## 15 September 2018

Outline all the assets that I need
