import server from "../../src/server";
import request from "supertest";

afterEach((done) => {
    server.close();
    done();
});

describe("routes/thisproject", () => {

    const games = [
        "Battle of Baxmut",
        "Brothers at Arms",
        "Assassins Creed",
    ];

    games.forEach((game: string) => {
        const body = {"game": game}
        it(`should allow adding a game to the list - ${game}`, async () => {
            const response = await request(server)
                .post("/thisproject")
                .send(body);
    
            expect(response.status).toEqual(201);
            expect(response.type).toEqual("application/json");
            expect(response.body).toEqual(body);
        });
    })
});