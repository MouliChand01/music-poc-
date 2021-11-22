let MusicAlbum = [];
let ArtistsData = [];
let TitlesData = [];
let GenreData = [];

function addAlbumJsonToList(){
    for (let albumInfo of albumList) {
        const album = new Album();
        album.init(albumInfo.album_id, albumInfo.name, albumInfo.titles, albumInfo.artists,albumInfo.genre, albumInfo.year);
        MusicAlbum.push(album);
      }
}
function addArtistJsonToList(){
    for (let artistObject of artistList) {
        const artist = new Artist();
        artist.init(artistObject. artist_id, artistObject.name, artistObject.albums, artistObject.genre,artistObject.profession);
        ArtistsData.push(artist);
      }
}
function addTitleJsonToList(){
    for (let titleObject of titleList) {
        const title = new Title();
        title.init(titleObject.title_id,titleObject.title_name,titleObject.writer, titleObject.singer,titleObject.director);
        TitlesData.push(title);
      }
}
function addGenreJsonToList(){
  for (const genreObject of genreList) {
    const gen = new Genre();
    gen.init(genreObject.genre_id, genreObject.genre_name);
    GenreData.push(gen);
   
  }
}
function show(ele) {
  // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
  var msg = document.getElementById('msg');
  msg.innerHTML = 'Selected Movie: <b>' + ele.options[ele.selectedIndex].text + '</b> </br>' +
    'ID: <b><input type = text id="albumIdCondition"  value =  ' + ele.value + '><button id="pidConditionBtn" onclick="getAlbumDetails();">Get Album Information</button>';
}
function showTitles(element) {
  // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
  var msg = document.getElementById('titleMsg');
  msg.innerHTML = 'Selected Title: <b>' + element.options[element.selectedIndex].text + '</b> </br>' +
    'ID: <b><input type = text id="titleIdCondition"  value =  ' + element.value + '><button id="pidTitleBtn" onclick="getTitleDetails();">Get Title Information</button>';
}
function showArtist(artistElement){
  var artistMsg = document.getElementById('artistMsg');
  artistMsg.innerHTML = 'Selected Artist: <b>' + artistElement.options[artistElement.selectedIndex].text + '</b> </br>' +
    'ID: <b><input type = text id="artistIdCondition"  value =  ' + artistElement.value + '><button id="pidConditionBtn" onclick="getArtistDetails();">Get Artist Information</button>';

}
function getAlbumData(){
  for (const album of MusicAlbum) {
    const  album_id = album.album_id;
    let currentAlbum = null;
    currentAlbum  = getMusicList(album_id);
    if(currentAlbum == null){
      return null;
    }
    for(const title of TitlesData){
      const  titleId = title.title_id;
      const titleContact = getTitleObject(titleId);
      if(titleContact == null){
        return null;
      }
      currentAlbum.addTitlesList(titleContact);
    }
    for(const artist of ArtistsData){
      const artist_id = artist.artist_id;
      const artistContact = getArtistObject(artist_id);
      if(artistContact == null){
          return null;
      }
      currentAlbum.addArtist(artistContact);
    }
    for(const genre of GenreData){
      const genre_id = genre.genre_id;
      const genreContact = getGenreObject(genre_id);
      if(genreContact == null){
          return null;
      }
      currentAlbum.addGenre(genreContact);
    }

  }
}
function addTitleInfo(){
  let ele = document.getElementById('sel1');
  for(const titleObj of TitlesData){
    ele.innerHTML = ele.innerHTML + '<option value=" ' + titleObj.title_id + ' ">' +   titleObj.title_name + '</option>';
  }
}
function addArtistInfo(){
  let artistEle = document.getElementById('artistSelection');
  for(const artistObj of ArtistsData){
    artistEle.innerHTML = artistEle.innerHTML + '<option value=" ' + artistObj.artist_id + ' ">' +
    artistObj.name + '</option>';
  }
}
function getMusicList(palbum_id) {
  //return the result should be using  callback and timeout 
  for (const album of MusicAlbum) {
    if (album.album_id === palbum_id) {
      return album;
    }
  }
  return null;
}
function getTitleObject(title_id) {
  //return the result should be using  callback and timeout 
  for (const titleObject of TitlesData) {
    if (titleObject.title_id === title_id) {
      return titleObject;
    }
  }
  return null;
}
function getArtistObject(title_id) {
  //return the result should be using  callback and timeout 
  for (const titleObject of TitlesData) {
    if (titleObject.title_id === title_id) {
      return titleObject;
    }
  }
  return null;
}
function getGenreObject(genre_id) {
  for (const genreObject of GenreData) {
    if (genreObject.genre_id === genre_id) {
      return genreObject;
    }
  }
  return null;
}

getAlbumListById = (albumId) =>{
   const albumObject = MusicAlbum.filter(album => album.album_id ==  albumId);
   return albumObject[0];
  
}
//Get TitleList based on titleid
getTitleListById = (titleId) =>{
    const titleObject =TitlesData.filter(titleObject => titleObject.title_id  ==  titleId);
    return titleObject[0];
}

getArtistListById = (artistId) =>{
  const artistObject  = ArtistsData.filter(artistObject =>  artistObject. artist_id  ==  artistId);
  return artistObject[0];
}

getGenreListById = (genreId) =>{
  const gendreObject  = GenreData.filter(genreObject =>  genreObject.genre_id  ==  genreId);
  return gendreObject[0];
}