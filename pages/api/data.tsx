// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type WebsiteData = {
  name: string,
  description: string 
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WebsiteData>
) {
  res.status(200).json({
    name: 'Snappr',
    description: 'photographer portfolio website to introduce yourself and show some of your works'
  })
}
