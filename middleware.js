import { NextResponse } from 'next/server'

export function middleware(req) {
  const res = NextResponse.next()
  
  res.headers.set('Access-Control-Allow-Credentials', true)
  res.headers.set('Access-Control-Allow-Origin', '*')
  res.headers.set(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  )

  res.headers.set(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  return res
}

export const config = {
  matcher: '/api/:locale/:path*',
}