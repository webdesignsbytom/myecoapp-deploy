import { startingTileCost } from '../data/Constants';

export class Tile {
  constructor(id, offX, offY, fillColour, borderColor, isOwned) {
    this.id = id;
    this.offX = offX;
    this.offY = offY;
    this.fillColour = fillColour;
    this.borderColor = borderColor;
    this.isHovered = false;
    this.isActive = false;
    this.isOwned = isOwned;
    this.hasBuilding = false;
    this.tileColumnOffset = 64;
    this.tileRowOffset = 32;
    this.cost = startingTileCost;
    this.purchaseXp = 100;
  }

  drawTile = (context) => {
    // Draw tile interior
    context.beginPath();

    if (this.isActive) {
      context.fillStyle = 'yellow';
    } else if (this.isHovered) {
      context.fillStyle = 'blue';
    } else {
      context.fillStyle = this.fillColour;
    }

    // Set colour and shade
    let gradient = context.createLinearGradient(this.offX, this.offY, this.offX + this.tileColumnOffset, this.offY + this.tileRowOffset);
    gradient.addColorStop(0, "rgba(255, 255, 255, 0.9)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0.9)");
    context.fillStyle = gradient;
    context.fill();

    // Draw tile
    context.moveTo(this.offX, this.offY + this.tileRowOffset / 2);
    context.lineTo(this.offX + this.tileColumnOffset / 2, this.offY);
    context.lineTo(
      this.offX + this.tileColumnOffset,
      this.offY + this.tileRowOffset / 2
    );
    context.lineTo(
      this.offX + this.tileColumnOffset / 2,
      this.offY + this.tileRowOffset
    );
    context.closePath();
    context.stroke();
    context.fill();
  };
}
