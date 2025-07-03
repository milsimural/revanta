import Header from './Header'
import Footer from './Footer'
import CookieConsent from './CookieConsent'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-white">
      <Header />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  )
}
