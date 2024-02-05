import { Band, CoverPhoto, Footer, Header, NewReleases, Profile } from "./components";
import profileImage from '../public/profileImage.jpg';
import coverPhoto from '../public/coverPhoto.png';
function App() {

  return (
    <div className="relative">
      <Header imageUrl={profileImage}/>
      <CoverPhoto imageUrl={coverPhoto}/>
      <Profile imageUrl={profileImage} title={"DAN MACE"} channel={"/johny_Films/"}/>
      <Band/>
      <NewReleases/>
      <Footer/>
    </div>
  )
}

export default App;
