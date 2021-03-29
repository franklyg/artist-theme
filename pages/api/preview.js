import Prismic from "@prismicio/client";
import { linkResolver } from 'prismic-reactjs'

import smConfig from '../../sm.json'
export const apiEndpoint = smConfig.apiEndpoint
const accessToken = "MC5ZRHBkRUJZQUFDWUFaeDQ1.77-9De-_vUrvv73vv73vv73vv73vv71FBe-_vSXvv73vv73vv71_e--_vWrvv73vv73vv70-QTFg77-9KhwhUg";

// Client method to query from the Prismic repo
const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

const Preview = async (req, res) => {
  const { token: ref, documentId } = req.query;
  const redirectUrl = await Client(req)
    .getPreviewResolver(ref, documentId)
    .resolve(linkResolver, "/");

  if (!redirectUrl) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({ ref });
  res.writeHead(302, { Location: `${redirectUrl}`  })
  res.end();
};

export default Preview;