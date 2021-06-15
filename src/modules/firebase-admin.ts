import firebaseAdmin from 'firebase-admin'

if (!firebaseAdmin.apps.length) {
	firebaseAdmin.initializeApp({
		credential: firebaseAdmin.credential.cert(
			JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS as string),
		),
	})
}

export default firebaseAdmin
