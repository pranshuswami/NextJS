type CardProps={
    title:string
    description:string
}


export default function Card({title, description}:CardProps){

    return (
        <div className=" m-3 card p-4 rounded shadow-md w-fit bg-gray-700">
            <h1 className="text-lg font-bold capitalize">{title}</h1>
            <p className="text-lg font-medium capitalize">{description}</p>
        </div>
    )
}