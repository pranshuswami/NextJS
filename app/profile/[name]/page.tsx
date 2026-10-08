type ProfilePageProps={
    params:Promise<{
        name:string
    }>
}

export default async function ProfilePage({ params }:ProfilePageProps) {

    const users=[{
        id:1,
        name:"Pranshu",
        email:"pranshu@gmail.com",
        bio:"I am a software developer"
    },
{
        id:2,
        name:"John",
        email:"john@gmail.com",
        bio:"I am a web developer"
},
{
        id:3,
        name:"Jane",
        email:"jane@gmail.com",
        bio:"I am a mobile developer" 
}]

const pageParams =await params

const username=pageParams.name


const user=users.find(user=>user.name.toLocaleLowerCase()===username.toLocaleLowerCase())

    return (
        <div>
            <h1>{user?.name}'s Profile</h1>
            <p>{user?.email}</p>
            <p>{user?.bio}</p>
        </div>
    )
}