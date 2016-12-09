# Drops

# Team
----------
  Joe Iaquinto iaquij@rpi.edu
  Brendan Courson coursb@rpi.edu
  
  Help from Chris Dower @Cdower

# Description
----------

Drops is a flexible event planning mobile and web app that simplifies the process to the 5 W’s: Who, What, When, Where, Why, and How? A Drop created by a user can be as detailed or open-ended as they choose by allowing guests to suggest activities, locations, and times they are available. 
Drops provides a sleeker approach to gathering your friends and taking your group chat plans to the real world because Facebook events are too inflexible and cumbersome to set up. Facebook Events Yes/ Maybe/ No does not give reliable data on when you could reschedule to allow more people to join you. Drops will utilize a built in when-is-good system to help Drop creators democratically decide when is best. Other flexible meeting and event planning solutions like [Fasterplan](http://www.fasterplan.com/) are geared towards the business world and lack integration with major social media platforms.

# Progress

For Fall 2016 we created a barebones app in Exponent and started work on a [RESTful API backend](https://github.com/JoeIaquinto/drops-backend) to serve data to the app. Throughout the semester we also experimented with other web frameworks to try to find a better fit for the Drops project and educate ourselves on web app design. A few basic implementations we worked on were [drops-phoenix](https://github.com/JoeIaquinto/drops-phoenix) and [drops-angular](https://github.com/JoeIaquinto/drops-angular). We created some mockups of UIs for Drops and researched methods in React Native to implement them.

Progress and documentation for our several other repos can be found in their README.

Documentation can be located throughout with inline comments, in APIDocs.md, and on Exponent and React Native documentation

# Goals
----------
## Create the main Drop screen
 
This will be the core of the user experience in Drops. Users create, edit, and interact with a Drop. It is critical that the Drop creation process be simple and quick to complete. Hopefully Drops can save people time and energy so they can come together with their friends and turn their online plans into real life experiences. 

## Getting Started

- [x] Create barebones app in React-Native
- [x] Create editable fields for the Drop ( 5 W’s) - For RESTful API

**Who?**

- [ ] Add Facebook login authentication
- [ ] Add FB Graph API for friend data
- [ ] Enable Drop invitations
- [ ] Allow admins to set visibility on Drop
- [ ] Degree of separation set by the creator limits the size of the Drop

**What?**

- [x] Allow Admins to set an activity for the drop
- [ ] Populate field with searchable suggestions for Drop activities
- [ ] Enable straw poll suggestions from users
- [ ] Enable straw poll voting

**When?**

- [ ] Implement custom When-Is-Good system
- [ ] Allow Admins to adjust duration
- [ ] Allow admins to finalize time
- [ ] Notify users that responded to the when-is-good when time is finalized

**Where?**

- [ ] Allow Admins to set a location or create a poll
- [ ] Add custom Where-Is-Good educated polling
 - [ ] Google Places ratings
 - [ ] Straw poll voting

**Why?**

- [ ] Text field for why the Drop was made

## Home

Outside of the Drop screen, there needs to be a place to manage Drops and see what local public Drops are happening.  There also could be a feed of Drops the user’s friends are going to.

- [ ] Allow users to view invites
- [ ] Allow users to view upcoming and past Drops
- [ ] Allow users to see local public Drops
- [ ] Allow users to see what Drops their friends are going to

## Bonus Drop Features

- [ ] Advanced Drop permission control
 - [ ] Allow admins of the Drop to be set other than the Creator
- [ ] Enable commenting on Drops
 - [ ] Stickied comments for Admins

## Moonshots

- [ ] Make web and mobile web friendly
- [ ] Venmo or Tilt integration for Drop funding
- [ ] Add Messenger and Slack Drops integration to create a drop right from a group chat
- [ ] Automatically make a messenger group/ slack channel for the Drop.
  
# Team Commitments
----------

I am currently looking for more students to work on Drops with me. This would help split up the work and also get another vision for how the UX should be designed and improved. It would also be very helpful to have a teammate that is well-versed in React and mobile development.

