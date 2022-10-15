import React, { useEffect, useState } from "react";


function App() {
    const [dogpic, setDogpic] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                setDogpic(data.message)
            })
    }, [])
    console.log(dogpic)
    if (!dogpic) return <p>Loading...</p>
    return (
        <img src={dogpic} alt="A Random Dog"></img>
    )

}

export default App