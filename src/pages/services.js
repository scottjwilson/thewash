import React from "react"
import { Layout } from "../layout"
import PageHero from "../components/PageHero"
import { ServicesSection } from "../components/Services"
import { serviceData } from "../components/Services/data"

const ServicesPage = () => {
  return (
    <Layout>
      <PageHero
        title="its time to check out services"
        text="Choosing Car Wash is a constant process in the life of every motorist. We try to give you only positive emotions. Entrust your car cleaning to our professionals."
      />
      <ServicesSection services={serviceData} />
    </Layout>
  )
}

export default ServicesPage
