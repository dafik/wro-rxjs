// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCBeBdZVagl17pffQlh1ZMyiJSG9mTHh6Y",
    authDomain: "wro-rxjs.firebaseapp.com",
    databaseURL: "https://wro-rxjs.firebaseio.com",
    projectId: "wro-rxjs",
    storageBucket: "wro-rxjs.appspot.com",
    messagingSenderId: "703600800164"
  }
};
