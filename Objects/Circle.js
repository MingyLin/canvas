var Circle = function (ctx, centerPoint, radius) {
    this.Ctx = ctx;

    this.Center = centerPoint;

    this.Radius = radius;

    this.Show = function () {
        this.Ctx.beginPath();
        this.Ctx.arc(this.Center.X, this.Center.Y, this.Radius, 0, Math.PI*2, true);
        this.Ctx.stroke();
    };

    this.Rotate = function () {
        this.Ctx.rotate(20 * Math.PI / 180);
    }
    
};