import type { NextApiRequest, NextApiResponse } from 'next'
import data from './data.json'

export function getProducts() {
  return data
}

// 可以使用http://localhost:3000/forum/api/products访问接口
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  } else {
    const products = getProducts()
    res.status(200).json(products)
  }
}
