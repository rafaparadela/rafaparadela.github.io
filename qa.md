
#ITEMOFFERS

- #Fetch ItemOffer Details: (GET /backoffice/v3/itemoffers/detail)

	###Parameters
	- itemOfferId: `p000050`

	###Status code: `200`
	###Response:

	```
{
  "links": {
    "self": {
      "href": "/backoffice/v3/itemoffers/detail/p000050",
      "method": "GET"
    }
  },
  "embedded": {
    "itemofferDetail": {
      "duration": {
        "min": {
          "quantity": 0
        },
        "max": {
          "quantity": 0
        }
      },
      "longDescription": "<ul class=\"storefront\" style=\"list-style-type:disc\">\n<li> {%member price%} mid-season sprinkler�tune-up for {%size quantity%} {%size unit%} </li>\n<li> 0% financing available on new systems or major upgrades </li>\n<li> Deal includes run-through system, cut around heads, remove grass, and cleaning and adjusting all heads  </li>\n<li> Upon completion, you will receive an evaluation of any issues found and the cost of repairs </li>\n<li> Includes setting the timer  for the�season and verify controller is working </li>\n</ul>\n</br>",
      "name": "Sprinkler Maintenance/Tune-Up",
      "labor": {
        "min": {
          "unit": "0",
          "quantity": 0
        },
        "max": {
          "unit": "0",
          "quantity": 0
        }
      },
      "size": {
        "min": {
          "quantity": 1
        },
        "max": {
          "quantity": 8
        }
      },
      "endDate": "2015-12-15T00:00:00.000Z",
      "maxProductStockLevel": 0,
      "description": "Your sprinkler system is imperative to keeping your yard looking lush and green. Get it tuned up for less with this money-saving offer!",
      "warranty": {
        "id": "war0001",
        "name": "updatedWarranty",
        "warrantyText": "New Warranty text"
      },
      "maxTakePercentage": 0,
      "itemType": "service",
      "minTakePercentage": 0,
      "fairMarketPrice": 0,
      "maxPrice": 0,
      "category": "10001",
      "frequency": {
        "min": {
          "unit": "oneTime",
          "quantity": 1
        },
        "max": {
          "unit": "oneTime",
          "quantity": 1
        }
      },
      "startDate": "2015-07-07T00:00:00.000Z",
      "finePrint": {
        "id": "fin0001",
        "name": "updatedFP",
        "finePrintText": "New Fine Print text"
      },
      "itemOfferId": "p000050",
      "minPrice": 0,
      "maxSpidStockLevel": 0,
      "active": true
    }
  }
}
	```
	


#SKUS

