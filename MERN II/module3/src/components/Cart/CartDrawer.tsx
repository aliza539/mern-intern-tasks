

import * as React from "react"
import { Trash, ShoppingCart } from "lucide-react"



import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer"
import { Button } from "../ui/button"
import useCartStore from "../../stores/useCartStore"

export function CartDrawer() {
    const [goal, setGoal] = React.useState(350)

    function HandleDelete(id: number) {
        console.log("delete", id);
    }
    const { products, removeFromCart } = useCartStore();
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline"> <ShoppingCart /> Cart</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Cart</DrawerTitle>
                        <DrawerDescription>The products on your cart</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">

                        {products.map((product) => (
                            <div key={product.id}>
                                <img src={product.image} alt={product.name} width="50" />
                                <span>{product.name} - ${product.price}</span>
                                <button onClick={() => removeFromCart(product.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <DrawerFooter>
                        <Button>Pay</Button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
