import { it, expect } from "vitest";

import DiscObject from "../src/DiscObject";
import Lamp from "../src/Lamp";
import Light from "../src/Light";
import Lighting from "../src/Lighting";
import OpaqueObject from "../src/OpaqueObject";

const l1 = new Lighting();
const l2 = new Lighting({
  objects: [new DiscObject()]
});
const l3 = new Lighting({
  light: new Lamp({ id: 1 }),
  objects: [
    new OpaqueObject({
      diffuse: undefined
    })
  ]
});

const ctx = document.createElement("canvas").getContext("2d");

it("should be instance", () => expect(l2).toBeInstanceOf(Lighting));

it("should construct", () => {
  expect(l1).toEqual({
    light: new Light(),
    objects: []
  });
  expect(l2).toEqual({
    light: new Light(),
    objects: [new DiscObject()]
  });
  expect(l3).toEqual({
    light: new Lamp({ id: 1 }),
    objects: [new OpaqueObject()]
  });
});

it("should compute", () => {
  expect(l1.compute(800, 600)).toBeUndefined();
  expect(l1.compute(800, 600)).toBeUndefined();

  expect(l2.compute(800, 600)).toBeUndefined();
  expect(l2.compute(800, 600)).toBeUndefined();

  expect(l3.compute(800, 600)).toBeUndefined();
  expect(l3.compute(800, 600)).toBeUndefined();
});

it("should cast shadow", () => expect(l2.cast(ctx)).toBeUndefined());

it("should render light", () => expect(l2.render(ctx)).toBeUndefined());

it("should get canvas", () => expect(l2.getCanvas()).toBeInstanceOf(HTMLCanvasElement));
