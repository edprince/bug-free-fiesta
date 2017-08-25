generateSchema(1000);

function generateSchema(numberOfRecords) {
  /**
   * @param {integer} numberOfRecords - number of records to generate
   */
  var data = {};
  for (var i = 0; i <= numberOfRecords; i++) {
    data[i] = {
      title: generateRandomString(),
      responses: generateRandomInteger(),
      rating: generateRandomInteger(),
      yes: {},
      no: {}
    };
    data[i].yes[i] = {
      lat: generateRandomFloat(),
      lng: generateRandomFloat()
    };
    data[i].no[i] = {
      lat: generateRandomFloat(),
      lng: generateRandomFloat()
    };
  }
}

function generateRandomString() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 10);
}

function generateRandomFloat() {
  return Math.random() * 10;
}

function generateRandomInteger() {
  return Math.floor(Math.random() * 1000 + 1);
}
