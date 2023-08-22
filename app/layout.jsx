import '@styles/globals.css'
import Navbar from '@components/Layout/Navbar/Navbar'
import Footer from '@components/Layout/Footer/Footer'
import Provider from '@components/Provider'
// import Preloader from '@components/Layout/Preloader/Preloader'

export const metadata = {
    title: "Djoby",
    description: "Trouver facilement du travaille ou de l'aide directement grace aux offres de travaille de particuliers a particulier.",
}

const RootLayout = ({ children }) => {
  return (
    <html lang='fr'>
        <body>
          {/* <Provider> */}
            <main className='app'>
                <Navbar />
                {children}
                <Footer />
            </main>
          {/* </Provider> */}
        </body>
    </html>
  )
}

export default RootLayout