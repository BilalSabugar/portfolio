import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'


export const isAdmin = (user: any) => {
return user && user.uid === process.env.NEXT_PUBLIC_ADMIN_UID
}


export const observeAuth = (cb: (u:any)=>void) =>
auth ? onAuthStateChanged(auth, cb) : (() => { cb(null); return () => {}; })()
