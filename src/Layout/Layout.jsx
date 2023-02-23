import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import './Layout.css'

export default function Layout(){
    return (
        <div className="layout-top-margin">
            <Header />
            <main>
                <Outlet></Outlet>
            </main>
            <Footer />
        </div>
    )
}