function Branch(begin, end, size){
    this.begin = begin;
    this.end = end;
    this.size = size;
    this.finished = false;

    this.show = function(){
        stroke(161, 102, 47);
        strokeWeight(this.size)
        strokeCap();
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.branchA = function(){
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(PI/(random(1,1.1)*6));
        dir.mult(0.67);
        var newEnd = p5.Vector.add(this.end, dir);
        var b = new Branch(this.end, newEnd);
        return b;
    }

    this.branchB = function(){
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-PI/(random(1,1.1)*6));
        dir.mult(0.67);
        var newEnd = p5.Vector.add(this.end, dir);
        var b = new Branch(this.end, newEnd);
        return b;
    }
}