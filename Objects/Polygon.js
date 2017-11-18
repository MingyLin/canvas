var Polygon = function (ctx, centerPoint, radius, edges) {
    this.Ctx = ctx;

    this.Center = centerPoint;

    this.Radius = radius;

    this.Edges = edges;

    this.Show = function () {     

        var isOddPoly = this.Edges % 2;

        this.Ctx.beginPath();

        var startPointX = this.Center.X,
            startPointY = this.Center.Y - this.Radius,
            centralAngle = Math.PI * 2 / this.Edges,
            initAngle = Math.PI / 2;        

        this.Ctx.moveTo(startPointX, startPointY);

        for (var i = 0; i < this.Edges; i++) {
            initAngle += centralAngle;
            var y = this.Center.Y - this.Radius * Math.sin(initAngle);
            var x = this.Center.X + this.Radius * Math.cos(initAngle);

            this.Ctx.lineTo(x, y);
            
        }

        this.Ctx.closePath();
        this.Ctx.stroke();
    };

    this.Rotate = function () {
        this.Ctx.rotate(10 * Math.PI / 180);
    }
};