- #Add SKU (POST /backoffice/v3/skus/)

	###Request
	```
{
   "sku": {
       "itemOfferId":"p000050",
       "categoryId":"87",
       "status":"active",
       "dates": {
           "startDate":"2000-01-01T01:01:01.000-04:00",
           "endDate":"2030-01-01T01:01:01.000-04:00",
           "totalDays":30
       },
       "info": {
           "displayName":"My SKU name",
           "description":"Request a Quote: Roof Replacement",
           "type":"storefront_deal"
       },
       "serviceProviderId":"100001",
       "destination":"onsite",
       "duration":{
           "unit":"days",
           "quantity":9
       },
       "frequency":{
           "unit":"weekly",
           "quantity":9
       },
       "labor":{
           "unit":"1",
           "quantity":9
       },
       "origination":{
           "origination":"outbound",
           "primarySku":false
       },
       "stock":{
           "initialStockLevel":10,
           "currentStockLevel":5,
           "countDownMethod": "quantity",
           "maximumPurchaseQuantity": 2
       },
       "size":{
           "type":"flooring",
           "unit":"squareFeet",
           "quantity":9
       },
       "updatedFinePrint": {
           "id": "fin0001",
           "name": "updatedFP",
           "finePrintText": "New Fine Print text"
       },
       "updatedWarranty": {
           "id": "war0001",
           "name": "updatedWarranty",
           "warrantyText": "New Warranty text"
       },
       "locations":["80223", "80134"],
       "rapidConnect": true,
       "prices": {
           "wholesalePrice":49.99,
           "memberPrice":29.99,
           "nonMemberPrice":79.99,
           "offerTakePercentage":15
       },
       "material": {
           "areIncluded": true,
           "materials":[
               {
                   "id": "mat100001",
                   "materialName":"materialName",
                   "materialDescription":"Description of the material 1"
               },
               {
                   "id": "mat100002",
                   "materialName":"materialName2",
                   "materialDescription":"Description of the material 2"
               }
           ]
       },
       "images": {
           "thumbnailImage": {
               "startDate":"2000-01-01T01:01:01.000-04:00",
               "endDate":"2030-01-01T01:01:01.000-04:00",
               "creationDate":"2000-01-01T01:01:01.000-04:00",
               "description":"Thumbnail Image description",
               "name":"Thumbnail Image name",
               "url":"http://www.angieslist.com/files/handyMan0.jpg",
               "empty":false
           },
           "smallImage": {
               "startDate":"2000-01-01T01:01:01.000-04:00",
               "endDate":"2030-01-01T01:01:01.000-04:00",
               "creationDate":"2000-01-01T01:01:01.000-04:00",
               "description":"Thumbnail Image description",
               "name":"Thumbnail Image name",
               "url":"http://www.angieslist.com/files/handyMan0.jpg",
               "empty":false
           },
           "largeImage": {
               "startDate":"2000-01-01T01:01:01.000-04:00",
               "endDate":"2030-01-01T01:01:01.000-04:00",
               "creationDate":"2000-01-01T01:01:01.000-04:00",
               "description":"Thumbnail Image description",
               "name":"Thumbnail Image name",
               "url":"http://www.angieslist.com/files/handyMan0.jpg",
               "empty":false
           }
       }
   }
}
```

	###Status code: `200`
	###Response:

	```
	{
  "embedded": {
    "displayName": "My SKU name",
    "categoryId": "10001",
    "memberPrice": 29.99,
    "endDate": "2030-01-01T05:01:01.000Z",
    "status": "active",
    "type": "storefront_deal",
    "skuId": "sku690003",
    "startDate": "2000-01-01T05:01:01.000Z",
    "itemOfferId": "p000050"
  },
  "links": {
    "self": {
      "href": "/backoffice/v3/skus/sku690003",
      "method": "GET"
    }
  }
}
	```
	

