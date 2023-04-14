const request = require("supertest");
const app = require("../app");
const { Photo } = require("../models");

describe("POST /Photo/createPhoto", () => {

  afterAll(async () => {
    try {
      await Photo.destroy({ where: {} });
    } catch (error) {
      console.log(error);
    }
  });

  // succsess test
  it("Should be response 201", (done) => {
    request(app)
      .post("/Photo/createPhoto")
      .send({
        title: "Bocchi",
        caption: "Bocchi The Rock!",
        UserId: 2,
        image_url: "https://drive.google.com/file/d/1FB9OCRPIDlaomoC0X6NDCpBsnGMqAYG5/view?usp=share_link",
      })
      .expect(201)
      .end((err, res) => {
        if (err) {
          done(err);
        }

        expect(res.body.title).toEqual("Bocchi");
        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("title");
        done();
      });
  });

  // error response
  it("Should be response 500", (done) => {
    request(app)
      .post("/Photo/createPhoto")
      .send({
        title: "Bocchi",
        caption: "Bocchi The Rock!",
        UserId: 2,
        image_url: "https://drive.google.com/file/d/1FB9OCRPIDlaomoC0X6NDCpBsnGMqAYG5/view?usp=share_link",
      })
      .expect(500)
      .end((err, res) => {
        if (err) done(err);

        done();
      });
  });

});