import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DownloadPage } from "@/components/download-page"

export const metadata = {
  title: "Tải ứng dụng - Mekong Pathfinder",
  description: "Tải ứng dụng Mekong Pathfinder để tìm đường an toàn, tránh ngập lụt. Miễn phí cho Android."
}

export default function Page() {
  return (
    <>
      <Navbar />
      <DownloadPage />
      <Footer />
    </>
  )
}
