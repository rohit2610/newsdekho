# News Dekho

News Dekho is a single-screen app for news.

## Preview

![gif preview]

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)


## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [async storage](https://reactnative.dev/docs/asyncstorage) local storage libray.
- [react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler) API exposing platform native touch and gesture system to React Native.
- [react-native-splash-screen](https://www.npmjs.com/package/react-native-splash-screen) libary to show and hide splash screen

## Folder structure

Folder structure followed by this project:

- `src`
  - `api`: Contains all the apis.
  - `hooks`: Contains all the custom hooks.
  - `screen`: Contains screen wise code
    - `home`: Screen Name (Example)
      - `assets`- Contains all the assets of home screen
      - `components`- Contains all the sub components of home screen
      - `index.js`


- `App.js`
- `index.js`

## Running the project

- Clone this project
```
git clone < project-url.git >
```

- [Install NodeJS](https://nodejs.org/en/) on your computer.

- [Install yarn](https://yarnpkg.com/en/docs/install) on your computer
> Yarn is a dependency manager built by facebook and google. It is a more efficient and reliable (thanks to yarn.lock) alternative of npm.

- Launch ``` yarn ``` command in a terminal opened in the project folder.
> This command will look into the *package.json* file and install all the dependencies listed here.

- Install react-native-cli globally on your computer
```
yarn global add react-native-cli
```

### Android steps

- Launch a virtual android device [(through *Android Studio* for instance)](https://developer.android.com/studio/run/managing-avds.html#viewing)

> If you have never installed any android virtual device, [follow those instructions](https://developer.android.com/studio/run/managing-avds.html#createavd)

- Then, run the project in executing on your project folder:

```
yarn android
```
