function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2; 
  //this.value            = 16;
  /*var img               = new Image();
  this.value            = document.getElementById('tile_image');

  img.onload = function() {
    this.value.appendChild(img);
  };
  img.src = '../images/2.jpg';*/
  /*var tile_img = document.createElement("tile_image");
  tile_img.src = "../images/2.jpg";

  var src = document.getElementById("header")
  src.appendChild(tile_img)*/
  
  //var tile_image = document.createElement("img");
  //tile_image.setAttribute("src", "../images/2.jpg");
  //document.getElementById("inner").appendChild(tile_image);

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};
