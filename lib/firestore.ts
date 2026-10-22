import { collection, addDoc, getDocs, doc, getDoc } from 'firebase/firestore'
import { db } from './firebase'


export async function getBlogs() {
const snap = await getDocs(collection(db, 'blogs'))
return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}


export async function getBlog(slug:string) {
const snap = await getDoc(doc(db, 'blogs', slug))
return snap.exists() ? snap.data() : null
}


export async function createBlog(data:any) {
return addDoc(collection(db, 'blogs'), data)
}