- #Fetch SKU (GET /backoffice/v3/skus/{skuId})

	###Paramters
	- skuId : `sku650009`

	###Status code: `200`
	###Response:

	```
	{
  "embedded": {
    "sku": {
      "locations": [
        "80134",
        "80223"
      ],
      "stock": {
        "currentStockLevel": 5,
        "initialStockLevel": 100,
        "countDownMethod": "quantity",
        "maximumPurchaseQuantity": 15
      },
      "duration": {
        "unit": "hours",
        "quantity": 1
      },
      "labor": {
        "unit": "1",
        "quantity": 0
      },
      "prices": {
        "wholesalePrice": 0,
        "memberPrice": 150,
        "nonMemberPrice": 185,
        "offerTakePercentage": 30
      },
      "size": {
        "type": "flooring",
        "unit": "squareFeet",
        "quantity": 10
      },
      "updatedWarranty": {
        "id": "war0001",
        "name": "updatedWarranty",
        "warrantyText": "New Warranty text"
      },
      "info": {
        "displayName": "Mid-Season Sprinkler Tune-Up for Up to 8 Zones",
        "description": "p000050-description",
        "type": "dealsSku"
      },
      "serviceProviderId": "221841",
      "rapidConnect": true,
      "dates": {
        "startDate": "2015-07-07T00:00:00.000Z",
        "endDate": "2015-12-15T00:00:00.000Z",
        "totalDays": 180
      },
      "updatedFinePrint": {
        "id": "fin0001",
        "name": "updatedFP",
        "finePrintText": "New Fine Print text"
      },
      "status": "active",
      "origination": {
        "origination": "inbound",
        "primarySku": true
      },
      "material": {
        "areIncluded": true,
        "materials": []
      },
      "frequency": {
        "unit": "oneTime",
        "quantity": 1
      },
      "skuId": "sku650009",
      "images": {
        "thumbnailImage": {
          "name": "Small pic",
          "endDate": "2035-12-31T00:00:00.000Z",
          "url": "https://i.imgur.com/wsBfSqw.gif",
          "description": "A tiny picture",
          "id": "m690061",
          "creationDate": "2015-08-14T00:00:00.000Z",
          "startDate": "2015-01-15T00:00:00.000Z"
        },
        "smallImage": {
          "name": "Small pic",
          "endDate": "2035-12-31T00:00:00.000Z",
          "url": "https://i.imgur.com/wsBfSqw.gif",
          "description": "A tiny picture",
          "id": "m690062",
          "creationDate": "2015-08-14T00:00:00.000Z",
          "startDate": "2015-01-15T00:00:00.000Z"
        },
        "largeImage": {
          "name": "Small pic",
          "endDate": "2035-12-31T00:00:00.000Z",
          "url": "https://i.imgur.com/wsBfSqw.gif",
          "description": "A tiny picture",
          "id": "m690063",
          "creationDate": "2015-08-14T00:00:00.000Z",
          "startDate": "2015-01-15T00:00:00.000Z"
        }
      },
      "itemOfferId": "p000050",
      "destination": "onsite"
    },
    "itemOffer": {
      "duration": {
        "min": {
          "quantity": 0
        },
        "max": {
          "quantity": 0
        }
      },
      "longDescription": "<ul class=\"storefront\" style=\"list-style-type:disc\">\n<li> {%member price%} mid-season sprinkler�tune-up for {%size quantity%} {%size unit%} </li>\n<li> 0% financing available on new systems or major upgrades </li>\n<li> Deal includes run-through system, cut around heads, remove grass, and cleaning and adjusting all heads  </li>\n<li> Upon completion, you will receive an evaluation of any issues found and the cost of repairs </li>\n<li> Includes setting the timer  for the�season and verify controller is working </li>\n</ul>\n</br>",
      "name": "Sprinkler Maintenance/Tune-Up",
      "labor": {
        "min": {
          "unit": "0",
          "quantity": 0
        },
        "max": {
          "unit": "0",
          "quantity": 0
        }
      },
      "size": {
        "min": {
          "quantity": 1
        },
        "max": {
          "quantity": 8
        }
      },
      "endDate": "2015-12-15T00:00:00.000Z",
      "maxProductStockLevel": 0,
      "description": "Your sprinkler system is imperative to keeping your yard looking lush and green. Get it tuned up for less with this money-saving offer!",
      "warranty": {
        "id": "war0001",
        "name": "updatedWarranty",
        "warrantyText": "New Warranty text"
      },
      "maxTakePercentage": 0,
      "itemType": "service",
      "minTakePercentage": 0,
      "fairMarketPrice": 0,
      "maxPrice": 0,
      "category": "10001",
      "frequency": {
        "min": {
          "unit": "oneTime",
          "quantity": 1
        },
        "max": {
          "unit": "oneTime",
          "quantity": 1
        }
      },
      "startDate": "2015-07-07T00:00:00.000Z",
      "finePrint": {
        "id": "fin0001",
        "name": "updatedFP",
        "finePrintText": "New Fine Print text"
      },
      "itemOfferId": "p000050",
      "minPrice": 0,
      "maxSpidStockLevel": 0,
      "active": true
    }
  },
  "links": {
    "self": {
      "href": "/backoffice/v3/skus/sku650009",
      "method": "GET"
    }
  }
}
	```


