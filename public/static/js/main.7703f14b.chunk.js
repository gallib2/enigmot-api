(this.webpackJsonpenigma=this.webpackJsonpenigma||[]).push([[0],{102:function(u,e,t){},103:function(u,e,t){},127:function(u,e,t){},130:function(u,e,t){},131:function(u,e,t){},132:function(u,e,t){},133:function(u,e,t){},134:function(u,e,t){},135:function(u,e,t){},136:function(u,e,t){},137:function(u,e,t){},138:function(u,e,t){"use strict";t.r(e);var a=t(0),n=t.n(a),r=t(10),c=t.n(r),E=(t(102),t(12)),s=(t(103),t(9)),o=t.n(s),i=t(14),l=t(6),D=t(28),A=t.n(D),C={api_route:window.location.hostname.includes("localhost")?"http://localhost:4000":"https://enigmot-api.herokuapp.com",texts:{errors:{generalError:"error accured, please try again later",generalFieldsError:"make sure all fields are valid",emailError:"email is not valid",passwordError:"password is not valid - password must contain min 8 letters, one upercase letter, one lowercase letter and one digit",usernameError:"username is not valid",savePaintError:"Error occurred while trying to save image, please try again later",markSolvedError:"Error occurred while trying to mark as sloved, please try again later"}}},F={isAuthenticated:!1,authenticte:function(u){this.isAuthenticated=!0},signout:function(u){this.isAuthenticated=!1}};function d(u){var e={method:"POST",headers:{"content-type":"application/json"},data:{email:u.email,username:u.username,password:u.password},url:"".concat(C.api_route,"/user/signup"),withCredentials:!0};return A()(e)}function m(u){var e={method:"POST",headers:{"content-type":"application/json"},data:{email:u.email,password:u.password},url:"".concat(C.api_route,"/user/login"),withCredentials:!0};return A()(e)}function p(){return B.apply(this,arguments)}function B(){return(B=Object(i.a)(o.a.mark((function u(){var e,t,a;return o.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:if(u.prev=0,!F.isAuthenticated){u.next=3;break}return u.abrupt("return",!0);case 3:return e={method:"GET",headers:{"content-type":"application/json"},url:"".concat(C.api_route,"/user/login/auth"),withCredentials:!0},u.next=6,A()(e);case 6:return t=u.sent,(a=t&&t.data&&t.data.auth)&&F.authenticte(),u.abrupt("return",a);case 12:return u.prev=12,u.t0=u.catch(0),u.abrupt("return",!1);case 15:case"end":return u.stop()}}),u,null,[[0,12]])})))).apply(this,arguments)}function f(){var u={method:"POST",headers:{"content-type":"application/json"},data:{},url:"".concat(C.api_route,"/user/logout"),withCredentials:!0};return A()(u)}var v=t(185),h=t(181),b=t(179),g=t(188),j=t(187),O=t(178),x=t(174),w=t(72),S=t.n(w),k=t(73),N=t.n(k),y=t(180),T=(t(68),function(u){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),r=t[0],c=t[1];return n.a.createElement(x.a,{className:"auth-form",variant:"outlined"},n.a.createElement(j.a,{htmlFor:"outlined-adornment-password",className:"auth-text-field"},"Password"),n.a.createElement(g.a,{className:"auth-text-field",id:"outlined-adornment-password",type:r?"text":"password",value:u.password,onChange:function(e){u.handlePasswordChange(e)},error:u.error,name:"password",onBlur:u.handleBlur,endAdornment:n.a.createElement(O.a,{position:"end"},n.a.createElement(b.a,{"aria-label":"toggle password visibility",onClick:function(){return c(!r)},onMouseDown:function(u){return u.preventDefault()},edge:"end"},r?n.a.createElement(S.a,null):n.a.createElement(N.a,null))),labelWidth:70}),n.a.createElement(y.a,{error:u.error},u.helperText))}),P=t(74),I={isError:!1,errorMsg:""};function _(u){var e=Object.assign({},I);return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(u).toLowerCase())||(e.isError=!0,e.errorMsg=C.texts.errors.emailError),e}function M(u){var e=Object.assign({},I);return/^(?=(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?(?:[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C2\uA7C4-\uA7C7\uA7C9\uA7F5\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]))(?=(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?(?:[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C3\uA7C8\uA7CA\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43]))(?=(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?[0-9])(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){8,50}$/.test(String(u))||(e.isError=!0,e.errorMsg=C.texts.errors.passwordError),e}function q(u){var e=Object.assign({},I);return/^[a-zA-Z ]{3,30}$/.test(String(u).toLowerCase())||(e.isError=!0,e.errorMsg=C.texts.errors.usernameError),e}var H=function(u,e){return{email:_,password:M,username:q}[u](e)},z=["email","password","username"],V=function(){var u=Object(a.useState)(""),e=Object(l.a)(u,2),t=e[0],n=e[1],r=Object(a.useState)(!1),c=Object(l.a)(r,2),E=c[0],s=c[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),D=i[0],A=i[1],C=Object(a.useState)(!1),F=Object(l.a)(C,2),d=F[0],m=F[1],p=Object(a.useState)(""),B=Object(l.a)(p,2),f=B[0],v=B[1],h=Object(a.useState)(!1),b=Object(l.a)(h,2),g=b[0],j=b[1],O=function(u){var e=u.setError,t=u.errorMsg,a=u.field,r=function(u){return{email:n,password:A,username:v}[u]}(a),c=function(u){return{email:s,password:m,username:j}[u]}(a);r(t),c(e)};return{fieldsError:{emailHelperText:t,emailIsError:E,passwordHelperText:D,passwordIsError:d,usernameHelperText:f,usernameIsError:g},setErrors:O,validateField:function(u,e){var t=H(u,e);O({setError:t.isError,errorMsg:t.errorMsg,field:u})},isAllFieldsAreValid:function(u){var e,t=Object(P.a)(z);try{for(t.s();!(e=t.n()).done;){var a=e.value;if(H(a,u[a]).isError)return!1}}catch(n){t.e(n)}finally{t.f()}return!0}}},U=t.p+"static/media/enigmot1.11af063d.png",W=function(u){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),r=t[0],c=t[1],s=Object(a.useState)(""),D=Object(l.a)(s,2),A=D[0],d=D[1],m=V(),p=m.fieldsError,B=m.setErrors,f=m.validateField,b=m.isAllFieldsAreValid,g=Object(a.useState)(""),j=Object(l.a)(g,2),O=j[0],x=j[1],w=Object(a.useState)(""),S=Object(l.a)(w,2),k=S[0],N=S[1],y=Object(a.useState)(""),P=Object(l.a)(y,2),I=P[0],_=P[1],M=Object(E.h)().state,q={email:_,password:N,username:x},H=function(u){var e=u.target.name;q[e](u.target.value),B({setError:!1,errorMsg:"",field:e}),d("")},z=function(e){if(u.toValidate){var t=e.target.name,a=e.target.value;f(t,a),d("")}},W=function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!u.toValidate){e.next=6;break}if(b({email:I,password:k,username:O})){e.next=6;break}return d(C.texts.errors.generalFieldsError),e.abrupt("return");case 6:return d(""),e.prev=7,a={email:I,password:k},u.showUserName&&(a.username=O),e.next=12,u.submitFunction(a);case 12:F.authenticte(),c(!0),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),c(!1),d(C.texts.errors.generalError);case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(u){return e.apply(this,arguments)}}();return r?n.a.createElement(E.a,{to:(null===M||void 0===M?void 0:M.from)||"/"}):n.a.createElement("div",{className:"auth-container"},n.a.createElement("img",{className:"auth-img",src:U}),n.a.createElement("div",{className:"auth-title"},u.title),n.a.createElement("form",{className:"auth-form",noValidate:!0,autoComplete:"off",onSubmit:W},u.showUserName&&n.a.createElement(v.a,{name:"username",variant:"outlined",label:"Username",type:"text",value:O,onChange:H,className:"signup-text-field",error:p.usernameIsError,helperText:p.usernameHelperText,onBlur:z}),n.a.createElement(v.a,{name:"email",variant:"outlined",label:"Email",type:"email",value:I,onChange:H,className:"auth-text-field",error:p.emailIsError,helperText:p.emailHelperText,onBlur:z}),n.a.createElement(T,{password:k,handlePasswordChange:H,handleBlur:z,helperText:p.passwordHelperText,error:p.passwordIsError}),n.a.createElement(h.a,{type:"submit",className:"auth-text-field btn"},u.submitButtonText),n.a.createElement("div",null,A),n.a.createElement("div",{className:"auth-text-field swip-auth-form",onClick:function(){return u.swipAuthFormFunc&&u.swipAuthFormFunc()}},u.swipAuthFormText)))},L=(t(127),function(){var u=Object(a.useState)(!1),e=Object(l.a)(u,2),t=e[0],r=e[1],c=Object(a.useState)(!1),s=Object(l.a)(c,2),D=s[0],A=s[1],C=Object(E.h)().state;return Object(a.useEffect)((function(){function u(){return(u=Object(i.a)(o.a.mark((function u(){var e;return o.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,p();case 2:e=u.sent,r(e);case 4:case"end":return u.stop()}}),u)})))).apply(this,arguments)}!function(){u.apply(this,arguments)}()}),[]),D?n.a.createElement(E.a,{to:"/login"}):t?n.a.createElement(E.a,{to:(null===C||void 0===C?void 0:C.from)||"/"}):n.a.createElement("div",null,n.a.createElement(W,{title:"Sign Up",showUserName:!0,submitFunction:d,submitButtonText:"Submit",swipAuthFormFunc:function(){return A(!0)},swipAuthFormText:"already joined? login",toValidate:!0}))}),R=function(){var u=Object(a.useState)(!1),e=Object(l.a)(u,2),t=e[0],r=e[1],c=Object(a.useState)(!1),s=Object(l.a)(c,2),D=s[0],A=s[1],C=Object(E.h)().state;return Object(a.useEffect)((function(){function u(){return(u=Object(i.a)(o.a.mark((function u(){var e;return o.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,p();case 2:e=u.sent,r(e);case 4:case"end":return u.stop()}}),u)})))).apply(this,arguments)}!function(){u.apply(this,arguments)}()}),[]),D?n.a.createElement(E.a,{to:"/signup"}):t?n.a.createElement(E.a,{to:(null===C||void 0===C?void 0:C.from)||"/"}):n.a.createElement("div",null,n.a.createElement(W,{title:"Welcome back",showUserName:!1,submitFunction:m,submitButtonText:"login",swipAuthFormFunc:function(){return A(!0)},swipAuthFormText:"new one? join here",toValidate:!1}))},G=t(45),Z=t.n(G),$=t(86);function J(u){var e={method:"POST",headers:{"content-type":"application/json"},data:{paint:u.paint,riddleId:u.riddleId},url:"".concat(C.api_route,"/riddles/save"),withCredentials:!0};return A()(e)}function K(u){var e={method:"POST",headers:{"content-type":"application/json"},data:{riddleId:u.riddleId,solveState:u.solveState},url:"".concat(C.api_route,"/riddles/solve"),withCredentials:!0};return A()(e)}t(130);var Q=t(51),X=t.n(Q),Y=(t(131),function(u){var e=Object(a.useState)(u.riddle.is_solved),t=Object(l.a)(e,2),r=t[0],c=t[1],E=Object(a.useState)("btn-canvas change"),s=Object(l.a)(E,2),D=s[0],A=s[1];Object(a.useEffect)((function(){A(r?"btn-canvas change solved":"btn-canvas change")}),[r]);var C=function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.stopPropagation(),a=!r,e.next=5,K({riddleId:u.riddle._id,solveState:a});case 5:c(a),u.onClickChangeSolveState&&u.onClickChangeSolveState(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),u.onErrorChangeSolveState&&u.onErrorChangeSolveState();case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(u){return e.apply(this,arguments)}}();return n.a.createElement(n.a.Fragment,null,u.showWrap?n.a.createElement("div",{className:"riddle-state-container",style:u.style,onClick:C},n.a.createElement("div",{className:"btn-container"},n.a.createElement(X.a,{className:D}))):n.a.createElement("div",{className:"riddle-state-container nowrap",style:u.style},n.a.createElement(X.a,{className:D,onClick:C}),u.content||null))}),uu=t(75),eu=t.n(uu),tu=t(76),au=t.n(tu),nu=t(77),ru=t.n(nu),cu=t(79),Eu=t.n(cu),su=t(80),ou=t.n(su),iu=t(78),lu=t.n(iu),Du=(t(132),{borderTop:"0.0625rem solid #9c9c9c",borderRadius:"0.25rem",width:"100%",height:"100vh",overflow:"hidden"}),Au=function(u){var e=Object(a.useState)("black"),t=Object(l.a)(e,2),r=t[0],c=t[1],E=Object(a.useState)(4),s=Object(l.a)(E,2),D=s[0],A=s[1],F=Object(a.useState)(Du),d=Object(l.a)(F,2),m=d[0],p=(d[1],Object(a.useState)("")),B=Object(l.a)(p,2),f=B[0],v=B[1],h=Object(a.useRef)(null);Object(a.useEffect)((function(){!Z.a.isEmpty(u.riddle.paint)&&g(u.riddle.paint)}),[]);var b=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.current.exportPaths();case 3:return t=e.sent,v(""),e.next=7,J({paint:t,riddleId:u.riddle._id});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),v(C.texts.errors.savePaintError);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),g=function(u){h.current.loadPaths(u)};return n.a.createElement("div",{className:"riddle-canvas-container"},n.a.createElement("div",{className:"error-text"},f),n.a.createElement("div",{className:"btn-container"},n.a.createElement(eu.a,{className:"btn-canvas save",onClick:b}),n.a.createElement(au.a,{className:"btn-canvas change",onClick:function(){c("black"),A(4)}}),n.a.createElement(ru.a,{className:"btn-canvas change",onClick:function(){c("white"),A(7)}}),n.a.createElement(lu.a,{className:"btn-canvas change",onClick:function(){return h.current.clearCanvas()}}),n.a.createElement(Eu.a,{className:"btn-canvas change",onClick:function(){return h.current.undo()}}),n.a.createElement(ou.a,{className:"btn-canvas change",onClick:function(){return h.current.redo()}}),n.a.createElement(Y,{riddle:u.riddle,showWrap:!1,onClickChangeSolveState:function(){return v("")},onErrorChangeSolveState:function(){return v(C.texts.errors.markSolvedError)}})),n.a.createElement($.a,{ref:h,allowOnlyPointerType:"all",style:m,width:"600",height:"400",strokeWidth:D,strokeColor:r}))},Cu=(t(133),function(u){var e=u.answer,t=u.onBackClick;return n.a.createElement("div",{className:"riddle-answer-container"},n.a.createElement("div",{className:"answer-title"},"Answer"),n.a.createElement("div",{className:"riddle-answer-text"},e),n.a.createElement("div",{className:"back-btn",onClick:t},"back"))}),Fu=(t(134),t(81)),du=t.n(Fu),mu=t(83),pu=t.n(mu),Bu=t(82),fu=t.n(Bu),vu=function(){var u=Object(E.g)(),e=Object(E.h)().state,t=Object(a.useState)(!0),r=Object(l.a)(t,2),c=r[0],s=r[1],o=Object(a.useState)("btn collapsed"),i=Object(l.a)(o,2),D=i[0],A=i[1],C=Object(a.useState)("question-container collapsed"),F=Object(l.a)(C,2),d=F[0],m=F[1],p=Object(a.useState)("120px"),B=Object(l.a)(p,2),f=B[0],v=B[1],h=Object(a.useState)(!1),b=Object(l.a)(h,2),g=b[0],j=b[1],O=Object(a.useRef)();Object(a.useEffect)((function(){!Z.a.isEmpty(e)&&!Z.a.isEmpty(e.riddle)||x()}),[]);var x=function(){u.push("/")},w=function(){var u=O.current.scrollHeight+50;return"".concat(u,"px")};return n.a.createElement("div",{className:"riddle-container",style:{width:"100%",height:"100vh",overflow:"hidden"}},n.a.createElement("div",{className:"riddle-container-head"},n.a.createElement("div",{className:"arrow-back"},n.a.createElement(du.a,{onClick:x})),n.a.createElement("div",{className:"riddle-answer-btn",onClick:function(){return j(!0)}},n.a.createElement(fu.a,null))),g?n.a.createElement(Cu,{answer:e.riddle.answer,onBackClick:function(){return j(!1)}}):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:d,style:{maxHeight:f}},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"title"},n.a.createElement("div",{className:D,onClick:function(){c?(A("btn expand"),m("question-container expand"),v(w),s(!1)):(A("btn collapsed"),m("question-container collapsed"),v("100px"),s(!0))}},n.a.createElement(pu.a,{fontSize:"small"})),n.a.createElement("div",{className:"title-text"}," ",e.riddle.question&&e.riddle.question.title," ")),n.a.createElement("div",{className:"question",ref:O}," ",e.riddle.question&&e.riddle.question.content," "))),n.a.createElement(Au,{riddle:e.riddle})))};function hu(){return bu.apply(this,arguments)}function bu(){return(bu=Object(i.a)(o.a.mark((function u(){var e,t,a;return o.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return e={method:"GET",headers:{"content-type":"application/json"},url:"".concat(C.api_route,"/riddles"),withCredentials:!0},u.next=3,A()(e);case 3:return t=u.sent,a=t&&t.data&&t.data||[],u.abrupt("return",a);case 6:case"end":return u.stop()}}),u)})))).apply(this,arguments)}t(135);var gu=function(u){var e=u.riddle,t=Object(a.useState)(""),r=Object(l.a)(t,2),c=r[0],s=r[1],o=Object(a.useState)("mark as solved"),i=Object(l.a)(o,2),D=i[0],A=i[1],C=Object(a.useState)(!1),F=Object(l.a)(C,2),d=(F[0],F[1]),m=Object(a.useState)("unsolved"),p=Object(l.a)(m,2),B=(p[0],p[1]),f=Object(E.g)();Object(a.useEffect)((function(){e.is_solved&&v({text:"mark as unsolved",solved:!0,className:"solved"}),s(e.subject)}),[]);var v=function(u){var e=u.text,t=u.solved,a=u.className;A(e),d(t),B(a)};return n.a.createElement("div",{className:"riddle-item-container",onClick:function(){f.push({pathname:"/riddle",state:{riddle:e}})}},n.a.createElement("div",{className:"solved-container"},n.a.createElement(Y,{showWrap:!0,riddle:e,content:n.a.createElement("span",{className:"riddle-item-btn"},D),onClickChangeSolveState:function(u){v(u?{text:"mark as unsolved",solved:!0,className:"solved"}:{text:"mark as solved",solved:!1,className:"unsolved"})},style:{display:"flex",alignItems:"center",justifyContent:"start"}})),n.a.createElement("div",{className:"riddle-item-title"},e.question.title),n.a.createElement("div",{className:"riddle-item-subject"},c))},ju=(t(136),t(182)),Ou=t(183),xu=t(184),wu=t(139),Su=t(84),ku=t.n(Su),Nu=t(186),yu=t(85),Tu=(t(137),Object(ju.a)((function(u){return{root:{flexGrow:1},menuButton:{marginRight:u.spacing(2)},title:{flexGrow:1}}})));function Pu(u){var e=Tu(),t=n.a.useState(!0),a=Object(l.a)(t,2),r=a[0],c=(a[1],n.a.useState(null)),E=Object(l.a)(c,2),s=E[0],o=E[1],i=Boolean(s),D=function(){o(null)};return n.a.createElement("div",{className:e.root},n.a.createElement(Ou.a,{position:"static"},n.a.createElement(xu.a,{className:"test"},n.a.createElement(wu.a,{variant:"h6",className:e.title},"Riddles"),r&&n.a.createElement("div",null,n.a.createElement(b.a,{"aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(u){o(u.currentTarget)},color:"inherit"},n.a.createElement(ku.a,null)),n.a.createElement(yu.a,{id:"menu-appbar",anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:D},n.a.createElement(Nu.a,{onClick:function(){u.logOut(),D()}},"Logout"))))))}var Iu=function(u){var e=Object(E.g)(),t=Object(a.useState)([]),r=Object(l.a)(t,2),c=r[0],s=r[1],D=function(){var u=Object(i.a)(o.a.mark((function u(t){return o.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,f();case 3:F.signout(),e.push("/login"),u.next=9;break;case 7:u.prev=7,u.t0=u.catch(0);case 9:case"end":return u.stop()}}),u,null,[[0,7]])})));return function(e){return u.apply(this,arguments)}}();return Object(a.useEffect)((function(){function u(){return(u=Object(i.a)(o.a.mark((function u(){var t;return o.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,hu();case 3:t=u.sent,s(t),u.next=11;break;case 7:u.prev=7,u.t0=u.catch(0),F.signout(),e.push("/login");case 11:case"end":return u.stop()}}),u,null,[[0,7]])})))).apply(this,arguments)}!function(){u.apply(this,arguments)}()}),[]),n.a.createElement("div",{className:"home-page-container"},n.a.createElement(Pu,{logOut:D}),n.a.createElement("div",{className:"riddle-box-container"},n.a.createElement("div",{className:"riddles-boxes"},c.map((function(u,e){return n.a.createElement(gu,{key:e,riddle:u})})))))},_u=function(u){for(var e=u.component,t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];return n.a.createElement(E.b,Object.assign({},a,{render:function(u){return F.isAuthenticated?n.a.createElement(e,u):n.a.createElement(E.a,{to:{pathname:"/login",state:{from:u.location}}})}}))};var Mu=function(){return n.a.createElement(E.d,null,n.a.createElement(_u,{exact:!0,path:"/riddle",component:vu}),n.a.createElement(E.b,{exact:!0,path:"/login",component:R}),n.a.createElement(E.b,{exact:!0,path:"/signup",component:L}),n.a.createElement(_u,{exact:!0,path:"/",component:Iu}),n.a.createElement(E.b,{path:"*",component:function(){return"404 Not Found"}}))},qu=function(u){u&&u instanceof Function&&t.e(3).then(t.bind(null,190)).then((function(e){var t=e.getCLS,a=e.getFID,n=e.getFCP,r=e.getLCP,c=e.getTTFB;t(u),a(u),n(u),r(u),c(u)}))},Hu=t(25);c.a.render(n.a.createElement(Hu.a,null,n.a.createElement(n.a.StrictMode,null,n.a.createElement(Mu,null))),document.getElementById("root")),qu()},68:function(u,e,t){}},[[138,1,2]]]);
//# sourceMappingURL=main.7703f14b.chunk.js.map