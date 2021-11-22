function Album() {

    Album.album_id = ' ';
    Album.name = ' ';
    Album.titlesList = [];
    Album.artistsList = [];
    Album.genreList = []; 
    Album.year = ' ';
    
  
    Album.prototype.init = function(album_id,name,titles,artists,genre,year) {
      this.album_id = Number(album_id);
      this.name = name;
      this.titlesList = titles;
      this.artistsList = artists;
      this.genreList = genre;
      this.year = year;
    
    }
    Album.prototype.describe = function() {
      var description = ' <h3>Album Information </h3><br>';
        description += 'Album Id = ' + this.album_id +'<br>' ;
        description += '  Album Name = ';
        description += String(this.name) + ' <br> ';
        description += ' <h3>Titles Information</h3><br> ';
        let titleObject = ' ';
        
        for(let titleNum of this.titlesList){
          titleObject = getTitleListById(titleNum);
          if(titleObject == null){
           continue;
          }
          description += titleObject.describe()+'\n';
        }
        description +=  '<h3>Artist Information  </h3><br>';
        for(let artistNum of this.artistsList){
          titleObject = getArtistListById(artistNum);
          if(titleObject == null){
            continue;
           }
           description += titleObject.describe()+"\n";
        }
        description += "\n"; 
        description +=  '<h3>Genre Information  </h3><br>';
        for(let genreNum of this.genreList){
          titleObject = getGenreListById(genreNum);
          if(titleObject == null){
            continue;
           }
           description += titleObject.describe()+"\n";
        }
        description += "\n"; 
        return description;
      }
    
    // Adds artistObject to artistsList
    Album.prototype.addArtist = function (artistObject) {
      this.artistsList.push(artistObject);
    }
    
    Album.prototype.addTitlesList = function (titleObject) {
      this.titlesList.push(titleObject);
    }
    Album.prototype.addGanreList = function (genreObject) {
      this.genreList.push(genreObject);
    }
    
    Album.prototype.getTitlesList = function () {
      let titlesData = ' ';
      for(titleObject of this.titlesList){
        titlesData += 'Titles Names :  [' + titleObject.title_name + ' ' + titleObject.writer +
        '' + titleObject.singer+''+titleObject.director+']';
      }
      return artistData;
    }
    
    Album.prototype.getArtistList = function () {
      let artistData = ' ';
      for(artistObject of this.artistsList){
        artistData += 'Aritist Names :  [' + artistObject.name + ' ' + artistObject.genre +
        '' + artistObject.profession+']';
      }
      return artistData;
    }
      
    };