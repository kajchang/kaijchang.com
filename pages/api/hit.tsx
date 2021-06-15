import { NextApiHandler } from 'next'
import { firestore } from 'firebase-admin'
import firebaseAdmin from '../../src/modules/firebase-admin'
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
	if (query.docs.length === 0) {
		await firebaseAdmin.firestore().collection('pages').doc().create({
			path,
			hits: 1,
		})
	} else {
		await query.docs[0].ref.update({
			hits: firestore.FieldValue.increment(1),
		})
	}

	res.end()
}

export default handler
