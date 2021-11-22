function Genre() {
};
Genre.genre_id = '';
Genre.genre_name = '';


Genre.prototype.init = function(genre_id, genre_name) {
  this.genre_id = genre_id;
  this.genre_name = genre_name;
  
}
Genre.prototype.describe = function() {
  let description = ' ';
  description += 'Genre Id = ' + this.genre_id + ',' ;
    description += 'Genre Name = '+this.genre_name +'<br>';
    
    return description;
}
