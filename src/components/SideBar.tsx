import { Button } from '../components/Button';
import {GenreResponseProps , MovieProps} from '../App'

interface SideBarProps{
  genres: GenreResponseProps[]
  selectedGenreId: number
  onClick:(id:number)=> void
}
export function SideBar({genres, selectedGenreId, onClick}: SideBarProps) {
  return(
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => onClick(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  )
}