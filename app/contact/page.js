// import client from "../lib/contentfulClient"
import "./contact.css"
import Card from "./(components)/Card"

// const fetchServices = async () => {
//     let response = await client.getEntries({ content_type: "sevives" })


//     const services = response.items.map((item) => {
//         return {
//             title: item.fields.title,
//             descriptions: item.fields.descriptions,
//             image: item.fields.image.fields.file.url
//         }
//     })

//     return services

// }

export default async function Contact() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 my-4">
                    <h1 className="text-light">Home Services</h1>
                </div>
                <div className="col-12">
                    <Card/>
                </div>
            </div>
        </div>
    )
}
