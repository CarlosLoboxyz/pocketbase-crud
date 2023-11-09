/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0om4mep45wwtll1")

  // remove
  collection.schema.removeField("wk8rkq7o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ti76v62g",
    "name": "description",
    "type": "editor",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0om4mep45wwtll1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wk8rkq7o",
    "name": "description",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 8,
      "max": 4096,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("ti76v62g")

  return dao.saveCollection(collection)
})
