export const GET = async (req: Request) => { 
    try {
        const users = [{ name: 'John Doe' }, { name: 'Jane Doe' }]

    return Response.json(users, { status: 200 });

    } catch (error) {

    return Response.json("erro", { status: 200 });
    }
}

