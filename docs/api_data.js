define({ "api": [
  {
    "type": "post",
    "url": "/person",
    "title": "Create person",
    "name": "Create",
    "group": "Person",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Form data.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "-.id",
            "description": "<p>The ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.name",
            "description": "<p>The name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "-.createdDate",
            "description": "<p>The date of person creation.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.surname",
            "description": "<p>The surname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.city",
            "description": "<p>The city.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.address",
            "description": "<p>The address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.phone",
            "description": "<p>The phone number.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"5c41c92a223ca0335cf74161\",\n  \"name\": \"John\",\n  \"surname\": \"Doe\",\n  \"createdDate\": \"2019-01-19T01:49:09.875Z\",\n  \"city\": \"Montana\",\n  \"address\": \"814 Matthews Court\",\n  \"phone\": \"+1 (838) 555-777\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 InternalServerError\n{\n  \"message\": \"Error message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/personRoutes.js",
    "groupTitle": "Person"
  },
  {
    "type": "get",
    "url": "/person",
    "title": "Get all persons",
    "name": "GetAll",
    "group": "Person",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[Object]",
            "optional": false,
            "field": "-.response",
            "description": "<p>Array of person documents.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "-.id",
            "description": "<p>The ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.name",
            "description": "<p>The name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "-.createdDate",
            "description": "<p>The date of person creation.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.surname",
            "description": "<p>The surname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.city",
            "description": "<p>The city.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.address",
            "description": "<p>The address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.phone",
            "description": "<p>The phone number.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": \"5c41c92a223ca0335cf74161\",\n  \"name\": \"John\",\n  \"surname\": \"Doe\",\n  \"createdDate\": \"2019-01-19T01:49:09.875Z\",\n  \"city\": \"Montana\",\n  \"address\": \"814 Matthews Court\",\n  \"phone\": \"+1 (838) 555-777\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 InternalServerError\n{\n  \"message\": \"Error message.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/personRoutes.js",
    "groupTitle": "Person"
  },
  {
    "type": "get",
    "url": "/person/:id",
    "title": "Get one person",
    "name": "GetOne",
    "group": "Person",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Person unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "-.id",
            "description": "<p>The ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.name",
            "description": "<p>The name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "-.createdDate",
            "description": "<p>The date of person creation.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.surname",
            "description": "<p>The surname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.city",
            "description": "<p>The city.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.address",
            "description": "<p>The address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.phone",
            "description": "<p>The phone number.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"5c41c92a223ca0335cf74161\",\n  \"name\": \"John\",\n  \"surname\": \"Doe\",\n  \"createdDate\": \"2019-01-19T01:49:09.875Z\",\n  \"city\": \"Montana\",\n  \"address\": \"814 Matthews Court\",\n  \"phone\": \"+1 (838) 555-777\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 InternalServerError\n{\n  \"message\": \"Error message.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/personRoutes.js",
    "groupTitle": "Person"
  },
  {
    "type": "delete",
    "url": "/person/:id",
    "title": "Delete person",
    "name": "Remove",
    "group": "Person",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Person unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "-.true",
            "description": "<p>true.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 InternalServerError\n{\n  \"message\": \"Error message.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/personRoutes.js",
    "groupTitle": "Person"
  },
  {
    "type": "patch",
    "url": "/person/:id",
    "title": "Update person",
    "name": "Update",
    "group": "Person",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Person unique id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Form data.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "-.id",
            "description": "<p>The ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.name",
            "description": "<p>The name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "-.createdDate",
            "description": "<p>The date of person creation.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.surname",
            "description": "<p>The surname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.city",
            "description": "<p>The city.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.address",
            "description": "<p>The address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-.phone",
            "description": "<p>The phone number.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"5c41c92a223ca0335cf74161\",\n  \"name\": \"John\",\n  \"surname\": \"Doe\",\n  \"createdDate\": \"2019-01-19T01:49:09.875Z\",\n  \"city\": \"Montana\",\n  \"address\": \"814 Matthews Court\",\n  \"phone\": \"+1 (838) 555-777\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 InternalServerError\n{\n  \"message\": \"Error message.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/personRoutes.js",
    "groupTitle": "Person"
  }
] });
