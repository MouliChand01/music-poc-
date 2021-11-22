function addMusicAlbum() {
    addAlbumJsonToList();
    addArtistJsonToList();
    addTitleJsonToList();
    addGenreJsonToList();
    let ele = document.getElementById('sel');
    for (let albumData of albumList) {
      ele.innerHTML = ele.innerHTML + '<option value="' + albumData.album_id + '">' + albumData.name + '</option>';
    }
    getAlbumData();
    addTitleInfo();
    addArtistInfo();
}
function getAlbumDetails(){
  let albumId = document.getElementById('albumIdCondition').value;
  let albumDetails = getAlbumListById(albumId);
  let personsList = ' ';
  if( albumDetails != null) { 
    personsList += '' + albumDetails.describe();
  
  }
  let listElement = document.getElementById('musicDetails');
  listElement.innerHTML = personsList;  
}
function getTitleDetails() {
  let titleIdCondition = document.getElementById('titleIdCondition').value;
  let titleDetails = getTitleListById(titleIdCondition);
  let titleList = ' ';
  if( titleDetails != null) { 
    titleList += '' + titleDetails.describe();
  
  }
  let listElement = document.getElementById('titleMsg');
  listElement.innerHTML = titleList;
}
function getArtistDetails(){
  let artistId = document.getElementById('artistIdCondition').value;
  let artistDetails = getArtistListById(artistId);
  let artistList = ' ';
  if( artistDetails != null) { 
    artistList += '' + artistDetails.describe();
  
  }
  let listElement = document.getElementById('artistMsg');
  listElement.innerHTML = artistList;

}