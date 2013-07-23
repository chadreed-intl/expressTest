var entries = [
{"id":1, "title":"Hello Drax!", "body":"This is a site for you to explore. Click the other links posts for notes.", "published":"7/22/2013"},
{"id":2, "title":"I heart you more than beer", "body":"You are more refreshing than an ice cold Fransiskaner on a hot day", "published":"7/22/2013"},
{"id":3, "title":"Ich liebe deine lipen", "body":"I may not know German, but its cute when I try right?", "published":"7/22/2013"},
{"id":4, "title":"Montage", "body":"We've done so much together, just think of all the amazing thing: Bermuda, Turkey, Aletch, trotti net?, semuc champey, hawaii, capilano bridge, empire state building, croatia...and on and on", "published":"7/22/2013"},
{"id":5, "title":"We are pretty cool", "body":"I think we probably have the most fun as a couple. Look at what we can do with so little money, imagine when we both have money!", "published":"7/22/2013"},
{"id":6, "title":"Thanks for looking", "body":"Nothing else to see here", "published":"7/22/2013"}];

exports.getBlogEntries = function() {
   return entries;
}
 
exports.getBlogEntry = function(id) {
   for(var i=0; i < entries.length; i++) {
      if(entries[i].id == id) return entries[i];
   }
}