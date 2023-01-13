!function(){"use strict";var e=window.wp.element;const{registerPlugin:t}=wp.plugins,{PluginDocumentSettingPanel:r}=wp.editPost,{__:__}=wp.i18n,{useSelect:a,useDispatch:n}=wp.data,{TextControl:o,ComboboxControl:i}=wp.components,{useState:l}=wp.element,{union:m,map:g,isEmpty:p}=lodash,y=t=>{const{wpGbPrimarycategoryId:r,categoryTypes:p,Taxonomy:y,TaxonomyName:c}=a((e=>{var r,a;const n=null===(r=t.primaryCategory)||void 0===r?void 0:r.taxonomy,o=null===(a=t.primaryCategory)||void 0===a?void 0:a.taxonomyName,i=e("core").getEntityRecords("taxonomy",n,{per_page:20});return{wpGbPrimarycategoryId:String(e("core/editor").getEditedPostAttribute("meta")[`wp_gb_primary_${n}`]),categoryTypes:m([{name:__("Select "+o,"wp-gb-primary-category"),id:"0"}],i),Taxonomy:n,TaxonomyName:o}})),{editPost:s}=n("core/editor"),u=g(p,(e=>{let{name:t,id:r}=e;return{label:t,value:r}})),[d,w]=l(r),[b,_]=l(u);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(i,{help:__("Search "+c+" to get Suggestions","wp-gb-primary-category"),value:d,onChange:e=>(e=>{w(e),s({meta:{[`wp_gb_primary_${y}`]:String(e)}})})(e),options:b,onFilterValueChange:e=>(e=>{if(""===e)_(u);else{let t=wp.data.select("core").getEntityRecords("taxonomy",y,{per_page:5,search:e});if(null!=t&&0<t.length){let e=g(t,(e=>{let{name:t,id:r}=e;return{label:t,value:r}}));_(e)}}})(e)}),(t=>{if("0"===r)return __("Primary "+c+" Not Selected","wp-gb-primary-category");if("0"!==t){const r=wp.data.select("core").getEntityRecords("taxonomy",y,{include:[parseInt(t)]});return null!=r&&0<r.length?(0,e.createElement)(e.Fragment,null,(0,e.createElement)("h4",null,(0,e.createElement)("a",{href:r[0].link},r[0].name))):__("Loading...","wp-gb-primary-category")}return __("Primary "+c+" Not Selected","wp-gb-primary-category")})(d),(0,e.createElement)(o,{type:"hidden",value:"0"===r?"0":r,onChange:e=>s({meta:{[`wp_gb_primary_${y}`]:String(e)}})}))};t("plugin-wp-gb-primary-category",{render:()=>(0,e.createElement)(r,{name:"wp_gb_primary_category",title:__("Primary Categories Selection","wp-gb-primary-category"),className:"wp-gb-primary-category"},wpGbPrimaryCategory.primaryCategories.map(((t,r)=>(0,e.createElement)(y,{primaryCategory:t})))),icon:null})}();