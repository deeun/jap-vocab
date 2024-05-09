import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}
let data
export async function ENG_KOR_TRANSLATE(req: any) {
  const res = await fetch('http://localhost:3000/v1/translation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-NCP-APIGW-API-KEY-ID': process.env.NEXT_PUBLIC_PAPAGO_ID,
      'X-NCP-APIGW-API-KEY': process.env.NEXT_PUBLIC_PAPAGO,
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(req)
  })

  const data = await res.json();
  return data.message.result;
}
