import Button from "@/components/Button";
import FilterUsers from "@/FilterUsers";


export default async function linkedin(){

    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return(
        <div>
            <h1> LinkedIn</h1>
            
            <FilterUsers users={users}/>
        </div>
    )
}