import { Checkout } from '@tipser/tipser-elements'
import { useRouter } from 'next/router'

export default function ConfirmationPage() {
    const router = useRouter();
    const transactionId = router.query.klarnaTransactionId;

    return <div>
        <div>Confirmation page</div>
        <Checkout isConfirmation={true} confirmationTransactionId={transactionId} />
    </div>
}