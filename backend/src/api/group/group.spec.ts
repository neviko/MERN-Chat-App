import request from "supertest";
import { app } from "../../../app";
import { faker } from "@faker-js/faker";

describe("global testing", () => {
  it("test should pass", async () => {
    expect(1 + 1).toBe(2);
  });

  it("should return all groups", async () => {
    const res = await request(app).get("/api/group").expect(200);
    expect(res.status).toEqual(200);
  });

  it("should create a new group", async () => {
    const groupName = faker.person.firstName();
    const res = await request(app)
      .post(`/api/group/${groupName}`)
      .send({
        group_name: "test-group",
      })
      .expect(201);
  });
});
