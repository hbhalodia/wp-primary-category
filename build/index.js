!function(){"use strict";var e=window.wp.element;const{registerPlugin:t}=wp.plugins,{PluginDocumentSettingPanel:r}=wp.editPost,{__:__}=wp.i18n,{useSelect:a,useDispatch:n}=wp.data,{TextControl:o,ComboboxControl:l}=wp.components,{useState:g}=wp.element,{union:c,map:i,isEmpty:m}=lodash,p=()=>{const{wpGbPrimarycategoryId:t,categoryTypes:r}=a((e=>{const t=e("core").getEntityRecords("taxonomy","category",{per_page:20});return{wpGbPrimarycategoryId:String(e("core/editor").getEditedPostAttribute("meta").wp_gb_primary_category),categoryTypes:c([{name:__("Select Category","astro-gutenberg-block"),id:"0"}],t)}})),{editPost:m}=n("core/editor"),p=i(r,(e=>{let{name:t,id:r}=e;return{label:t,value:r}})),[y,s]=g(t),[u,d]=g(p);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l,{help:__("Search Category to get Suggestions","astro-gutenberg-block"),value:y,onChange:e=>(e=>{s(e),m({meta:{wp_gb_primary_category:String(e)}})})(e),options:u,onFilterValueChange:e=>(e=>{if(""===e)d(p);else{let t=wp.data.select("core").getEntityRecords("taxonomy","category",{per_page:5,search:e});if(null!=t&&0<t.length){let e=i(t,(e=>{let{name:t,id:r}=e;return{label:t,value:r}}));d(e)}}})(e)}),(0,e.createElement)("br",null),(r=>{if("0"===t)return __("Primary Catgory Not Selected","astro-gutenberg-block");if("0"!==r){const t=wp.data.select("core").getEntityRecords("taxonomy","category",{include:[parseInt(r)]});return null!=t&&0<t.length?(0,e.createElement)(e.Fragment,null,(0,e.createElement)("a",{href:t[0].link},t[0].name)):__("Loading...","astro-gutenberg-block")}return __("Primary Catgory Not Selected","astro-gutenberg-block")})(y),(0,e.createElement)(o,{type:"hidden",value:"0"===t?"0":t,onChange:e=>m({meta:{wp_gb_primary_category:String(e)}})}))};t("plugin-wp-gb-primary-category",{render:()=>(0,e.createElement)(r,{name:"wp_gb_primary_category",title:__("Select Primary Category","wp-gb-primary-category"),className:"wp-gb-primary-category"},(0,e.createElement)(p,null)),icon:null})}();