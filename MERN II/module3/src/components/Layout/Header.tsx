import { CartDrawer } from "../Cart/CartDrawer"
import { Coins } from "lucide-react"
const Header = () => {
    return (
        <header>
            <div className="container mx-auto flex justify-between items-center py-8">
                <h1 className="text-2xl font-bold flex items-center gap-2"> <Coins />The Coin Shop</h1>
                <div className="flex items-center gap-4">
                    <CartDrawer />
                </div>
            </div>
        </header>
    )
}
export default Header
