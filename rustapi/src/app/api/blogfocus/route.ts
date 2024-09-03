
import { NextResponse}  from "next/server"
const DATA_SOURCE_URL = "https://backend-five-sooty.vercel.app/data/blogfocus?id="

export async function GET(request: Request) {
const origin = request.headers.get('origin')




try{

    const { searchParams} = new URL(request.url)
    const id = searchParams.get('id') || '';
    const idInt = parseInt(id, 10)
    
    const paraMeter = searchParams.hasOwnProperty('id')
    console.log(typeof id)
   

    
    if (id === '' || isNaN(idInt)  ){
        const message = {message:'invalid parameter or id is requird'}
        return new NextResponse(JSON.stringify(message),{
            headers: {
                'Access-Control-Allow-Origin' : origin || "*",
                'Content-Type': 'application/json'
            }
        }) 
    } else {
        const res = await fetch(DATA_SOURCE_URL+id)
        const data: [] = await res.json()
        const message =  JSON.stringify(data)
        return new NextResponse(message,{
            headers: {
                'Access-Control-Allow-Origin' : origin || "*",
                'Content-Type': 'application/json'
            }
        })
    }
} catch(error) {
    
    if(error){
        const message = {message:'internal server error'}
        return new NextResponse(JSON.stringify(message),{
            headers: {
                'Access-Control-Allow-Origin' : origin || "*",
                'Content-Type': 'application/json'
            }
        })

    }
}


}