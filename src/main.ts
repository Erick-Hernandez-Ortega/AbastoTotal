import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from './environments/environments';
import { getFirestore } from "firebase/firestore";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);