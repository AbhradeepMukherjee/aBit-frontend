import { Band, CoverPhoto, Footer, Header, NewReleases, Profile } from "./components";

function App() {

  return (
    <div className="relative">
      <Header imageUrl={'/public/profileImage.jpg'}/>
      <CoverPhoto imageUrl={'/public/coverPhoto.png'}/>
      <Profile imageUrl={'/profileImage.jpg'} title={"DAN MACE"} channel={"/Johny_Films/"}/>
      <Band/>
      <NewReleases/>
      <Footer/>
    </div>
  )
}

export default App;
