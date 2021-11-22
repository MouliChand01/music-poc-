function Title() {
};
Title.title_id = ' ';
Title.title_name = ' ';
Title.writer = [];
Title.singer = [];
Title.director = [];
//Q. In address class have fields like House Number, street Name, City, State, ZipCode

Title.prototype.init = function (title_id, title_name, writer, singer, director) {
  this.title_id = Number(title_id);
  this.title_name = title_name;
  this.writer = writer;
  this.singer = singer;
  this.director = director;
}
Title.prototype.describe = function () {
  var description = '';
  description += ' Title Id = ' + new Number(this.title_id) + ' , ';
  description += '  Title Name = ';
  description += this.title_name + '<br>';
  for (let artistNum of this.writer) {
    titleObject = getArtistListById(artistNum);
    if (titleObject == null) {
      continue;
    }
    description += titleObject.describe() + "\n";
  }
  description += '\n';
  return description;
}
