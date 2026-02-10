"use server"

import { sdk } from "@lib/config"
import { getCacheOptions } from "./cookies"
import { HttpTypes } from "@medusajs/types"

export const listProductTypes = async (): Promise<HttpTypes.StoreProductType[]> => {
  const next = {
    ...(await getCacheOptions("product-types")),
  }

  const { product_types } = await sdk.client.fetch<{
    product_types: HttpTypes.StoreProductType[]
  }>("/store/product-types", {
    method: "GET",
    next,
    cache: "force-cache",
  })

  return product_types || []
}
