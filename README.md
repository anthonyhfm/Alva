# Alva
A Standalone Virtual Launchpad made with JS and React in Electron

## Setting things up

### Windows:

1. Download LoopMidi [here](https://www.tobias-erichsen.de/software/loopmidi.html)
2. Create a new Virtual Midi Port
3. In Ableton: Turn off the input for the virtual midi port
4. In Alva: Go to the View tab and select the Midi Port you want to use. If you cant find it *restart Alva*
5. Playback Ableton Lights just like with a actual Launchpad

### MacOS:
1. Set up a new Virtual Midi Loopback in the Audio Setup App. [Here are Instructions for that](https://www.skratchdot.com/2016/01/creating-virtual-midi-ports-on-osx/)
2. In Ableton: Turn off the input for the virtual midi port
3. In Alva: Go to the View tab and select the Midi Port you want to use. If you cant find it *restart Alva*
4. Playback Ableton Lights just like with a actual Launchpad

## How to build the source code:

This Project is made with NodeJS so open the command line and enter

`npm install`

after this is finished, you can either use

`npm start` to run, or `npm run package` to build the project
