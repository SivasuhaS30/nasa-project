import mars from "../assets/mars.png"
export default function Main({data})
{

    return(
        <main className="Imgcontainer">
            <img src={data?.hdurl} alt="mars " className="bgImg"/>
            {/* <img src={mars} alt="mars " className="bgImg"/> */}
        </main>
    )
}