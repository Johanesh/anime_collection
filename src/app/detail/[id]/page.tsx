'use client'

import AnimeDataDetail from "@/pages/AnimeDetail"

export default function AnimeDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <AnimeDataDetail id={id || ""} />
  )
}
