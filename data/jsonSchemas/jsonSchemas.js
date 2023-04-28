export const uploadImageJsonSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "code": {
        "type": "integer"
      },
      "type": {
        "type": "string"
      },
      "message": {
        "type": "string"
      }
    },
    "required": [
      "code",
      "type",
      "message"
    ]
  };

export const addPetJsonSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "id": {
        "type": "integer"
      },
      "category": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "name"
        ]
      },
      "name": {
        "type": "string"
      },
      "photoUrls": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "tags": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "name": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "name"
            ]
          }
        ]
      },
      "status": {
        "type": "string"
      }
    },
    "required": [
      "id",
      "category",
      "name",
      "photoUrls",
      "tags",
      "status"
    ]
  };

export const updatePetJsonSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "id": {
        "type": "integer"
      },
      "category": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "name"
        ]
      },
      "name": {
        "type": "string"
      },
      "photoUrls": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "tags": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "name": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "name"
            ]
          }
        ]
      },
      "status": {
        "type": "string"
      }
    },
    "required": [
      "id",
      "category",
      "name",
      "photoUrls",
      "tags",
      "status"
    ]
  };

export const findPetByStatusJsonSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "array",
    "items": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "category": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "name": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "name"
            ]
          },
          "name": {
            "type": "string"
          },
          "photoUrls": {
            "type": "array",
            "items": [
              {
                "type": "string"
              }
            ]
          },
          "tags": {
            "type": "array",
            "items": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "name": {
                    "type": "string"
                  }
                },
                "required": [
                  "id",
                  "name"
                ]
              }
            ]
          },
          "status": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "category",
          "name",
          "photoUrls",
          "tags",
          "status"
        ]
      },
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "category": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "name": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "name"
            ]
          },
          "name": {
            "type": "string"
          },
          "photoUrls": {
            "type": "array",
            "items": [
              {
                "type": "string"
              }
            ]
          },
          "tags": {
            "type": "array",
            "items": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "name": {
                    "type": "string"
                  }
                },
                "required": [
                  "id",
                  "name"
                ]
              }
            ]
          },
          "status": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "category",
          "name",
          "photoUrls",
          "tags",
          "status"
        ]
      }
    ]
  };

export const findPetByIdJsonSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "id": {
        "type": "integer"
      },
      "category": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "name"
        ]
      },
      "name": {
        "type": "string"
      },
      "photoUrls": {
        "type": "array",
        "items": [
          {
            "type": "string"
          }
        ]
      },
      "tags": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "name": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "name"
            ]
          }
        ]
      },
      "status": {
        "type": "string"
      }
    },
    "required": [
      "id",
      "category",
      "name",
      "photoUrls",
      "tags",
      "status"
    ]
  };

export const updatePetByFormDataJsonSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "code": {
        "type": "integer"
      },
      "type": {
        "type": "string"
      },
      "message": {
        "type": "string"
      }
    },
    "required": [
      "code",
      "type",
      "message"
    ]
  };

export const deletePetJsonSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "code": {
        "type": "integer"
      },
      "type": {
        "type": "string"
      },
      "message": {
        "type": "string"
      }
    },
    "required": [
      "code",
      "type",
      "message"
    ]
  };