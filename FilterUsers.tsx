"use client"
type User={
    id:number
    name:string
    username:string
 }

import {useState} from "react"

export default function FilterUsers({ users }: { users: any[] }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredUsers = users.filter((user: User) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <input 
            type="text"
            placeholder="Search users"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded p-2 mb-4"
            />
            <ul>
                {filteredUsers.map((user: User) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}