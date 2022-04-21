declare module "material-ripple-effects" {
  export default class Ripple {
    constructor();
    create(event: React.UIEvent, color: "dark" | "light");
  }
}
