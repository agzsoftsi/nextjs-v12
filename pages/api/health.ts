import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ status: "ok", version: "1.0.0", name: "mf-next12" });
}
