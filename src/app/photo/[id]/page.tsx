export interface PhotoIdProps {
  params: {
    id: number
  }
}

export default function PhotoId({ params }: PhotoIdProps) {
  return <h1>{params.id}</h1>
}
