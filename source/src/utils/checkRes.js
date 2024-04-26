export const checkRes = async (res) => {
    if (!res.ok) {
        const error = await res.json();
        return new Response(JSON.stringify({ error: error.message || "Server error" }), { status: res.status });
    }
}