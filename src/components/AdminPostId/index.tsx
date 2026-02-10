type AdminPostIdProps = {
  params: Promise<{ id: string }>
}

export async function AdminPostId({ params }: AdminPostIdProps) {
  const { id } = await params

  return <div>teste {id}</div>;
}