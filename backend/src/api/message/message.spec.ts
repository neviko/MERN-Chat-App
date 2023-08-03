import request from "supertest";
import { app } from "../../../app";

describe("global testing", () => {
  it("test should pass", async () => {
    expect(1 + 1).toBe(2);
  });
});
