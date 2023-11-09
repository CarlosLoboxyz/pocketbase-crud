/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0om4mep45wwtll1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hlthgayg",
    "name": "listing",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0om4mep45wwtll1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hlthgayg",
    "name": "listing",
    "type": "bool",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
