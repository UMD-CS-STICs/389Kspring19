function parseData(data){
  var parsed_data = {
    titles: [],
    data: [],
    schools: [],
  };
  for (var key in data){
    if (key == 0){
      parsed_data['titles'] = data[key];
    }else{
      parsed_data['data'].push(data[key])
      parsed_data['schools'].push(data[key][0])
    }
  }
  return parsed_data;
}


// data = {
//   titles: string[]
//   data: string[][]
//   schools: string[]
// }
function getSchoolData(data, school){
  var titles = data['titles'];
  var parsed_data = {};

  for(var i = 0 ; i < data.schools.length; i++){
    if(data.schools[i] == school){
      break;
    }
  }

  parsed_data['school'] = school;
  parsed_data['data'] = data.data[i].slice(1,data.data[i].length)
  parsed_data['titles'] = data.titles.slice(1,data.titles.length)
  return parsed_data;
}




module.exports = {
  parseData: parseData,
  getSchoolData, getSchoolData,

}
