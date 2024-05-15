import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Product Not Found</h2>
      <p>Could not find product with id </p>
      <Link href="/">Return Home</Link>
    </div>
  )
}