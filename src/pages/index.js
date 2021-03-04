import React from "react"
import { aboutData } from "../components/About/data"
import { detailsTitle, detailsData } from "../components/Details/data"
import { techCard, washCard } from "../components/CTA/data"

import {
  brandData,
  reviewData,
  testimonialData,
} from "../components/Testimonial/data"
import { Layout } from "../layout"
import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { Details } from "../components/Details"
import { CTA } from "../components/CTA"
import { Testimonial } from "../components/Testimonial"
import { Subscribe } from "../components/Subscribe"
import { subscribeData, couponData } from "../components/Subscribe/data"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About data={aboutData} />
      <Details title={detailsTitle} data={detailsData} />
      <CTA wash={washCard} tech={techCard} />
      <Testimonial
        review={reviewData}
        data={testimonialData}
        brands={brandData}
      />
      <Subscribe data={subscribeData} coupon={couponData} />
    </Layout>
  )
}

export default IndexPage
