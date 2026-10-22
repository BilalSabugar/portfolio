import { collection, addDoc, getDocs, doc, getDoc } from 'firebase/firestore'
import { db } from './firebase'


export async function getBlogs() {
if (!db) return []
const snap = await getDocs(collection(db, 'blogs'))
return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}


export async function getBlog(slug:string) {
if (!db) return null
const snap = await getDoc(doc(db, 'blogs', slug))
return snap.exists() ? snap.data() : null
}


export async function createBlog(data:any) {
if (!db) throw new Error('Firebase admin is not configured')
return addDoc(collection(db, 'blogs'), data)
}
