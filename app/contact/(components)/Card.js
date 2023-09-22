import client from "@/app/lib/contentfulClient"

const fetchServices = async () => {
    let response = await client.getEntries({ content_type: "sevives" })


    const services = response.items.map((item) => {
        return {
            title: item.fields.title,
            descriptions: item.fields.descriptions,
            image: item.fields.image.fields.file.url
        }
    })

    return services

}

export default async function Card() {
    const services = await fetchServices()
    console.log("ContentResponse", services)
    return (
        <div className="row">
            {services.map((service) => {
                return (
                    <div className="col-12 col-lg-4">
                        <div className="container text-light pt-2 text-center" id="firstId">
                            <h3>{service.title}</h3>
                            <p>{service.descriptions}</p>
                            <p><img src={service.image} width={200} alt="" /></p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
