import { Context } from "koa";
import Router from "koa-router";

const router = new Router();

interface BodyValues {
    game: string
}
router.post(`/thisproject`, async (ctx: Context) => {

    const body: any = ctx.request.body;
    try {
        ctx.status = 201;
        ctx.body = {
            "game": body.game,
        };
    } catch (err) {
        console.error(err)
    }
});

export default router;