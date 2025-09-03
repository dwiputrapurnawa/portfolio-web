import { db } from '@/lib/db';
import { Project } from '@/types/index';

export async function GET() {
    try {
        const [rows] = await db.query("SELECT * FROM projects ORDER BY id DESC");
        return Response.json(rows as Project[]);
    } catch (err: any) {
        return Response.json({ error: err.message }, { status: 500 });
    }
}