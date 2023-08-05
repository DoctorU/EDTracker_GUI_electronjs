# Dev Journal

List of things I've done during this development.

## Done on 2023-08-05
1. Followed the [Electron Quick Start guide](https://www.electronjs.org/docs/latest/tutorial/quick-start).
1. Reorganised a bit to enable React, as per [this article by Daniel Katungi](https://www.section.io/engineering-education/desktop-application-with-react/). Not completely, but moved things to public and build folders.
1. [Created a trello to track all the things!](https://trello.com/b/wsWFeb62/edtracker-kanban)
1. [Upgraded Nodejs to v20 on Ubuntu (PopOS)](https://github.com/nodesource/distributions#debinstall). 
I needed help from [this stackexchange article](https://unix.stackexchange.com/questions/627635/upgrading-nodejs-on-ubuntu-how-to-fix-broken-pipe-error), though.
1. Started researching unit testing via https://www.section.io/engineering-education/node-testing/ .
1. Completed the [HID POC for listing all controllers](https://trello.com/c/WaaY8kQE/8-poc-use-node-hid-library-to-find-all-the-controllers). Added node-hid library.
1. Created a new React app in a subfolder, then merged it with the main app. Following Daniel Katungi's blog (above) to resolve problems.
    1. Found an issue with webpack - [this seemed to solve it](https://github.com/webpack/webpack/issues/15900).
    1. Found [the eslint issue with JSX Runtime](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md) (in latest react, not solved by following the [`package.json` info in my repo](https://github.com/DoctorU/base-react-app/blob/main/package.json#L25C1-L34C5). In the meantime, I've just imported react :( .
    1. I __think__ I've solved it, by [forcing react-scripts version 5.0.1](https://github.com/facebook/create-react-app/blob/main/CHANGELOG.md)
    then force-removing some old babel packages:
    ```
    npm install --save --save-exact react-scripts@5.0.1
    npm uninstall @babel/plugin-proposeal-private-property-in-object babel-preset-react-app
    ```
    Everything seems to be ok now!
