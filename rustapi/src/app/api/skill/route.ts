import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "http://localhost:4100/users"

const API_KEY: string = process.env.DATA_API_KEY as string

export async function GET(request : Request) {
    const origin = request.headers.get('origin')
    const res = await fetch(DATA_SOURCE_URL)

    const data: [] = await res.json()

    return new NextResponse(JSON.stringify(data),{
        headers: {
            'Access-Control-Allow-Origin' : origin || "*",
            'Content-Type': 'application/json'
        }
    })
}



