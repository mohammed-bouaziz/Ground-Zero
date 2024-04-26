export const verifyEmail = (email) => {
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
        return new Response(
            JSON.stringify({
                error: "A Valid Email is required"
            }),
            {
                status: 400
            }
        );
    }
}