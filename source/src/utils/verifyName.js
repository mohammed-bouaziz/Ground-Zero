
export const verifyName = (name) => {
    if (!name.trim()) {
        return new Response(
            JSON.stringify({
                error: "Your Name is Required"
            }),
            {
                status: 400
            }
        );
    }
}