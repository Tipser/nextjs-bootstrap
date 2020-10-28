import { useRouter } from 'next/router'
import { Product, Cart } from '@tipser/tipser-elements'

export default function ProductPage() {
    const router = useRouter();
    const { id } = router.query;
    return <div>
        <div>Product page</div>
        <Cart />
        <Product productId={id} viewMode="full" />
    </div>
}