// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   firebase:{
    apiKey: "AIzaSyAC_FLlMiJetKy0qRYGwEm1D_RymfDwGjQ",
    authDomain: "rental-application-exp.firebaseapp.com",
    databaseURL: "https://rental-application-exp.firebaseio.com",
    projectId: "rental-application-exp",
    storageBucket: "rental-application-exp.appspot.com",
    messagingSenderId: "452748343109"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
