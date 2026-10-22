'use client'
import { useState } from 'react'
import { createBlog } from '@/lib/firestore'
import AdminGuard from '@/components/AdminGuard'


export default function AdminBlogs() {
const [title,setTitle]=useState('')
const [content,setContent]=useState('')


const save = async () => {
await createBlog({
title,
slug: title.toLowerCase().replace(/\s+/g,'-'),
content,
createdAt: Date.now()
})
alert('Blog published')
}


return (
<AdminGuard>
<div className="p-10 space-y-4">
<input className="bg-black border p-2 w-full" placeholder="Title" onChange={e=>setTitle(e.target.value)} />
<textarea className="bg-black border p-2 w-full h-40" placeholder="HTML Content" onChange={e=>setContent(e.target.value)} />
<button onClick={save} className="bg-green-600 px-4 py-2">Publish</button>
</div>
</AdminGuard>
)
}