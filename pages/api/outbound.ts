import { NextApiHandler } from 'next'
import { firestore } from 'firebase-admin'
import firebaseAdmin from '../../src/modules/firebase-admin'

const handler: NextApiHandler = async (req, res) => {
  const href = req.query.href
  if (!href) return res.end()

  const query = await firebaseAdmin
    .firestore()
    .collection('links')
    .where('href', '==', href)
    .get()


  let doc
  if (query.docs.length === 0) {
    doc = firebaseAdmin.firestore().collection('links').doc()
    await doc.create({
      href,
      outbounds: 1,
    })
  } else {
    doc = query.docs[0].ref
    await doc.update({
      outbounds: firestore.FieldValue.increment(1),
    })
  }
  doc.collection('outbounds').doc().create({
    timestamp: firestore.FieldValue.serverTimestamp()
  })

  res.end()
}

export default handler
