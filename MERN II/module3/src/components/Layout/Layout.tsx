import Header from "./Header"
import { ProductList } from "../Product/ProductList"
import { Hero } from "../Hero"
export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen container mx-auto">
            <Header />
            <Hero />
            <main className="flex-1">
                <ProductList />
            </main>
        </div>
    )
}