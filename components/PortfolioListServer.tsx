export async function getProjects() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch projects");
    }
    const projects = await res.json();
    return projects;
}