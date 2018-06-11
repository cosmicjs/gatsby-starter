const Cosmic = require('cosmicjs')
const api = Cosmic()
const COSMIC_BUCKET = process.env.COSMIC_BUCKET || 'node-starter'
const bucket = api.bucket({
	slug: COSMIC_BUCKET
})
const default_objects = require('./objects')
const default_object_type = require('./object-type')
const importObjects = async () => {
	const res = await bucket.getObjects()
	if(res.status === 'empty') {
		bucket.addObjectType(default_object_type)
		default_objects.forEach(object => {
			bucket.addObject(object)
		})
	}
}
importObjects()