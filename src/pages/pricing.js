import React from "react"
import { Layout } from "../layout"
import PageHero from "../components/PageHero"
import { PricingSection } from "../components/PricingSection"
import { packagesData } from "../components/PricingSection/data"
const PricingPage = () => {
  return (
    <Layout>
      <PageHero
        title="affordable pricing for everyone"
        text="Choosing Car Wash is a constant process in the life of every motorist. We try to give you only positive emotions. Entrust your car cleaning to our professionals."
      />
      <PricingSection washes={packagesData} />
    </Layout>
  )
}

export default PricingPage
