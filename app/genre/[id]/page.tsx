type Props = {
    params: {
        id: string
    },
    searchParams: {
        genre: string
    }
};

function GenrePage({params: {id}, searchParams: {genre}}: Props) {
  return (
    <div>
      Welcome to the genre page for {genre}! and ID of {id}
    </div>
  )
}

export default GenrePage
