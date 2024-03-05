export interface UserProfileProps {
  params: {
    user: string
  }
}

export default function UserProfile({ params }: UserProfileProps) {
  return <h1>{params.user}</h1>
}
