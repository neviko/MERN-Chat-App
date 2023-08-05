import request from "supertest";
import { app } from "../../../app";
import { faker } from "@faker-js/faker";

describe("global testing", () => {
  it("test should pass", async () => {
    expect(1 + 1).toBe(2);
  });

  it("message should be saved in db", async () => {
    const message = {
      sender: faker.person.firstName(),
      groupId: Date.now().toString(),
      text: "some text",
      timestamp: new Date(),
    };

    const res = await request(app)
      .post("/api/message")
      .send(message)
      .expect(200);
  });

  it("message fetch messages", async () => {
    const groupName = faker.person.firstName();
    const { body: groupBody } = await request(app)
      .post(`/api/group/${groupName}`)
      .send({
        group_name: "test-group",
      })
      .expect(201);
    const groupId = groupBody.id;

    const message = {
      sender: faker.person.firstName(),
      groupId,
      text: "some text",
      timestamp: new Date(),
    };

    const { body: messageBody } = await request(app)
      .post("/api/message")
      .send(message)
      .expect(200);

    const { body: messages } = await request(app)
      .get("/api/message")
      .send(message)
      .expect(200);
    expect(messages).not.toEqual([]);
  });
});
