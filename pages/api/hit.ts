import { NextApiHandler } from 'next'
import { firestore } from 'firebase-admin'
import firebaseAdmin from 'modules/firebase-admin'
import url from 'url'

const handler: NextApiHandler = async (req, res) => {
	const referer = req.headers['referer']
	if (!referer) return res.end()

	const path = new url.URL(referer).pathname

	const query = await firebaseAdmin
		.firestore()
		.collection('pages')
		.where('path', '==', path)
		.get()

	let doc
	if (query.empty) {
		doc = firebaseAdmin.firestore().collection('pages').doc()
		await doc.create({
			path,
			hits: 1,
		})
	} else {
		doc = query.docs[0].ref
		await doc.update({
			hits: firestore.FieldValue.increment(1),
		})
	}
	doc.collection('hits').doc().create({
		timestamp: firestore.FieldValue.serverTimestamp()
	})

	res.end()
}

export default handler
