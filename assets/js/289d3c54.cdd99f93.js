(self.webpackChunk=self.webpackChunk||[]).push([[16873],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=h(a),p=r,f=d["".concat(l,".").concat(p)]||d[p]||c[p]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var h=2;h<o;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13919:(e,t,a)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:()=>n,Z:()=>r})},44996:(e,t,a)=>{"use strict";a.d(t,{C:()=>o,Z:()=>i});var n=a(52263),r=a(13919);function o(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,h=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(s)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return h?e+u:u}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},28316:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,metadata:()=>l,toc:()=>h,default:()=>c});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),i=a(44996),s={title:"Introducing Relay Hooks",author:"Robert Balicki & Juan Tejada",tags:["relay-hooks"],description:"Introducing Relay Hooks",hide_table_of_contents:!1},l={permalink:"/blog/2021/03/09/introducing-relay-hooks",source:"@site/blog/2021-03-09-introducing-relay-hooks.md",title:"Introducing Relay Hooks",description:"Introducing Relay Hooks",date:"2021-03-09T00:00:00.000Z",formattedDate:"March 9, 2021",tags:[{label:"relay-hooks",permalink:"/blog/tags/relay-hooks"}],readingTime:5.66,truncated:!1},h=[{value:"What was released?",id:"what-was-released",children:[]},{value:"What are the advantages of the Hooks APIs?",id:"what-are-the-advantages-of-the-hooks-apis",children:[]},{value:"Refetching a fragment with different variables",id:"refetching-a-fragment-with-different-variables",children:[]},{value:"Starting to fetch data before rendering a component",id:"starting-to-fetch-data-before-rendering-a-component",children:[{value:"Hooks and Suspense for Data Fetching",id:"hooks-and-suspense-for-data-fetching",children:[]},{value:"Where to go from here",id:"where-to-go-from-here",children:[]},{value:"Thanks",id:"thanks",children:[]}]}],u={toc:h};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are extremely excited to release ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/relay/releases/tag/v11.0.0"},"Relay Hooks"),", the most developer-friendly version of Relay yet, and ",(0,o.kt)("a",{parentName:"p",href:"https://developers.facebook.com/blog/post/2021/03/09/introducing-relay-hooks-improved-react-apis-relay/"},"make it available to the OSS community")," today! Relay Hooks is a set of new, rethought APIs for fetching and managing GraphQL data using React Hooks."),(0,o.kt)("p",null,"The new APIs are fully compatible with the existing, container-based APIs. Though we recommend writing any new code using Relay Hooks, ",(0,o.kt)("em",{parentName:"p"},"migrating existing containers to the new APIs is optional and container-based code will continue to work"),"."),(0,o.kt)("p",null,"Although these APIs are newly released, they are not untested: the rewritten ",(0,o.kt)("a",{parentName:"p",href:"https://www.facebook.com"},"Facebook.com")," is entirely powered by Relay Hooks and these APIs have been the recommended way to use Relay at Facebook since mid-2019."),(0,o.kt)("p",null,"In addition, we are also releasing a rewritten ",(0,o.kt)("a",{href:(0,i.Z)("/docs/guided-tour/")},"guided tour")," and ",(0,o.kt)("a",{href:(0,i.Z)("/docs/")},"updated documentation")," that distill the best practices for building maintainable, data-driven applications that we have learned since first developing Relay."),(0,o.kt)("p",null,"Though we still have a ways to go before getting started with Relay is as easy as we\u2019d like, we believe these steps will make the Relay developer experience substantially better."),(0,o.kt)("h2",{id:"what-was-released"},"What was released?"),(0,o.kt)("p",null,"We released Relay Hooks, a set of React Hooks-based APIs for working with GraphQL data. We also took the opportunity to ship other improvements, like a more stable version of ",(0,o.kt)("a",{href:(0,i.Z)("/docs/api-reference/fetch-query/")},(0,o.kt)("code",null,"fetchQuery"))," and the ability to customize object identifiers in Relay using ",(0,o.kt)("code",null,"getDataID")," (which is useful if your server does not have globally unique IDs.)"),(0,o.kt)("p",null," See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/relay/releases/tag/v11.0.0"},"release notes")," for a complete list of what was released."),(0,o.kt)("h2",{id:"what-are-the-advantages-of-the-hooks-apis"},"What are the advantages of the Hooks APIs?"),(0,o.kt)("p",null,"The newly released APIs improve the developer experience in at least the following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Hooks-based APIs for fetching queries, loading data with fragments, pagination, refetching, mutations and subscriptions generally require fewer lines of code and have less indirection than the equivalent container-based solution."),(0,o.kt)("li",{parentName:"ul"},"These APIs have more complete Flow and Typescript coverage."),(0,o.kt)("li",{parentName:"ul"},"These APIs take advantage of compiler features to automate error-prone tasks, such as the generation of refetch and pagination queries."),(0,o.kt)("li",{parentName:"ul"},"These APIs come with the ability to configure fetch policies, which let you determine the conditions in which a query should be fulfilled from the store and in which a network request will be made."),(0,o.kt)("li",{parentName:"ul"},"These APIs give you the ability to start fetching data before a component renders, something that could not be achieved with the container-based solutions. This allows data to be shown to users sooner.")),(0,o.kt)("p",null,"The following examples demonstrate some of the advantages of the new APIs."),(0,o.kt)("h2",{id:"refetching-a-fragment-with-different-variables"},"Refetching a fragment with different variables"),(0,o.kt)("p",null,"First, let\u2019s take a look at how we might refetch a fragment with different variables using the Hooks APIs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type Props = {\n  comment: CommentBody_comment$key,\n};\n\nfunction CommentBody(props: Props) {\n  const [data, refetch] = useRefetchableFragment<CommentBodyRefetchQuery, _>(\n    graphql`\n      fragment CommentBody_comment on Comment\n      @refetchable(queryName: \"CommentBodyRefetchQuery\") {\n        body(lang: $lang) {\n          text\n        }\n      }\n    `,\n    props.comment,\n  );\n\n  return <>\n    <CommentText text={data?.text} />\n    <Button\n      onClick={() =>\n        refetch({ lang: 'SPANISH' }, { fetchPolicy: 'store-or-network' })\n      }>\n    >\n      Translate\n    </Button>\n  </>\n}\n")),(0,o.kt)("p",null,"Compare this to the equivalent ",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/rbalicki2/2ac2829aefd8d032e8cb32cd0066bd4e"},"container-based example"),". The Hooks-based example takes fewer lines, does not require the developer to manually write a refetch query, has the refetch variables type-checked and explicitly states that a network request should not be issued if the query can be fulfilled from data in the store."),(0,o.kt)("h2",{id:"starting-to-fetch-data-before-rendering-a-component"},"Starting to fetch data before rendering a component"),(0,o.kt)("p",null,"The new APIs allow developers to more quickly show content to users by starting to fetch data before a component renders. Prefetching data in this way is not possible with the container-based APIs. Consider the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const UserQuery = graphql`\n  query UserLinkQuery($userId: ID!) {\n    user(id: $userId) {\n      user_details_blurb\n    }\n  }\n`;\n\nfunction UserLink({ userId, userName }) {\n  const [queryReference, loadQuery] = useQueryLoader(UserQuery);\n\n  const [isPopoverVisible, setIsPopoverVisible] = useState(false);\n\n  const maybePrefetchUserData = useCallback(() => {\n    if (!queryReference) {\n      // calling loadQuery will cause this component to re-render.\n      // During that re-render, queryReference will be defined.\n      loadQuery({ userId });\n    }\n  }, [queryReference, loadQuery]);\n\n  const showPopover = useCallback(() => {\n    maybePrefetchUserData();\n    setIsPopoverVisible(true);\n  }, [maybePrefetchUserData, setIsPopoverVisible]);\n\n  return <>\n    <Button\n      onMouseOver={maybePrefetchUserData}\n      onPress={showPopover}\n    >\n      {userName}\n    </Button>\n    {isPopoverVisible && queryReference && (\n      <Popover>\n        <React.Suspense fallback={<Glimmer />}>\n          <UserPopoverContent queryRef={queryReference} />\n        </React.Suspense>\n      </Popover>\n    )}\n  </>\n}\n\nfunction UserPopoverContent({queryRef}) {\n  // The following call will Suspend if the request for the data is still\n  // in flight:\n  const data = usePreloadedQuery(UserQuery, queryRef);\n  // ...\n}\n")),(0,o.kt)("p",null,"In this example, if the query cannot be fulfilled from data in the local cache, a network request is initiated when the user hovers over a button. When the button is finally pressed, the user will thus see content sooner."),(0,o.kt)("p",null,"By contrast, the container-based APIs initiate network requests when the component renders."),(0,o.kt)("h3",{id:"hooks-and-suspense-for-data-fetching"},"Hooks and Suspense for Data Fetching"),(0,o.kt)("p",null,"You may have noticed that both of the examples use Suspense."),(0,o.kt)("p",null,"Although Relay Hooks uses Suspense for some of its APIs, ",(0,o.kt)("em",{parentName:"p"},"support, general guidance, and requirements for usage of Suspense for Data Fetching in React are still")," ",(0,o.kt)("em",{parentName:"p"},"not ready"),", and the React team is still defining what this guidance will be for upcoming releases. There are some limitations when Suspense is used with React 17."),(0,o.kt)("p",null,"Nonetheless, we released Relay Hooks now because we know these APIs are on the right trajectory for supporting upcoming releases of React. Even though parts of Relay\u2019s Suspense implementation may still change, the Relay Hooks APIs themselves are stable; they have been widely adopted internally, and have been in use in production for over a year."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{href:(0,i.Z)("/docs/migration-and-compatibility/suspense-compatibility/")},"Suspense Compatibility")," and ",(0,o.kt)("a",{href:(0,i.Z)("/docs/guided-tour/rendering/loading-states/")},"Loading States with Suspense")," for deeper treatments of this topic."),(0,o.kt)("h3",{id:"where-to-go-from-here"},"Where to go from here"),(0,o.kt)("p",null,"Please check out the ",(0,o.kt)("a",{href:(0,i.Z)("/docs/")},"getting started guide"),", the ",(0,o.kt)("a",{href:(0,i.Z)("/docs/migration-and-compatibility/")},"migration guide")," and the ",(0,o.kt)("a",{href:(0,i.Z)("/docs/guided-tour/")},"guided tour"),"."),(0,o.kt)("h3",{id:"thanks"},"Thanks"),(0,o.kt)("p",null,"Releasing Relay Hooks was not just the work of the React Data team. We'd like to thank the contributors that helped make it possible:"),(0,o.kt)("p",null,"@0xflotus, @AbdouMoumen, @ahmadrasyidsalim, @alexdunne, @alloy, @andrehsu, @andrewkfiedler, @anikethsaha, @babangsund, @bart88, @bbenoist, @bigfootjon, @bondz, @BorisTB, @captbaritone, @cgriego, @chaytanyasinha, @ckknight, @clucasalcantara, @damassi, @Daniel15, @daniloab, @earvinLi, @EgorShum, @eliperkins, @enisdenjo, @etcinit, @fabriziocucci, @HeroicHitesh, @jaburx, @jamesgeorge007, @janicduplessis, @jaroslav-kubicek, @jaycenhorton, @jaylattice, @JonathanUsername, @jopara94, @jquense, @juffalow, @kafinsalim, @kyarik, @larsonjj, @leoasis, @leonardodino, @levibuzolic, @liamross, @lilianammmatos, @luansantosti, @MaartenStaa, @MahdiAbdi, @MajorBreakfast, @maraisr, @mariusschulz, @martinbooth, @merrywhether, @milosa, @mjm, @morrys, @morwalz, @mrtnzlml, @n1ru4l, @Nilomiranda, @omerzach, @orta, @pauloedurezende, @RDIL, @RicCu, @robrichard, @rsmelo92, @SeshanPillay25, @sibelius, @SiddharthSham, @stefanprobst, @sugarshin, @taion, @thedanielforum, @theill, @thicodes, @tmus, @TrySound, @VinceOPS, @visshaljagtap, @Vrq, @w01fgang, @wincent, @wongmjane, @wyattanderson, @xamgore, @yangshun, @ymittal, @zeyap, @zpao and @zth."),(0,o.kt)("p",null,"The open source project ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/relay-tools/relay-hooks"},(0,o.kt)("inlineCode",{parentName:"a"},"relay-hooks"))," allowed the community to experiment with Relay and React Hooks, and was a source of valuable feedback for us. The idea for the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSubscription")," hook originated in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/relay-tools/relay-hooks/issues/5#issuecomment-603930570"},"an issue")," on that repo. Thank you @morrys for driving this project and for playing such an important role in our open source community."),(0,o.kt)("p",null,"Thank you for helping make this possible!"))}c.isMDXComponent=!0}}]);