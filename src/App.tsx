import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Custom404 } from './pages/404'
import { Home } from './pages/Home'
import { Meal } from './pages/Meal'

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
