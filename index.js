/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(content) {

        var httpImageReg = /http:\/\/[^?#]+\.(?:jpe?g|png|gif)/i;
        var pathImageReg = /('|"|\()\.(?:jpe?g|png|gif)('|"|\))/i;

        console.log(content);
	this.cacheable && this.cacheable();
	this.value = content;
	return "module.exports = " + JSON.stringify(content);
}
module.exports.seperable = true;
