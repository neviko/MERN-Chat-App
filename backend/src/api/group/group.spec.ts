import request from "supertest";
import { app } from "../../../app";

describe("global testing", () => {
  it("test should pass", async () => {
    expect(1 + 1).toBe(2);
  });

  it("should return status 200", async () => {
    return request(app).get("/api/group").expect(200);
  });

  it("should create a new group", async () => {
    return request(app)
      .post("/api/group")
      .send({
        group_name: "test-group",
      })
      .expect(201);
  });
});
