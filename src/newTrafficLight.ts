export type Color = "red" | "green" | "yellow";
export class TrafficLight {
  color: Color = "red";
  stateTransition = new Map<Color, number>([
    ["red", 20],
    ["yellow", 5],
    ["green", 15],
  ]);
  timeLeft: number = this.stateTransition.get(this.color)!;
  /* simulate one second passing */
  public tick() {
    if (this.timeLeft != 1) {
      this.timeLeft = this.timeLeft - 1;
      return this.color;
    } else {
      switch (this.color) {
        case "red":
          this.color = "green";
          this.timeLeft = this.stateTransition.get(this.color)!;
          break;
        case "green":
          this.color = "yellow";
          this.timeLeft = this.stateTransition.get(this.color)!;
          break;
        case "yellow":
          this.color = "red";
          this.timeLeft = this.stateTransition.get(this.color)!;
          break;
      }
    }
  }
  public setTime(t: number) {
    this.timeLeft = t;
  }
  public getColor() {
    return this.color;
  }
}