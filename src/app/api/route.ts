import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server'
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
export async function POST(req) {
  console.log('??1212', process.env.NEXT_PUBLIC_PAPAGO_ID)
  await fetch('http://localhost:3000/v1/translation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-NCP-APIGW-API-KEY-ID': process.env.NEXT_PUBLIC_PAPAGO_ID,
      'X-NCP-APIGW-API-KEY': process.env.NEXT_PUBLIC_PAPAGO,
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(req)
  }).then((res) => {
    console.log('maybe', res)
  })
  // const data = await res.json()
 
  // return NextResponse.json({ data })
}