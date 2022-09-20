import { Footer, Navbar } from 'components'
import { Custom404, Home, Meal } from 'pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="flex min-h-screen flex-col">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/meal" element={<Meal />} />
                        <Route path="*" element={<Custom404 />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
