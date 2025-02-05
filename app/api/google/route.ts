import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<Response> {
  // Parse the request body
    const reqBody: { token: string } = await request.json();
    const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
        return NextResponse.json(
            {
            error: "Recaptcha secret key is not set in the environment variables.",
            success: false,
            },
            { status: 500 }
        );
    }

    try {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${reqBody.token}`;

    // Make the POST request to reCAPTCHA
    const res = await axios.post<{
        success: boolean;
        challenge_ts?: string;
        hostname?: string;
    }>(url);

    if (res.data.success) {
        return NextResponse.json({
        message: "Captcha verification success!!",
        success: true,
        });
    }

    return NextResponse.json(
        {
        error: "Captcha verification failed!",
        success: false,
        },
        { status: 500 }
    );
    } catch (error) {
    console.error("Error during captcha verification:", error);
    return NextResponse.json(
        {
        error: "Captcha verification failed!",
        success: false,
        },
        { status: 500 }
    );
    }
}
