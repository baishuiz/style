;(function(){
	var helper = {
		getPattern : function(className){
            var reg = new RegExp("\\b"+className+"\\b","g");
            return reg;
		},

		attachLoader : function(key, fn, loaderHandle){
			var hasLoaderHandle = (typeof loaderHandle === "function");
			if(hasLoaderHandle){
                loaderHandle(key, fn);
			} else {
                window[key] = handle;
			}
		}
	};

	var style = {
		addClass : function(dom, className){
			var currentClassNames = dom.className;
			var reg = helper.getPattern(className);
			reg.test(currentClassNames) ||  (dom.className += " " + className);
		},
		
		removeClass : function(dom, className){
			var reg = helper.getPattern(className);
			dom.className = dom.className.replace(reg,"").replace(/\t+/,"");
		}
	}

	helper.attachLoader("Air_style", style);
})();
