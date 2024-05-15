import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react'

interface Props {
    params: {id: string}
}

export async function generateMetadata({ params }:Props): Promise<Metadata> {

    try {
      const { id } = params;

      return {
        title: `#${ id } - Product Detail`,
        description: `Producto Detail ${ id }`
      }
      
    } catch (error) {
      return {
        title: 'Product Detail Error',
        description: 'Cualquier cosa'
      }
    }
  }


function ProductDetail({ params }: Props) {
    const id = parseInt(params.id, 10); // Convert params.id to a number

    if (id > 100) {
        notFound();
    }
    
    return (
        <div>Product Detail {params.id}</div>
    )
}

export default ProductDetail