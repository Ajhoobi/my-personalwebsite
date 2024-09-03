import { NextResponse } from "next/server";

const allowedOrigins = process.env.NODE_ENV === 'production'
   ? [, 'http:localhost:3001']
   : ['https://my-personalwebsite-22dj.vercel.app',]

export function middleware(request: Request){
  
    const origin = request.headers.get('origin')
    console.log(origin)

    if(origin && !allowedOrigins.includes(origin) || !origin){

        return new NextResponse(null, {
            status:400,
            statusText:"bad request",
            headers: {
                'Content-Type':'text/plain'
            }
        })
    }

    console.log('middleware')
    console.log(request.method)
    console.log(request.url)


    

    return NextResponse.next()
}

export const config = {
    matcher: 'api/:path*',
}