!function(a,b){"object"==typeof module&&"object"==typeof module.exports&&(exports=module.exports=b()),"function"==typeof define&&define.amd&&define([],b),"object"==typeof a.navigator&&("undefined"==typeof a.Terraformer&&(a.Terraformer={}),"undefined"==typeof a.Terraformer.Store&&(a.Terraformer.Store={}),a.Terraformer.Store.Memory=b().Memory)}(this,function(){function a(){this.data={}}var b={};return arguments[0]&&"function"==typeof define&&define.amd&&(this.Terraformer=arguments[0]),a.prototype.add=function(a,b){if("FeatureCollection"===a.type)for(var c=0;c<a.features.length;c++)this.data[a.features[c].id]=a.features[c];else this.data[a.id]=a;return b.resolve(a),b},a.prototype.remove=function(a,b){return delete this.data[a],b.resolve(a),b},a.prototype.get=function(a,b){return b.resolve(this.data[a]),b},a.prototype.update=function(a,b){return this.data[a.id]=a,b.resolve(),b},a.prototype.serialize=function(a){return a.resolve(JSON.stringify(this)),a},a.prototype.deserialize=function(a){return this.data=JSON.parse(a).data,dfd.resolve(this),dfd},b.Memory=a,b});