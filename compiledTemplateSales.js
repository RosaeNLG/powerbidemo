function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {const embeddedLinguisticResources = {"verbs":{},"words":{},"adjectives":{}};var pug_html = "", protect_stack = [], pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (JSON, Object, console, data, embeddedLinguisticResources, params, synHelper1, util) {
      /**
 * @license
 * Copyright 2021 Ludan Stoecklé
 * SPDX-License-Identifier: Apache-2.0
 */
//-------- allows core to communicate with the inner of the template mechanic already used by Pug (i.e. pug_html)
util.setSpy({
  getPugHtml: function () {
    return pug_html;
  },
  setPugHtml: function (new_pug_html) {
    pug_html = new_pug_html;
  },
  appendPugHtml: function (append) {
    pug_html = pug_html + append;
  },
});
util.setEmbeddedLinguisticResources(embeddedLinguisticResources);
/**
 * @license
 * Copyright 2021 Ludan Stoecklé
 * SPDX-License-Identifier: Apache-2.0
 */
//-------- using GenderNumberManager
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
//-------- using RefsManager
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
//-------- using SaidManager
function dumpHasSaid() {
  util.saidManager.dumpHasSaid();
}
function getDumpHasSaid() {
  return util.saidManager.getDumpHasSaid();
}
function getHasSaidCopy() {
  return util.saidManager.getHasSaidCopy();
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
//-------- using helper
function hasFlag(params, flag) {
  return util.helper.hasFlag(params, flag);
}
function getFlagValue(params, flag) {
  return util.helper.getFlagValue(params, flag);
}
function protectString(string) {
  return util.helper.protectString(string);
}
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
//-------- using DictManager
function setWordData(word, wordData) {
  util.languageImpl.getDictManager().setWordData(word, wordData);
}
function setAdjData(word, wordData) {
  util.languageImpl.getDictManager().setAdjData(word, wordData);
}
/**
 * @license
 * Copyright 2021 Ludan Stoecklé
 * SPDX-License-Identifier: Apache-2.0
 */
function syn_fct(items) {
  return util.synManager.synFct(items);
}
function printObj(before, obj) {
  console.log(before + ' ' + JSON.stringify(obj).substring(0, 20));
}
function logParams(params) {
  console.log('params: ' + JSON.stringify(params));
}
function valueToSorP(val) {
  return util.languageImpl.isPlural(val) ? 'P' : 'S';
}
function debug(filename, line) {
  if (filename !== null) {
    pug_debug_filename = filename;
  }
  pug_debug_line = line;
  if (locals.renderDebug) {
    // locals is available
    let id = line;
    if (filename !== null) {
      id = filename.replace(/"/g, '') + ': ' + id;
    }
    pug_html = pug_html + `<span class="rosaenlg-debug" id="${id}"></span>`;
  }
}
pug_mixins["foreach"] = pug_interp = function(elts, mixinFct, asm, params){ // NAME_foreach
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
util.asmManager.foreach(elts, mixinFct, asm, params);
};
var foreach=pug_mixins["foreach"];
pug_mixins["value"] = pug_interp = function(obj, params){ // NAME_value
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
util.valueManager.value(obj, params);
};
var value=pug_mixins["value"];
pug_mixins["syn"] = pug_interp = function(){ // NAME_syn
var block = (this && this.block), attributes = (this && this.attributes) || {};
var items = [];
for (pug_interp = 0; pug_interp < arguments.length; pug_interp++) {
  items.push(arguments[pug_interp]);
}
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
util.synManager.simpleSyn(items);
};
var syn=pug_mixins["syn"];
pug_mixins["agreeAdj"] = pug_interp = function(adjective, subject, params){ // NAME_agreeAdj
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
util.adjectiveManager.agreeAdj(adjective, subject, params);
};
var agreeAdj=pug_mixins["agreeAdj"];
pug_mixins["recipientPossession"] = pug_interp = function(owned){ // NAME_recipientPossession
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
util.possessiveManager.recipientPossession(owned);
};
var recipientPossession=pug_mixins["recipientPossession"];
pug_mixins["thirdPossession"] = pug_interp = function(owner, owned, params){ // NAME_thirdPossession
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
util.possessiveManager.thirdPossession(owner, owned, params);
};
var thirdPossession=pug_mixins["thirdPossession"];
pug_mixins["dummy"] = pug_interp = function(){ // NAME_dummy
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_mixins['dummy']();
};
var dummy=pug_mixins["dummy"];
pug_mixins["flushBuffer"] = pug_interp = function(){ // NAME_flushBuffer
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤";
};
var flushBuffer=pug_mixins["flushBuffer"];
pug_mixins["eatSpace"] = pug_interp = function(){ // NAME_eatSpace
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤EATSPACE¤";
};
var eatSpace=pug_mixins["eatSpace"];
pug_mixins["uppercaseWords"] = pug_interp = function(str){ // NAME_uppercaseWords
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤" + (pug_escape(null == (pug_interp = util.helper.getUppercaseWords(str)) ? "" : pug_interp)) + "¤";
};
var uppercaseWords=pug_mixins["uppercaseWords"];
pug_mixins["toHtmlList"] = pug_interp = function(obj){ // NAME_toHtmlList
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
var toHtmlList=pug_mixins["toHtmlList"];
pug_mixins["verb"] = pug_interp = function(subject, verbInfo, params){ // NAME_verb
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
util.sentenceManager.verb(subject, verbInfo, params);
};
var verb=pug_mixins["verb"];
pug_mixins["subjectVerb"] = pug_interp = function(subject, verbInfo, params){ // NAME_subjectVerb
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
util.sentenceManager.subjectVerb(subject, verbInfo, params);
};
var subjectVerb=pug_mixins["subjectVerb"];
pug_mixins["subjectVerbAdj"] = pug_interp = function(subject, verbInfo, adjective, params){ // NAME_subjectVerbAdj
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
util.sentenceManager.subjectVerbAdj(subject, verbInfo, adjective, params);
};
var subjectVerbAdj=pug_mixins["subjectVerbAdj"];
pug_mixins["verbPart"] = pug_interp = function(){ // NAME_verbPart
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
util.verbsManager.popVerbPartInBuffer()
};
var verbPart=pug_mixins["verbPart"];
// default value if not provided in the parameters
data = data || {
  salesQty: 1000,
  salesAmount: 500000,
}

pug_mixins['synHelper1'] = pug_interp = function(pos){
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
var synHelper1=pug_mixins["synHelper1"];
util.synManager.runSynz(synHelper1, 'synHelper1', 2, Object.assign({}, undefined, {}));
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
        typeof params !== 'undefined' ? params : undefined, "synHelper1" in locals_for_with ?
        locals_for_with.synHelper1 :
        typeof synHelper1 !== 'undefined' ? synHelper1 : undefined, "util" in locals_for_with ?
        locals_for_with.util :
        typeof util !== 'undefined' ? util : undefined));
    ;;return locals.util.getFiltered();}
export default template;