var entries = [
{"id":1, "title":"Hello Drax!", "body":"This is a site for you to explore. Click the other links posts for notes.", "published":"7/22/2013"},
{"id":2, "title":"Coffee, Water, Beer", "body":"Repeat", "published":"7/22/2013"},
{"id":3, "title":"Testing", "body":"Testing 1, Testing 1,2", "published":"7/22/2013"},
{"id":4, "title":"Montage", "body":"French for fast forward", "published":"7/22/2013"},
{"id":5, "title":"Bald Eagles", "body":"That is all", "published":"7/22/2013"},
{"id":6, "title":"Thanks for looking", "body":"Nothing else to see here", "published":"7/22/2013"}];

exports.getBlogEntries = function() {
   return entries;
}
 
exports.getBlogEntry = function(id) {
   for(var i=0; i < entries.length; i++) {
      if(entries[i].id == id) return entries[i];
   }
}