import { _ as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
import { p as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as AnimatedLink } from "./router-rR48cy_p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProjectCard-Dbg6WFah.js
var import_jsx_runtime = require_jsx_runtime();
var ProjectCard = ({ img, title, desc, stacks, route, id, params }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		layout: true,
		exit: {
			opacity: 0,
			scale: .8
		},
		initial: {
			opacity: 0,
			scale: .8
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: { opacity: { duration: .3 } },
		className: "flex flex-col border border-border-default\r\n            bg-surface-elevated h-fit rounded-3xl shadow-xl hover:scale-104 transition-all duration-75 ease-in-out",
		children: [img && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-52 border-b border-text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "hidden md:absolute top-4 left-5 text-accent-text text-sm",
				children: [id < 10 && 0, id]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img,
				alt: title,
				className: ""
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col h-[45%] gap-4 mt-6 px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "md:hidden block top-4 left-5 text-accent-text text-sm",
					children: [id < 10 && 0, id]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-text-primary text-md",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-text-muted text-sm",
					children: desc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-4 w-full",
					children: stacks.length > 0 && stacks.map((stack) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-1 px-2 rounded-lg text-[10px] lg:text-nowrap text-text-primary bg-surface shadow-gray-700 shadow-md",
						children: stack
					}, stack))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "w-full h-0 5 text-text-muted" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedLink, {
					classes: "text-accent-primary text-sm hover:text-accent-hover mb-4 hover:scale-90 transition w-fit",
					route,
					params,
					func: () => void 0,
					children: ["View Case Study ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "inline-block ml-1",
						size: 14
					})]
				})
			]
		})]
	}) });
};
//#endregion
export { ProjectCard as t };
