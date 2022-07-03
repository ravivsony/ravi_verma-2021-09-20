import { createServer } from "miragejs";
createServer({
  routes() {
    this.namespace = "api";
    this.get("mobiles", () => {
      return {
        mobiles: [
          { id: 0, mobile: "nokia", selected: false },
          { id: 1, mobile: "iphone", selected: false },
          { id: 2, mobile: "samsung", selected: false },
          { id: 3, mobile: "xiomi", selected: false },
          { id: 4, mobile: "vivo", selected: false },
          { id: 5, mobile: "oppo", selected: false },
          { id: 6, mobile: "oneplus", selected: false },
          { id: 7, mobile: "poco", selected: false },
          { id: 8, mobile: "lava", selected: false },
          { id: 9, mobile: "redmi", selected: false },

        ],
      };
    });
  },
});
