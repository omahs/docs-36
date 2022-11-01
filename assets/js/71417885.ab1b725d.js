(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5773],{81616:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(47344),o=(0,n.zeroX)(1337..toString(16)),r=(0,n.zeroX)(8997..toString(16)),l=(0,n.zeroX)(80001..toString(16)),i=(0,n.zeroX)(137..toString(16)),s={development:{chainId:o,chainName:"Localhost development",nativeCurrency:{name:"Ethereum",symbol:"ETH",decimals:18},rpcUrls:["http://localhost:8545"],blockExplorerUrls:[""],iconUrls:["https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"]},mumbai:{chainId:l,chainName:"Polygon Testnet Mumbai",nativeCurrency:{name:"Matic",symbol:"MATIC",decimals:18},rpcUrls:["https://matic-mumbai.chainstacklabs.com","https://rpc-endpoints.superfluid.dev/mumbai"],blockExplorerUrls:["https://mumbai.polygonscan.com/"],iconUrls:["https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"]},mainnet:{chainId:i,chainName:"Polygon Mainnet",nativeCurrency:{name:"Matic",symbol:"MATIC",decimals:18},rpcUrls:["https://polygon-rpc.com"],blockExplorerUrls:["https://polygonscan.com/"],iconUrls:["https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"]},returnConfig:e=>e===o||e===r?s.development:e===l?s.mumbai:e===i?s.mainnet:s.development};t.default=s},23660:function(e,t,a){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var o=Object.getOwnPropertyDescriptor(t,a);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,o)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.MetaMask=t.zeroX=void 0;var l=a(47344);Object.defineProperty(t,"zeroX",{enumerable:!0,get:function(){return l.zeroX}}),t.MetaMask=r(a(98445))},98445:function(e,t,a){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var o=Object.getOwnPropertyDescriptor(t,a);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,o)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return o(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useWallet=t.WalletProvider=t.WalletContext=void 0;const i=r(a(67294)),s=a(42194),c=l(a(81616)),d=e=>{const t=e.replace("0x","");return parseInt(t,16).toString()};t.WalletContext=(0,i.createContext)({});t.WalletProvider=({children:e,nodeUri:a,correctNetworkId:n,externalChainConfig:o})=>{var r;const l=d(n),u=(0,i.useRef)({}),[m,p]=(0,i.useState)(""),[w,h]=(0,i.useState)(""),[g,f]=(0,i.useState)(""),[v,y]=(0,i.useState)(!0),b=o||c.default,k=async e=>{(e=>!Object.keys(b).some((t=>"returnConfig"!==t&&b[t].chainId===e)))(e)?(h(l),f(n),y(!1)):(h(d(e)),f(e))};(0,i.useEffect)((()=>{v||E()}),[v]),(0,i.useEffect)((()=>{var e;(async()=>{var e,t;try{const a=await(null===(t=null===(e=null===window||void 0===window?void 0:window.ethereum)||void 0===e?void 0:e.request)||void 0===t?void 0:t.call(e,{method:"eth_chainId"})),n=d(a);h(n),k(a)}catch(a){console.error(a.message)}})(),null===(e=null===window||void 0===window?void 0:window.ethereum)||void 0===e||e.on("chainChanged",(e=>{k(e)}))}),[]),(0,i.useEffect)((()=>{(async()=>{var e;null===(e=null===window||void 0===window?void 0:window.ethereum)||void 0===e||e.on("accountsChanged",(e=>{e&&e.length>0?p(s.ethers.utils.getAddress(e[0])):(p(""),console.log("No Account found!"))}))})()}),[]);(0,i.useEffect)((()=>{(()=>{let e={};window.ethereum?e=new s.ethers.providers.Web3Provider(window.ethereum):window.web3?e=new s.ethers.providers.Web3Provider(window.web3):(console.log("No Web3, defaulting to HTTPProvider"),e=new s.ethers.providers.JsonRpcProvider(a)),u.current=e})()}),[]),(0,i.useEffect)((()=>{var e;(null===(e=u.current)||void 0===e?void 0:e.listAccounts)&&(async()=>{var e;const t=await(null===(e=u.current)||void 0===e?void 0:e.listAccounts());p((null==t?void 0:t.length)?s.ethers.utils.getAddress(t[0]):"")})()}),[null===(r=u.current)||void 0===r?void 0:r.listAccounts]);const E=async()=>{var e,t,a,n;if(g)try{await(null===(t=null===(e=null===window||void 0===window?void 0:window.ethereum)||void 0===e?void 0:e.request)||void 0===t?void 0:t.call(e,{method:"wallet_switchEthereumChain",params:[{chainId:g}]})),y(!0)}catch(o){if(4902===o.code)try{const e=b.returnConfig(g);await(null===(n=null===(a=null===window||void 0===window?void 0:window.ethereum)||void 0===a?void 0:a.request)||void 0===n?void 0:n.call(a,{method:"wallet_addEthereumChain",params:[e]}))||console.log(`Chain ${w} added successfully!`)}catch(r){console.error(r)}console.error(o)}},C=()=>null!==u.current,N={walletAddress:m,loginMetamask:async()=>{try{await(async()=>{var e,t;try{const a=await(null===(t=null===(e=null===window||void 0===window?void 0:window.ethereum)||void 0===e?void 0:e.request)||void 0===t?void 0:t.call(e,{method:"eth_requestAccounts"}));return p(s.ethers.utils.getAddress(a[0])),a}catch(a){return await Promise.reject(a)}})()}catch(e){console.error(e)}},getProvider:()=>u.current,logout:()=>{p("")},switchChainsOrRegisterSupportedChain:E,checkIsLogged:async()=>{var e,t;if(!C()||!(null===(e=u.current)||void 0===e?void 0:e.listAccounts))return!1;const a=await(null===(t=u.current)||void 0===t?void 0:t.listAccounts());return Boolean(null==a?void 0:a.length)},isAvailable:C,isChainCorrect:v};return i.default.createElement(t.WalletContext.Provider,{value:N},e)};t.useWallet=()=>{const e=(0,i.useContext)(t.WalletContext);if(!e)throw new Error("could not find MetaMask context value; please ensure the component is wrapped in a <WalletProvider>");return e}},47344:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.zeroX=void 0,t.zeroX=function(e=""){const{valid:t,output:n}=a(e,/^(?:0x)*([a-f0-9]+)$/i,"zeroXTransformer");return(t?"0x":"")+n};const a=(e,t,a)=>{if("string"!=typeof e)throw new Error(`[${a}] Expected string, input type: ${typeof e}`);const n=e.match(t);return n?{valid:!0,output:n[1]}:{valid:!1,output:e}}},40322:(e,t,a)=>{"use strict";a.d(t,{e:()=>o});var n=a(41426);const o=()=>({nodeUri:"https://matic-mumbai.chainstacklabs.com",gatewayUri:"https://gateway.mumbai.public.nevermined.network",faucetUri:"https://faucet.rinkeby.nevermined.rocks",verbose:2,gatewayAddress:"0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc",graphHttpUri:"https://api.thegraph.com/subgraphs/name/nevermined-io/public",marketplaceAuthToken:n.AuthToken.fetchMarketplaceApiTokenFromLocalStorage().token,marketplaceUri:"https://marketplace-api.mumbai.public.nevermined.network",artifactsFolder:`${location.protocol}//${location.host}/contracts`,newGateway:!0})},61918:(e,t,a)=>{"use strict";a.d(t,{z:()=>k,o:()=>F});var n=a(67294),o=a(41402),r=a.n(o),l=a(35790),i=a(46605),s=a(41426),c=a(23660),d=a(76798),u=a(82169);const m={demo:"demo_Zn5S",demo__container:"demo__container_XKdI",demo__mint:"demo__mint_AxLE",demo__detail:"demo__detail_XQyo",demo__ddo:"demo__ddo_uikf",demo__buy:"demo__buy_dGjE"};var p=a(40322);const w=(0,d.CY)("demo",m),h=()=>{const{sdk:e,isLoadingSDK:t}=s.Catalog.useNevermined();return n.createElement(n.Fragment,null,n.createElement(d.AH,null,n.createElement(d.II,{className:w("detail"),variants:["bold"]},"Is Loading SDK:"),n.createElement(d.II,{className:w("detail")},t?"Yes":"No")),n.createElement(d.AH,null,n.createElement(d.II,{variants:["bold"],className:w("detail")},"Is SDK Avaialable:"),n.createElement(d.II,{className:w("detail")},e&&Object.keys(e).length>0?"Yes":"No")))},g=e=>{let{ddo:t}=e;return n.createElement(n.Fragment,null,n.createElement(d.AH,null,n.createElement(d.II,{className:w("detail"),variants:["bold"]},"Asset ",t.id.slice(0,10),"...:")),n.createElement(d.II,{className:w("ddo"),variants:["detail"]},JSON.stringify(t)))},f=e=>{let{onPublish:t}=e;const{assets:a}=s.Catalog.useNevermined();return n.createElement(n.Fragment,null,n.createElement(d.wg,{type:"secondary",onClick:t,disabled:!Object.keys(a).length},"mint"))},v=e=>{let{ddo:t}=e;const{assets:a,account:o,isLoadingSDK:r,subscription:l,sdk:u}=s.Catalog.useNevermined(),{walletAddress:m}=c.MetaMask.useWallet(),[p,h]=(0,n.useState)(!1),[g,f]=(0,n.useState)(!1),[v,y]=(0,n.useState)("");(0,n.useEffect)((()=>{(async()=>{h(await o.isNFT1155Holder(t.id,m)),y(await u.assets.owner(t.id))})()}),[m,g]);return n.createElement(d.AH,{className:w("buy")},p?n.createElement(d.wg,{type:"secondary",onClick:async()=>{console.log(t.id),await a.downloadNFT(t.id)},disabled:r},"Download NFT"):v!==m?n.createElement(d.wg,{type:"secondary",onClick:async()=>{const e=await(0,s.getCurrentAccount)(u);o.isTokenValid()&&o.getAddressTokenSigner().toLowerCase()===e.getId().toLowerCase()||await o.generateToken();const a=await l.buySubscription(t.id,e,v,i.default.from(1),1155);f(Boolean(a))},disabled:r},"buy"):n.createElement("span",null,"The owner cannot buy, please change the account to buy the NFT asset"))},y=()=>{const{loginMetamask:e,walletAddress:t}=c.MetaMask.useWallet();return n.createElement(d.AH,null,n.createElement(d.II,{variants:["bold"],className:w("detail")},"Wallet address:"),n.createElement(d.II,null,t),!t&&n.createElement(d.wg,{type:"secondary",onClick:e},"Connect To MM"))},b=e=>{let{config:t}=e;const{isLoadingSDK:a,sdk:o,account:d}=s.Catalog.useNevermined(),{publishNFT1155:u}=s.AssetService.useAssetPublish(),{walletAddress:m}=c.MetaMask.useWallet(),[p,b]=(0,n.useState)({});l.Logger.setLevel(3);const k={main:{name:"",files:[{index:0,contentType:"application/json",url:"https://github.com/nevermined-io/docs/blob/main/docs/architecture/specs/examples/did/v0.4/ddo-example.json"}],type:"dataset",author:"",license:"",dateCreated:(new Date).toISOString()}};return n.createElement("div",{className:w("container")},n.createElement(h,null),n.createElement(y,null),m&&!p.id&&n.createElement(f,{onPublish:async()=>{try{const e=await(0,s.getCurrentAccount)(o),a=((e,t,a)=>{const n=new Map;let o=[];1===e.length&&0===e[0].split&&(o=[{name:a,split:100,walletAddress:a}]);let r=0;if(o.forEach((e=>{if(e.split&&e.split>0){const a=(t*e.split/100).toFixed();n.set(e.walletAddress,i.default.from(+a)),r+=e.split}})),!n.has(a)){const e=+(t*(100-r)/100).toFixed();n.set(a,i.default.from(e))}return n})([],100,e.getId()),n=new(r())(a),l=await o.keeper.nvmConfig.getNetworkFee(),c=await o.keeper.nvmConfig.getFeeReceiver();n.addNetworkFees(c,i.default.from(l));const m={royaltyKind:s.RoyaltyKind.Standard,scheme:(0,s.getRoyaltyScheme)(o,s.RoyaltyKind.Standard),amount:0};d.isTokenValid()&&d.getAddressTokenSigner().toLowerCase()===e.getId().toLowerCase()||await d.generateToken();const p=await u({gatewayAddress:t.gatewayAddress,assetRewards:n,metadata:k,nftAmount:i.default.from(1),preMint:!0,cap:i.default.from(100),royaltyAttributes:m,erc20TokenAddress:"0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e"});b(p)}catch(e){console.log("error",e)}}}),!a&&(null==p?void 0:p.id)&&n.createElement(n.Fragment,null,n.createElement(g,{ddo:p}),n.createElement(v,{ddo:p})))},k=()=>{var e;const t=(0,p.e)();return t.web3Provider="undefined"!=typeof window?null==(e=window)?void 0:e.ethereum:new u.r("https://matic-mumbai.chainstacklabs.com"),n.createElement(s.Catalog.NeverminedProvider,{config:t,verbose:!0},n.createElement(s.AssetService.AssetPublishProvider,null,n.createElement(c.MetaMask.WalletProvider,{correctNetworkId:"0x13881",nodeUri:""},n.createElement(b,{config:t}))))};var E=a(51020),C=a(19485),N=a(241),A=a(64146);const _=(0,d.CY)("demo",m);l.Logger.setLevel(3);const S=async(e,t)=>{const a=await e.utils.jwt.generateClientAssertion(t);await e.marketplace.login(a)},x=e=>{let{onPublish:t}=e;return n.createElement(n.Fragment,null,n.createElement(d.wg,{className:_("mint"),type:"secondary",onClick:t},"mint"))},I=e=>{let{ddo:t}=e;return n.createElement(n.Fragment,null,n.createElement(d.AH,null,n.createElement(d.II,{className:_("detail"),variants:["bold"]},"Asset ",t.id.slice(0,10),"...:")),n.createElement(d.II,{className:_("ddo"),variants:["detail"]},JSON.stringify(t)))},M=e=>{let{ddo:t,sdk:a,account:o}=e;const[r,s]=(0,n.useState)(!1),[c,u]=(0,n.useState)(!1),[m,p]=(0,n.useState)("");(0,n.useEffect)((()=>{(async()=>{const e=await a.nfts.balance(t.id,o),n=i.default.from(e).toNumber();s(n>0),p(await a.assets.owner(t.id))})()}),[o,c]);return n.createElement(d.AH,{className:_("buy")},r?n.createElement(d.wg,{type:"secondary",onClick:async()=>{try{await a.nfts.access(t.id,o)}catch(e){l.Logger.error(e)}}},"Download NFT"):m!==o.getId()?n.createElement(d.wg,{type:"secondary",onClick:async()=>{await S(a,o);try{const e=await a.nfts.order(t.id,i.default.from(1),o),n=await a.nfts.transferForDelegate(e,m,o.getId(),i.default.from(1),1155);u(Boolean(n))}catch(e){l.Logger.error(e)}}},"buy"):n.createElement("span",null,"The owner cannot buy, please change the account to buy the NFT asset"))},T=e=>{let{config:t}=e;const[a,o]=(0,n.useState)({}),[s,c]=(0,n.useState)(void 0),[u,m]=(0,n.useState)({}),[p,w]=(0,n.useState)("");(0,n.useEffect)((()=>{var e,t;null==(e=window)||null==(t=e.ethereum)||t.on("accountsChanged",(e=>{e&&e.length>0?w(C.getAddress(e[0])):(w(""),console.log("No Account found!"))})),(async()=>{const e=new N.Q(window.ethereum),t=await e.listAccounts();w(null!=t&&t.length?C.getAddress(t[0]):"")})()}),[]),(0,n.useEffect)((()=>{p&&(async()=>{try{const e=await l.Nevermined.getInstance(t),a=await e.accounts.list();c(a[0]),o(e)}catch(e){console.log(e)}})()}),[p]);return n.createElement("div",{className:_("container")},n.createElement(d.AH,null,s?n.createElement(n.Fragment,null,n.createElement(d.II,{variants:["bold"],className:_("detail")},"Wallet address:"),n.createElement(d.II,null,s.getId())):n.createElement(d.wg,{type:"secondary",onClick:async()=>{var e,t;const a=await(null==(e=window)||null==(t=e.ethereum)||null==t.request?void 0:t.request({method:"eth_requestAccounts"}));w(C.getAddress(a[0]))}},"Connect To MM"),p&&!u.id&&n.createElement(x,{onPublish:async()=>{try{const n=((e,t,a)=>{const n=new Map;let o=[];1===e.length&&0===e[0].split&&(o=[{name:a,split:100,walletAddress:a}]);let r=0;if(o.forEach((e=>{if(e.split&&e.split>0){const a=(t*e.split/100).toFixed();n.set(e.walletAddress,i.default.from(+a)),r+=e.split}})),!n.has(a)){const e=+(t*(100-r)/100).toFixed();n.set(a,i.default.from(e))}return n})([],100,s.getId()),o=new(r())(n),c={royaltyKind:E.RoyaltyKind.Standard,scheme:(0,E.getRoyaltyScheme)(a,E.RoyaltyKind.Standard),amount:0},d=await(async(e,t)=>{const a=`${e.artifactsFolder}/NeverminedConfig.mumbai.json`,n=await fetch(a),o=await n.json();return new A.CH(o.address,o.abi,await t.findSigner(o.address))})(t,s),u=await d.getMarketplaceFee();u.gt(0)&&(o.addNetworkFees(await d.getFeeReceiver(),u),l.Logger.log(`Network Fees: ${e=u,(e.toNumber()/1e4).toPrecision(2).toString()}`));const p={main:{name:"",files:[{index:0,contentType:"application/json",url:"https://github.com/nevermined-io/docs/blob/main/docs/architecture/specs/examples/did/v0.4/ddo-example.json"}],type:"dataset",author:"",license:"",dateCreated:(new Date).toISOString()}};await S(a,s);const w=await(async(e,t,n,o,r)=>{const s=a.keeper.conditions.transferNftCondition,c=await a.nfts.setApprovalForAll(s.address,!0,t);l.Logger.log(`Contract Receipt for approved transfer NFT: ${c}`);const d=await a.nfts.setApprovalForAll(e,!0,t);return l.Logger.log(`Contract Receipt for approved gateway: ${d}`),await a.nfts.createWithRoyalties(n,t,i.default.from(100),o,r,i.default.from(1),"0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e",!0)})(t.gatewayAddress,s,p,c,o);m(w)}catch(n){console.log("error",n)}var e}}),(null==u?void 0:u.id)&&n.createElement(n.Fragment,null,n.createElement(I,{ddo:u}),n.createElement(M,{ddo:u,sdk:a,account:s}))))},F=()=>{var e;const t=(0,p.e)();return t.web3Provider="undefined"!=typeof window?null==(e=window)?void 0:e.ethereum:new u.r("https://matic-mumbai.chainstacklabs.com"),n.createElement(n.Fragment,null,n.createElement(T,{config:t}))}},9760:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(87462),o=(a(67294),a(3905)),r=a(91262),l=a(61918);const i={sidebar_position:4},s="Demo",c={unversionedId:"catalog/demo",id:"catalog/demo",title:"Demo",description:"This demo is based in the code of the Example section",source:"@site/docs/catalog/demo.md",sourceDirName:"catalog",slug:"/catalog/demo",permalink:"/docs/catalog/demo",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/catalog/demo.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Example",permalink:"/docs/catalog/example"},next:{title:"Getting started",permalink:"/docs/catalog/core/"}},d={},u=[{value:"Workflow example",id:"workflow-example",level:2},{value:"View",id:"view",level:2}],m={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"demo"},"Demo"),(0,o.kt)("p",null,"This demo is based in the code of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/catalog/example"},"Example")," section"),(0,o.kt)("h2",{id:"workflow-example"},"Workflow example"),(0,o.kt)("p",null,"The example in the template covers the most commonsly used functionalities to interact with NFT1155."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requirements:")," The account wallet used for the example must have ",(0,o.kt)("inlineCode",{parentName:"p"},"Matic")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"USDC")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect the wallet"),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"Mint")," button, approve the transaction and sign the authorization request in the wallet."),(0,o.kt)("li",{parentName:"ol"},"Once the token is minted the ",(0,o.kt)("inlineCode",{parentName:"li"},"Mint")," button will change to ",(0,o.kt)("inlineCode",{parentName:"li"},"Download NFT"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Download NFT")," to retrieve the example asset (in this case it is a JSON file)"),(0,o.kt)("li",{parentName:"ol"},"Change the account in the wallet"),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Buy")," button and approve the transaction and sign the authorization request in the wallet"),(0,o.kt)("li",{parentName:"ol"},"Upon purchasing the token the ",(0,o.kt)("inlineCode",{parentName:"li"},"Buy")," button will change to ",(0,o.kt)("inlineCode",{parentName:"li"},"Download NFT")),(0,o.kt)("li",{parentName:"ol"},"Repeat step 4")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Warning:")," The data is not static, once the browser is reloaded the workflow example will restart."),(0,o.kt)("h2",{id:"view"},"View"),(0,o.kt)(r.Z,{fallback:(0,o.kt)("div",null,"Loading demo..."),mdxType:"BrowserOnly"},(()=>(0,o.kt)(l.z,{mdxType:"DemoCatalog"}))))}p.isMDXComponent=!0},88677:()=>{},62808:()=>{},9114:()=>{},74487:()=>{},46601:()=>{},89214:()=>{},71922:()=>{},2363:()=>{},96419:()=>{},56353:()=>{},69386:()=>{},31616:()=>{},69862:()=>{},40964:()=>{}}]);