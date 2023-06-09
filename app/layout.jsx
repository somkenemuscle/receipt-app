'use client'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Styles from '../styles/page.css'
import { AppContextProvider } from '../context/data'
import { DisplayReceiptContextProvider } from '@/context/display'
import { EditReceiptContextProvider } from '@/context/edit'


export const metadata = {
    title: 'Book-Keeper',
    description: 'Book-Keeping for receipts',
}

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:500&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </head>

            <body className='body'>
                <Navbar />
                <AppContextProvider>
                    <DisplayReceiptContextProvider>
                        <EditReceiptContextProvider>
                            {children}
                        </EditReceiptContextProvider>
                    </DisplayReceiptContextProvider>
                </AppContextProvider>
                <Footer />
            </body>
        </html>
    )
}
