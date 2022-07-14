import Travel from "./Travel";
import data from "./data";

export default function Main() {
    const travels = data.map(travel => {
        return(
            <Travel 
                key={travel.id}
                {...travel}
            />
        )
    })
    return(
        <main>
            {travels}
        </main>
    )
}