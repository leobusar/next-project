export async function GET() {
    const data = {
      name: 'SvelteKit',
      version: '1.0.0'
    }
   
    return Response.json({ data })
  }