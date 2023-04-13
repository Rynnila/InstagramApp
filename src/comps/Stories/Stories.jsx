import './Stories.css';
import Story from './Story/Story';
import imgStory1 from './imagens/kayblackperfil.jpg';
import imgStory2 from './imagens/lana-delrey.webp';
import imgStory3 from './imagens/veighperfil.jpg';
import imgStory4 from './imagens/franksinatra.jpg';
import imgStory5 from './imagens/sidoka.jpg';
import imgStory6 from './imagens/matue.jpg';

function Stories(){
  return(
    <div className='Stories'>
      <Story imgStory={imgStory1} nome="KayBlack"/>
      <Story imgStory={imgStory2} nome="Lana Del Rey"/>
      <Story imgStory={imgStory3} nome="Veigh"/>
      <Story imgStory={imgStory4} nome="Frank Sinatra"/>
      <Story imgStory={imgStory5} nome="Sidoka"/>
      <Story imgStory={imgStory6} nome="Matue"/>
    </div>
  )
}
export default Stories;