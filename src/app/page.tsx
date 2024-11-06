import CardsList from "@/components/CardsList"
import { allTournaments } from "@/lib/queries/tournament"

export default async function Home() {
  const tournaments = await allTournaments()

  return <CardsList tournaments={tournaments} />
}
