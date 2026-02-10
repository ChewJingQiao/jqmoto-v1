import { Text } from "@medusajs/ui"

export default async function Footer() {
  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex w-full items-center justify-center py-10 text-ui-fg-muted">
        <Text className="txt-compact-small">
          © {new Date().getFullYear()} JQMOTO. All rights reserved.
        </Text>
      </div>
    </footer>
  )
}