- #Update SKU (PUT /backoffice/v3/skus/{skuId})

	###Request
	```
{
   "sku": {
       "itemOfferId":"p000050",
       "categoryId":"87",
       "status":"active",
       "dates": {
           "startDate":"2000-01-01T01:01:01.000-04:00",
           "endDate":"2030-01-01T01:01:01.000-04:00",
           "totalDays":30
       },
       "info": {
           "displayName":"My SKU name",
           "description":"Request a Quote: Roof Replacement",
           "type":"storefront_deal"
       },
       "serviceProviderId":"100001",
       "destination":"onsite",
       "duration":{
           "unit":"days",
           "quantity":9
       },
       "frequency":{
           "unit":"weekly",
           "quantity":9
       },
       "labor":{
           "unit":"1",
           "quantity":9
       },
       "origination":{
           "origination":"outbound",
           "primarySku":false
       },
       "stock":{
           "initialStockLevel":10,
           "currentStockLevel":5,
           "countDownMethod": "quantity",
           "maximumPurchaseQuantity": 2
       },
       "size":{
           "type":"flooring",
           "unit":"squareFeet",
           "quantity":9
       },
       "updatedFinePrint": {
           "id": "fin0001",
           "name": "updatedFP",
           "finePrintText": "New Fine Print text"
       },
       "updatedWarranty": {
           "id": "war0001",
           "name": "updatedWarranty",
           "warrantyText": "New Warranty text"
       },
       "locations":["80223", "80134"],
       "rapidConnect": true,
       "prices": {
           "wholesalePrice":49.99,
           "memberPrice":29.99,
           "nonMemberPrice":79.99,
           "offerTakePercentage":15
       },
       "material": {
           "areIncluded": true,
           "materials":[
               {
                   "id": "mat100001",
                   "materialName":"materialName",
                   "materialDescription":"Description of the material 1"
               },
               {
                   "id": "mat100002",
                   "materialName":"materialName2",
                   "materialDescription":"Description of the material 2"
               }
           ]
       },
       "images": {
           "thumbnailImage": {
               "startDate":"2000-01-01T01:01:01.000-04:00",
               "endDate":"2030-01-01T01:01:01.000-04:00",
               "creationDate":"2000-01-01T01:01:01.000-04:00",
               "description":"Thumbnail Image description",
               "name":"Thumbnail Image name",
               "url":"http://www.angieslist.com/files/handyMan0.jpg",
               "empty":false
           },
           "smallImage": {
               "startDate":"2000-01-01T01:01:01.000-04:00",
               "endDate":"2030-01-01T01:01:01.000-04:00",
               "creationDate":"2000-01-01T01:01:01.000-04:00",
               "description":"Thumbnail Image description",
               "name":"Thumbnail Image name",
               "url":"http://www.angieslist.com/files/handyMan0.jpg",
               "empty":false
           },
           "largeImage": {
               "startDate":"2000-01-01T01:01:01.000-04:00",
               "endDate":"2030-01-01T01:01:01.000-04:00",
               "creationDate":"2000-01-01T01:01:01.000-04:00",
               "description":"Thumbnail Image description",
               "name":"Thumbnail Image name",
               "url":"http://www.angieslist.com/files/handyMan0.jpg",
               "empty":false
           }
       }
   }
}
```


	###Status code: `200`
	###Response:

	```
{
  "embedded": {
    "sku": {
      "locations": [
        "80134",
        "80223"
      ],
      "stock": {
        "currentStockLevel": 5,
        "initialStockLevel": 10,
        "countDownMethod": "quantity",
        "maximumPurchaseQuantity": 2
      },
      "duration": {
        "unit": "days",
        "quantity": 9
      },
      "labor": {
        "unit": "1",
        "quantity": 9
      },
      "prices": {
        "wholesalePrice": 0,
        "memberPrice": 29.99,
        "nonMemberPrice": 79.99,
        "offerTakePercentage": 15
      },
      "size": {
        "type": "flooring",
        "unit": "squareFeet",
        "quantity": 9
      },
      "updatedWarranty": {
        "id": "war0001",
        "name": "updatedWarranty",
        "warrantyText": "New Warranty text"
      },
      "info": {
        "displayName": "My SKU name",
        "description": "Request a Quote: Roof Replacement",
        "type": "dealsSku"
      },
      "serviceProviderId": "100001",
      "rapidConnect": true,
      "dates": {
        "startDate": "2000-01-01T00:00:00.000Z",
        "endDate": "2030-01-01T00:00:00.000Z",
        "totalDays": 30
      },
      "updatedFinePrint": {
        "id": "fin0001",
        "name": "updatedFP",
        "finePrintText": "New Fine Print text"
      },
      "status": "active",
      "origination": {
        "origination": "outbound",
        "primarySku": true
      },
      "material": {
        "areIncluded": true,
        "materials": [
          {
            "id": "mat100001",
            "materialName": "materialName",
            "materialDescription": "Description of the material 1"
          },
          {
            "id": "mat100002",
            "materialName": "materialName2",
            "materialDescription": "Description of the material 2"
          }
        ]
      },
      "frequency": {
        "unit": "weekly",
        "quantity": 9
      },
      "skuId": "sku650009",
      "images": {
        "thumbnailImage": {
          "name": "Thumbnail Image name",
          "endDate": "2030-01-01T00:00:00.000Z",
          "url": "http://www.angieslist.com/files/handyMan0.jpg",
          "description": "Thumbnail Image description",
          "id": "m730010",
          "creationDate": "2015-08-18T00:00:00.000Z",
          "startDate": "2000-01-01T00:00:00.000Z"
        },
        "smallImage": {
          "name": "Thumbnail Image name",
          "endDate": "2030-01-01T00:00:00.000Z",
          "url": "http://www.angieslist.com/files/handyMan0.jpg",
          "description": "Thumbnail Image description",
          "id": "m730011",
          "creationDate": "2015-08-18T00:00:00.000Z",
          "startDate": "2000-01-01T00:00:00.000Z"
        },
        "largeImage": {
          "name": "Thumbnail Image name",
          "endDate": "2030-01-01T00:00:00.000Z",
          "url": "http://www.angieslist.com/files/handyMan0.jpg",
          "description": "Thumbnail Image description",
          "id": "m730012",
          "creationDate": "2015-08-18T00:00:00.000Z",
          "startDate": "2000-01-01T00:00:00.000Z"
        }
      },
      "itemOfferId": "p000050",
      "destination": "onsite"
    }
  },
  "links": {
    "self": {
      "href": "/backoffice/v3/skus/sku650009",
      "method": "GET"
    }
  }
}
	```


- #Set Inventory SKU (PUT /backoffice/v3/skus/{skuId}/inventory)

	###Parameter:
	- skuId = `sku650009`
	###Request
	```
{
"stockLevel": 10
}
	```

	###Status code: `200`
	###Response:

	```
{
  "links": {
    "self": {
      "href": "/backoffice/v3/skus/sku650009",
      "method": "GET"
    }
  }
}
	```
	

- #Set Inventory SKU (PUT /backoffice/v3/skus/{skuId}/inventory)

	###Parameter:
	- skuId = `sku650009`
	###Request
	```
{
"stockLevelAdjustment": 2
}
	```

	###Status code: `503`
	###Response:

	```
[SPEED ERROR] - Bad Response: sku650009 - 400: JsError(List((/inventoryInvalid,List(ValidationError(error.path.missing,WrappedArray()))), (/inventoryErrorMsg,List(ValidationError(error.path.missing,WrappedArray()))), (/skusInvalid,List(ValidationError(error.path.missing,WrappedArray()))), (/errorMessage,List(ValidationError(error.path.missing,WrappedArray())))))
	```
	###Note: But the stock level is updated properly.

