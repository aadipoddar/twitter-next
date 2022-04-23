import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyC-mUV67-ME_9Guny1MwvOpz79HLrPqNoE',
    authDomain: 'twitter-next-26e3d.firebaseapp.com',
    projectId: 'twitter-next-26e3d',
    storageBucket: 'twitter-next-26e3d.appspot.com',
    messagingSenderId: '41242786778',
    appId: '1:41242786778:web:e786bbd949555393571ee3',
    measurementId: 'G-7F00RMNEDT'
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export default app
export { db, storage }