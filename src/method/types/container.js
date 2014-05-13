d3plus.method.container = {
  "accepted": [ Array , Object , String ],
  "element": false,
  "id": "default",
  "process": function ( value ) {
    
    if ( value === false ) {
      return value
    }
    else if ( d3plus.util.d3selection(value) ) {
      return value
    }
    else if ( value instanceof Array ) {
      return d3.select(value[0][0])
    }
    else {
      return d3.select(value)
    }

  },
  "value": false
}
