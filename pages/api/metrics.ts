import { NextApiRequest, NextApiResponse } from "next";
import client from "prom-client";

const register = new client.Registry();
client.collectDefaultMetrics({ register });

const metrics = async (req: NextApiRequest, res: NextApiResponse<any>) => {
	res.setHeader("Content-Type", client.register.contentType);
	// res.send(await client.register.metrics());
	register.metrics().then((data) => res.status(200).send(data));
};

export default metrics;
