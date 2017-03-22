// Define the Artist constructor function here, with a 'name' property that can be set at instantiation,
// and a 'songs' property that is an empty array to start
function Artist(name, songs) {
  this.name = name;
  this.songs = [];
}

// Define the Song constructor function here, with 'title' and 'artist' properties that can be set at instantiation,
// and a 'playCount' property that is set to 0
function Song(title, artist) {
  this.title = title || "Untitled";
  this.artist = artist;
  this.playCount = 0;
  // When a new song is instantiated, you'll want to add that song to its artist's 'songs' array.
  // You'll probably want to do that in here somewhere...
}
// var playCount = 0
// Song.parameter.playCount = function(){
//
// }
// This is how we should be able to use your constructor functions once they work!


console.log('sanity check');

Artist.prototype.addArtist = function (artist){
  this.artist.push(artist);
}
Artist.prototype.getSong = function(songs){
  this.artist.songs.push(songs);
}

Song.prototype.pushSong=function(){
  this.artist.songs.push(title);
}


var vanHalen = new Artist("Van Halen");
var hanson = new Artist("Hanson");

var jump = new Song("Jump!", vanHalen);
var mmmbop = new Song("mmmBop",hanson);

console.log(vanHalen);
console.log(jump);
