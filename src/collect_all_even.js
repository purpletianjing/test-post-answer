
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
var collection_result = [];
 collection_a.filter(function(ele){
    if (object_b.value.indexOf(ele['key']) !== -1) {
      return collection_result.push(ele['key']);
    }
  });
  return collection_result;
}

module.exports = collect_same_elements;
