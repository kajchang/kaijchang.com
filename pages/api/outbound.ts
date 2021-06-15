import { NextApiHandler } from 'next'
import { firestore } from 'firebase-admin'
import firebaseAdmin from '../../src/modules/firebase-admin'
import url from 'url'

const handler: NextApiHandler = async (req, res) => {
  const href = req.query.href
  if (!href) return res.end()

  const query = await firebaseAdmin
    .firestore()
    .collection('links')
    .where('href', '==', href)
    .get()
  if (query.docs.length === 0) {
    await firebaseAdmin.firestore().collection('links').doc().create({
      href,
      outbounds: 1,
    })
  } else {
    await query.docs[0].ref.update({
      outbounds: firestore.FieldValue.increment(1),
    })
  }

  res.end()
}

export default handler
