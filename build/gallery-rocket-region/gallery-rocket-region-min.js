YUI.add("gallery-rocket-region",function(e,t){"use strict";function i(){i.superclass.constructor.apply(this,arguments)}var n="destroyed",r=e.RView;i=e.extend(i,e.Base,{initializer:function(e){},destructor:function(){this.reset()},hide:function(){this.get("currentView")&&this.get("currentView").hide()},show:function(e){if(!e){this.get("currentView")&&this.get("currentView").show();return}if(!(e instanceof r))throw new Error("view of region must be instance/subinstance of rocket view");e!==this.get("currentView")&&this.reset(),e._set("container",this.get("selector")),e.render(),e.addTarget(this),this.set("currentView",e),this.fire("show",{view:e})},reset:function(){var e=this.get("currentView");if(!e||e.get(n))return;e.removeTarget(this),e.destroy(!1),this.set("currentView",null),this.fire("reset")}},{ATTRS:{selector:{value:null},currentView:{value:null}}}),e.RRegion=i},"gallery-2013.09.04-21-56",{requires:["gallery-rocket-view"]});
