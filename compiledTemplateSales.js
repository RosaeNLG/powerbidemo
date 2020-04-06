function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {const embeddedLinguisticResources = {"verbs":{},"words":{},"adjectives":{}};var pug_html = "", protect_stack = [], pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (JSON, Object, console, data, embeddedLinguisticResources, params, util) {
      function setRefGender(obj, gender) {
  util.genderNumberManager.setRefGender(obj, gender, null);
}
function getRefGender(obj) {
  return util.genderNumberManager.getRefGender(obj);
}
function setRefNumber(obj, number) {
  util.genderNumberManager.setRefNumber(obj, number);
}
function getRefNumber(obj) {
  return util.genderNumberManager.getRefNumber(obj);
}
function setRefGenderNumber(obj, gender, number) {
  util.genderNumberManager.setRefGenderNumber(obj, gender, number);
}
function getAnonymous(gender, number) {
  return util.genderNumberManager.getAnonymous(gender, number);
}
function getAnonMS() {
  return util.genderNumberManager.getAnonMS();
}
function getAnonMP() {
  return util.genderNumberManager.getAnonMP();
}
function getAnonFS() {
  return util.genderNumberManager.getAnonFS();
}
function getAnonFP() {
  return util.genderNumberManager.getAnonFP();
}
function resetRep(obj) {
  util.refsManager.resetRep(obj);
}
function hasTriggeredRef(obj) {
  return util.refsManager.hasTriggeredRef(obj);
}
function setTriggeredRef(obj) {
  util.refsManager.setTriggeredRef(obj);
}
function dumpRefMap() {
  util.refsManager.dumpRefMap();
}
function getNextRep(obj, params) {
  return util.refsManager.getNextRep(obj, params);
}
function dumpHasSaid() {
  util.saidManager.dumpHasSaid();
}
function getDumpHasSaid() {
  return util.saidManager.getDumpHasSaid();
}
function recordSaid(key) {
  util.saidManager.recordSaid(key);
}
function deleteSaid(key) {
  util.saidManager.deleteSaid(key);
}
function hasSaid(key) {
  return util.saidManager.hasSaid(key);
}
function recordValue(key, value) {
  util.getSaidManager().recordValue(key, value);
}
function deleteValue(key) {
  util.getSaidManager().deleteValue(key);
}
function getValue(key) {
  return util.getSaidManager().getValue(key);
}
function hasFlag(params, flag) {
  return util.helper.hasFlag(params, flag);
}
function getFlagValue(params, flag) {
  return util.helper.getFlagValue(params, flag);
}
function protectString(string) {
  return util.helper.protectString(string);
}
pug_mixins["uppercaseWords"] = pug_interp = function(str){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤" + (pug_escape(null == (pug_interp = util.helper.getUppercaseWords(str)) ? "" : pug_interp)) + "¤";
};
function isSentenceStart() {
  return util.helper.isSentenceStart();
}
function getMorF(table, obj) {
  return util.helper.getMFN(table, obj);
}
function getMFN(table, obj) {
  return util.helper.getMFN(table, obj);
}
function getSorP(table, obj) {
  return util.helper.getSorP(table, obj);
}
let spy = {
  getPugHtml: function() {
    return pug_html;
  },
  getPugMixins: function() {
    return pug_mixins;
  },
  setPugHtml: function(new_pug_html) {
    pug_html = new_pug_html;
  },
  appendPugHtml: function(append) {
    pug_html = pug_html + append;
  },
  appendDoubleSpace: function() {
    pug_html = pug_html + "  ";
  },
  getEmbeddedLinguisticResources: function() {
    return embeddedLinguisticResources;
  },
  
  // we should avoid this one as util. is already available
  isEvaluatingEmpty: function() {
    return util.saveRollbackManager.isEvaluatingEmpty;
  },
  
  isEvaluatingChoosebest: function() {
    return util.saveRollbackManager.isEvaluatingChoosebest;
  }
}
pug_mixins["dummy"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_mixins['dummy']();
};
pug_mixins["insertVal"] = pug_interp = function(val){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤" + (pug_escape(null == (pug_interp = val) ? "" : pug_interp)) + "¤";
};
pug_mixins["insertValUnescaped"] = pug_interp = function(val){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤" + (null == (pug_interp = val) ? "" : pug_interp) + "¤";
};
function printObj(before, obj) {
  console.log(before + ' ' + JSON.stringify(obj).substring(0, 20) );
}
pug_mixins["flushBuffer"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤";
};
pug_mixins["eatSpace"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤EATSPACE¤";
};
function logParams(params) {
  console.log('params: ' + JSON.stringify(params));
}
function valueToSorP(val) {
  return val > 1 ? 'P' : 'S';
}
pug_mixins["toHtmlList"] = pug_interp = function(obj){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "\u003Cul\u003E";
// iterate obj
;(function(){
  var $$obj = obj;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var val = $$obj[index];
if (val!=null && typeof(val) == "object") {
pug_html = pug_html + "\u003Cli\u003E" + "¤" + (pug_escape(null == (pug_interp = index) ? "" : pug_interp)) + "¤" + "¤: ¤";
pug_mixins["toHtmlList"](val);
pug_html = pug_html + "¤¤\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli\u003E" + "¤" + (pug_escape(null == (pug_interp = index + ': ' + val) ? "" : pug_interp)) + "¤" + "\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var val = $$obj[index];
if (val!=null && typeof(val) == "object") {
pug_html = pug_html + "\u003Cli\u003E" + "¤" + (pug_escape(null == (pug_interp = index) ? "" : pug_interp)) + "¤" + "¤: ¤";
pug_mixins["toHtmlList"](val);
pug_html = pug_html + "¤¤\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli\u003E" + "¤" + (pug_escape(null == (pug_interp = index + ': ' + val) ? "" : pug_interp)) + "¤" + "\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);
pug_html = pug_html + "\u003C\u002Ful\u003E";
};
pug_mixins["foreach"] = pug_interp = function(elts, mixinFct, asm, params){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.asmManager.foreach(elts, mixinFct, asm, params);
pug_html = pug_html + "¤¤¤";
};
pug_mixins["value"] = pug_interp = function(obj, params){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.valueManager.value(obj, params);
pug_html = pug_html + "¤¤¤";
};
pug_mixins["syn"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var items = [];
for (pug_interp = 0; pug_interp < arguments.length; pug_interp++) {
  items.push(arguments[pug_interp]);
}
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.synManager.simpleSyn(items);
pug_html = pug_html + "¤¤¤";
};
function syn_fct(items) {
  return util.synManager.synFct(items);
}
pug_mixins["agreeAdj"] = pug_interp = function(adjective, subject, params){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.adjectiveManager.agreeAdj(adjective, subject, params);
pug_html = pug_html + "¤¤¤";
};
pug_mixins["substantive"] = pug_interp = function(subst, subject){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤" + "¤" + (pug_escape(null == (pug_interp = util.substantiveManager.getSubstantive(subst, subject, null)) ? "" : pug_interp)) + "¤" + "¤¤¤";
};
pug_mixins["recipientPossession"] = pug_interp = function(owned){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.possessiveManager.recipientPossession(owned);
pug_html = pug_html + "¤¤¤";
};
pug_mixins["thirdPossession"] = pug_interp = function(owner, owned, params){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.possessiveManager.thirdPossession(owner, owned, params);
pug_html = pug_html + "¤¤¤";
};
pug_mixins["subjectVerb"] = pug_interp = function(subject, verbInfo, params){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.nominalGroupManager.subjectVerb(subject, verbInfo, params);
pug_html = pug_html + "¤¤¤";
};
pug_mixins["subjectVerbAdj"] = pug_interp = function(subject, verbInfo, adjective, params){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.nominalGroupManager.subjectVerbAdj(subject, verbInfo, adjective, params);
pug_html = pug_html + "¤¤¤";
};
pug_mixins["verb"] = pug_interp = function(subject, verbInfo){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤" + "¤" + (pug_escape(null == (pug_interp = util.verbsManager.getAgreeVerb(subject, verbInfo)) ? "" : pug_interp)) + "¤" + "¤¤¤";
};
pug_mixins["verbPart"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤" + "¤" + (pug_escape(null == (pug_interp = util.verbsManager.popVerbPart()) ? "" : pug_interp)) + "¤" + "¤¤¤";
};
util.setSpy(spy);
// default value if not provided in the parameters
data = data || {
  salesQty: 1000,
  salesAmount: 500000,
}

pug_mixins['synHelper1'] = pug_interp = function synHelper1(pos) {
  switch(pos){
case 1:
pug_html = pug_html + "¤¤";
pug_mixins["value"](data.salesQty);
pug_html = pug_html + "¤ items were sold¤¤\n¤¤for a total amount of ¤";
pug_mixins["value"](data.salesAmount, {'FORMAT': '0a$'});
pug_html = pug_html + "¤¤";
  break;
case 2:
pug_html = pug_html + "¤total sales were ¤";
pug_mixins["value"](data.salesAmount, {'FORMAT': '0a$'});
pug_html = pug_html + "¤ for ¤";
pug_mixins["value"](data.salesQty);
pug_html = pug_html + "¤ items¤";
  break;
  }
};
util.synManager.runSynz('synHelper1', 2, Object.assign({}, undefined, {}));
pug_html = pug_html + "¤.¤";
    }.call(this, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "Object" in locals_for_with ?
        locals_for_with.Object :
        typeof Object !== 'undefined' ? Object : undefined, "console" in locals_for_with ?
        locals_for_with.console :
        typeof console !== 'undefined' ? console : undefined, "data" in locals_for_with ?
        locals_for_with.data :
        typeof data !== 'undefined' ? data : undefined, "embeddedLinguisticResources" in locals_for_with ?
        locals_for_with.embeddedLinguisticResources :
        typeof embeddedLinguisticResources !== 'undefined' ? embeddedLinguisticResources : undefined, "params" in locals_for_with ?
        locals_for_with.params :
        typeof params !== 'undefined' ? params : undefined, "util" in locals_for_with ?
        locals_for_with.util :
        typeof util !== 'undefined' ? util : undefined));
    ;;return locals.util.filterAll(pug_html);}
    export default template;
    