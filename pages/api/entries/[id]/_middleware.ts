import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import mongoose from 'mongoose';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  
    const id = req.page.params?.id || '';

    const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");

    if (!checkMongoIDRegExp.test(id)) {
    // if (!mongoose.isValidObjectId(id)) {

        // return res.status(400).json({message:'No es un Id valido'})
        return new Response(JSON.stringify({message:'No es un Id valido'+id}),{
            status:400,
            headers: {
                'Content-Type':'application/json'
            }
        })

    }

    
  
  
    return NextResponse.next();
}