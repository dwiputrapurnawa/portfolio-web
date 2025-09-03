import { db } from '@/lib/db';
import { Project } from '@/types/index';

export async function GET() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const [rows] = await db.query("SELECT * FROM projects ORDER BY id DESC");
        return Response.json(rows as Project[]);
    } catch (err: any) {
        return Response.json({ error: err.message }, { status: 500 });
    }
}