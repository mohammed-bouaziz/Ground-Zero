import { verifyEmail } from "@utils/verifyEmail";
import { checkRes } from "@utils/checkRes";

export const prerender = false;

export const POST = async ({ request }) => {
    try {
        const data = await request.formData();
        const email = data.get("email")

        verifyEmail(email);

        const subscriber = {email};

        const res = await fetch(import.meta.env.PUBLIC_BLOG_API_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(subscriber),
            headers: { "Content-Type": "application/json; charset=UTF-8" }
        });

        checkRes(res);

        const output = await res.json();

        return new Response(
            JSON.stringify({
                message: "Welcome abord",
                data: output
            }),
            {
                status: 200
            }
        );
    } catch (error) {
        return new Response(JSON.stringify({ error: "An unexpected error occurred" }), { status: 500 });
    }
};