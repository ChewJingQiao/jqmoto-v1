"use client"

import { useRef, useState } from "react"
import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import Modal from "@modules/common/components/modal"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const total = images.length
  const current = images[activeIndex]

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + total) % total)
  const goNext = () => setActiveIndex((prev) => (prev + 1) % total)

  return (
    <div className="w-full">
      <div
        className="relative mx-auto max-w-[600px]"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null || total <= 1) return
          const endX = event.changedTouches[0]?.clientX ?? touchStartX.current
          const deltaX = endX - touchStartX.current
          const threshold = 40
          if (deltaX > threshold) {
            goPrev()
          } else if (deltaX < -threshold) {
            goNext()
          }
          touchStartX.current = null
        }}
      >
        <Container className="relative aspect-[1/1] w-full overflow-hidden bg-ui-bg-subtle rounded-2xl">
          {!!current?.url && (
            <div className="absolute inset-0 cursor-zoom-in">
              <Image
                src={current.url}
                priority
                className="absolute inset-0"
                alt={`Product image ${activeIndex + 1}`}
                fill
                sizes="(max-width: 576px) 320px, (max-width: 992px) 520px, 640px"
                style={{ objectFit: "cover" }}
                onClick={() => setOpen(true)}
              />
              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation()
                      goPrev()
                    }}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-grey-10 p-3 text-ui-fg-base shadow-sm"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation()
                      goNext()
                    }}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-grey-10 p-3 text-ui-fg-base shadow-sm"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          )}
        </Container>
      </div>
      {total > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((img, idx) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={[
                "h-1.5 w-6 rounded-full transition",
                idx === activeIndex ? "bg-grey-90" : "bg-grey-30",
              ].join(" ")}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
      <Modal isOpen={open} close={() => setOpen(false)} size="large">
        <Modal.Body>
          <div className="relative h-[70vh] w-full">
            {current?.url && (
              <Image
                src={current.url}
                alt={`Product image ${activeIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 992px) 90vw, 1200px"
              />
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ImageGallery
