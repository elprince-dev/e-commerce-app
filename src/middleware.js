import { createClient, OAuthStrategy } from "@wix/sdk"
import { NextResponse } from "next/server"

const middleware = async (request) => {

    const cookies = request.cookies
    const response = NextResponse.next()
    if(cookies.get("refreshToken")){
        return response
    }

    const wixClient = createClient({
        auth: OAuthStrategy({ clientId: NEXT_PUBLIC_WIX_CLIENT_ID }),
        });

    const tokens = await wixClient.auth.generateVisitorTokens();
    response.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
        maxAge: 60 * 60 * 24 * 30,
        });
    return response
}

export default middleware