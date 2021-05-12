let textOffsetX = 50;
let textOffsetY = 10;

function backdrop() {
    stroke(200)
    strokeWeight(8);

    let dottedLength = 20;

    let y = dottedLength/2;
    
    while (y < height) {
        line(width/2, y, width/2, y + dottedLength);
        y += dottedLength*2;
    }

    
    textSize(100);
    noStroke();
    fill(250);

    textAlign(RIGHT, TOP);
    text(p1.score, width/2 - textOffsetX, textOffsetY);

    textAlign(LEFT);
    text(p2.score, width/2 + textOffsetX, textOffsetY);

}