import { r as __toESM } from "../_runtime.mjs";
import { I as require_react, _ as require_jsx_runtime, f as createRouter, g as Link, h as createRootRoute, l as Scripts, m as createFileRoute, p as lazyRouteComponent, u as HeadContent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { c as Folder, d as FileQuestionMark, i as Moon, l as FolderOpen, n as Sun, o as Mail, s as House, t as User, u as FileText } from "../_libs/lucide-react.mjs";
import { d as FaGithub, f as FaLinkedin, h as GiHamburgerMenu, m as FaTwitter, p as FaTimes } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CfvuSJSL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "pt-8 pb-8 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col md:flex-row gap-4 page-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
				className: "md:w-48 lg:w-76 font-bold text-text-primary text-[12px]",
				children: "Raphael.dev"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex flex-col md:flex-row-reverse justify-between items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-8 items-center text-text-secondary text-[12px] font-semibold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "",
							target: "_blank",
							className: "hover:text-accent-hover hover:underline transition",
							children: "Twitter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "",
							target: "_blank",
							className: "hover:text-accent-hover hover:underline transition",
							children: "Github"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "",
							target: "_blank",
							className: "hover:text-accent-hover hover:underline transition",
							children: "LinkedIn"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-text-secondary text-[12px]",
					children: [
						"© ",
						year,
						" Raphael Onwujekwe. All rights reserved."
					]
				})]
			})]
		})
	});
}
function getInitialMode() {
	if (typeof window === "undefined") return "light";
	const stored = window.localStorage.getItem("theme");
	if (stored === "light" || stored === "dark") return stored;
	return "light";
}
function applyThemeMode(mode) {
	document.documentElement.classList.remove("light", "dark");
	document.documentElement.classList.add(mode);
	document.documentElement.setAttribute("data-theme", mode);
	document.documentElement.style.colorScheme = mode;
}
function ThemeToggle() {
	const [mode, setMode] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
	}, []);
	function toggleMode() {
		const nextMode = mode === "light" ? "dark" : "light";
		setMode(nextMode);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}
	const label = `Theme mode: ${mode}. Click to switch.`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		type: "button",
		whileTap: { scale: .95 },
		onClick: toggleMode,
		"aria-label": label,
		title: label,
		className: "text-sm text-text-muted hover:text-text-primary transition cursor-pointer bg-backdrop-blur rounded-full border bg-background w-7 h-7 p-2 flex justify-center items-center font-semibold shadow-[0_8px_22px_rgba(30,90,72,0.08)]",
		children: mode === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
			size: 18,
			className: "shrink-0"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
			size: 18,
			className: "shrink-0"
		})
	});
}
var AnimatedLink = ({ children, route, classes, func, params, disabled = false }) => {
	const MotionLink = motion.create(Link);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionLink, {
		to: route,
		params,
		whileTap: { scale: .95 },
		onClick: () => func,
		className: classes,
		disabled,
		children
	});
};
var NavContext = (0, import_react.createContext)(null);
var NavProvider = ({ children }) => {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavContext.Provider, {
		value: {
			isOpen,
			setIsOpen
		},
		children
	});
};
var useNav = () => {
	const context = (0, import_react.useContext)(NavContext);
	if (!context) throw new Error("useNav must be used within a NavProvider");
	return context;
};
function Header() {
	const { isOpen, setIsOpen } = useNav();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed w-full top-0 z-50 border-b border-border-default bg-background/50 px-4 py-2 backdrop-blur-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "hidden md:flex page-wrap flex-wrap items-center justify-between gap-x-3 gap-y-2 py-3 sm:py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-bold text-text-primary",
					children: "Raphael.dev"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex md:gap-6 lg:gap-8 justify-center items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLink, {
							classes: "text-text-muted text-sm transition py-1 px-4 \n          hover:bg-accent-hover/10 hover:text-accent-hover hover:bg-backdrop-blur hover:rounded-lg\n          data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)] \n          data-[status=active]:rounded-lg",
							route: "/",
							func: () => void 0,
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLink, {
							classes: "text-text-muted text-sm transition py-1 px-4 \n          hover:bg-accent-hover/10 hover:text-accent-hover hover:bg-backdrop-blur hover:rounded-lg\n          data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)] \n          data-[status=active]:rounded-lg",
							route: "/about",
							func: () => void 0,
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLink, {
							classes: "text-text-muted text-sm transition py-1 px-4 \n          hover:bg-accent-hover/10 hover:text-accent-hover hover:bg-backdrop-blur hover:rounded-lg\n          data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)] \n          data-[status=active]:rounded-lg",
							route: "/projects",
							func: () => void 0,
							children: "Projects"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLink, {
							classes: "text-text-muted text-sm transition py-1 px-4 \n          hover:bg-accent-hover/10 hover:text-accent-hover hover:bg-backdrop-blur hover:rounded-lg\n          data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)] \n          data-[status=active]:rounded-lg",
							route: "/contact",
							func: () => void 0,
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedLink, {
						classes: "flex gap-2 items-center text-text-muted text-sm transition py-1 px-2 \n          bg-accent-hover/10 hover:text-accent-hover bg-backdrop-blur rounded-lg",
						route: "/",
						func: () => void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 16 }), " Resume"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "flex md:hidden page-wrap flex-wrap items-center justify-between gap-x-3 gap-y-2 py-3 sm:py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-bold text-text-primary",
					onClick: () => {
						if (isOpen) setIsOpen(!isOpen);
					},
					children: "Raphael.dev"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `absolute bg-surface-elevated border border-accent-primary/50 shadow-xl w-[96%] rounded-lg max-h-content top-19 right-2 z-20 flex flex-col text-center transition-opacity duration-200 ease-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "text-text-muted w-[94%] mx-auto rounded-3xl mb-2 mt-2 font-bold text-sm transition py-4 px-4 \n          hover:bg-accent-hover/10 hover:text-accent-hover hover:bg-backdrop-blur/40 flex justify-center items-center\n          data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)]",
							onClick: () => setIsOpen(!isOpen),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
								size: 16,
								className: "mr-1"
							}), " Home"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "text-text-muted w-[94%] mx-auto rounded-3xl mb-2 font-bold text-sm transition py-4 px-4\n           hover:bg-accent-hover/10 hover:text-accent-hover hover:bg-backdrop-blur/40 flex justify-center items-center\n           data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)]",
							onClick: () => setIsOpen(!isOpen),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
								size: 16,
								className: "mr-1"
							}), " About"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects",
							className: "text-text-muted w-[94%] mx-auto rounded-3xl mb-2 font-bold text-sm transition py-4 px-4\n           hover:bg-accent-hover/10 hover:text-accent-hover hover:bg-backdrop-blur/40 flex justify-center items-center\n           data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)]",
							onClick: () => setIsOpen(!isOpen),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, {
								size: 16,
								className: "mr-1"
							}), " Projects"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "text-text-muted w-[94%] mx-auto rounded-3xl mb-2 font-bold text-sm transition py-4 px-4\n           hover:bg-accent-hover/10 hover:text-accent-hover hover:bg-backdrop-blur/40 flex justify-center items-center\n           data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)]",
							onClick: () => setIsOpen(!isOpen),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								size: 16,
								className: "mr-1"
							}), " Contact"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "text-text-muted w-[94%] mx-auto rounded-3xl mb-2 font-bold text-sm transition py-4 px-4 hover:bg-accent-hover/10\n            hover:text-accent-hover hover:bg-backdrop-blur/40 flex justify-center items-center\n            data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)]",
							onClick: () => setIsOpen(!isOpen),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
								size: 16,
								className: "mr-1"
							}), " Resume"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "bg-text-muted hover:bg-accent-hover cursor-pointer p-2 rounded-lg text-text-primary hover:text-background ",
						onClick: () => setIsOpen(!isOpen),
						children: !isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiHamburgerMenu, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaTimes, { size: 18 })
					})]
				})
			]
		})]
	});
}
var styles_default = "/assets/styles-D2_l7jaR.css";
var THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;
var notFoundPage = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center pt-35 h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-text-muted/30 text-center text-[180px] font-bold",
					children: "404"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] flex justify-center p-3 bg-surface/30 backdrop-blur-lg rounded-xl border border-accent-text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileQuestionMark, {
						size: 24,
						className: "text-accent-text"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: " font-extrabold text-4xl text-center text-text-primary",
				children: "Page Not Found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-text-secondary text-sm mt-2 max-w-md text-center",
				children: "Looks like this route wandered off into the void because the page you're looking for does not exist."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-center gap-4 mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedLink, {
					classes: "flex gap-2 items-center py-2.5 px-6 rounded-xl\r\n            transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md",
					route: "/",
					func: () => void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { size: 16 }), " Back To Home"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedLink, {
					classes: "flex gap-2 items-center py-2.5 px-6 rounded-xl\r\n            transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md",
					route: "/projects",
					func: () => void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { size: 16 }), " View Projects"]
				})]
			})
		] })
	});
};
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Ralph's Portfolio" }
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootDocument,
	notFoundComponent: notFoundPage
});
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "overflow-x-clip",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: THEME_INIT_SCRIPT } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "overflow-x-clip",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "px-4",
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		}) })]
	});
}
var $$splitComponentImporter$3 = () => import("./routes-SdJ0q3y4.mjs");
var Route$4 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Where your dreams come to life" }] })
});
var TechStack = ({ techStack, styles, classes, extended, speed = 20, containerClass = "flex flex-wrap items-center gap-3 mt-9" }) => {
	const extendedStack = [...techStack, ...techStack];
	const stack = extended ? extendedStack : techStack;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: containerClass,
		style: styles,
		children: stack.map((tech, index) => {
			const Icon = tech.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: index * .05 },
				className: classes,
				children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					style: { color: tech.color },
					size: 16,
					className: "shrink-0 inline-block mr-2 "
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tech.name })]
			}, `${tech.name}-${index}`);
		})
	});
};
var Route$3 = createFileRoute("/about/")({ component: AboutPage });
function AboutPage() {
	const { isOpen, setIsOpen } = useNav();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `md:hidden ${isOpen && "absolute z-20 inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-auto"}`,
				onClick: () => setIsOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap mt-34",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto md:mx-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "md:w-[20%] text-accent-text text-[11px] block mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block mr-2",
								children: "//"
							}), " ABOUT ME"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl md:text-5xl text-text-primary font-extrabold max-w-xl md:max-w-2xl mb-6 md:leading-16",
							children: "Frontend developer who cares about the details."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-text-secondary md:w-138 leading-relaxed",
							children: "I'm Raphael Onwujekwe — a frontend developer based in Lagos with 2+ years building fast, accessible, and carefully crafted web products. I believe the best interfaces to be invisible: they should be able to guide users naturally without getting in the way."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row gap-6 md:gap-13 lg:gap-18 mt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-[70%] mx-auto sm:w-[50%] md:w-[26%] lg:w-[21%]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full h-64 rounded-3xl mb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: void 0,
								alt: "",
								className: "w-full h-full object-cover rounded-3xl"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 w-full items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block rounded-full w-2 h-2 bg-accent-primary shadow-3xl shadow-accent-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-text-muted leading-relaxed tracking-widest",
								children: "Open to opportunities"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-text-secondary",
									children: "Currently exploring: generative UI, React Server Components, and pushing the edges of what CSS can do. When I'm not coding, I sketch UI concepts, contribute to open source, and collect design references obsessively."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-text-secondary",
									children: "I care deeply about performance, usability, and the small details that make a product feel alive. Every pixel is intentional."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 md:grid-cols-3 gap-4 items-center w-[86%] mx-auto md:mx-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedLink, {
											classes: "flex gap-2 justify-center items-center py-2.5 px-6 rounded-xl\r\n                                transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-shadow-medium shadow-lg",
											route: "/projects",
											func: () => void 0,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaTwitter, { size: 16 }), " Twitter"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedLink, {
											classes: "flex gap-2 justify-center items-center py-2.5 px-6 rounded-xl\r\n                                transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-shadow-medium shadow-lg",
											route: "/projects",
											func: () => void 0,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaGithub, { size: 16 }), " Github"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedLink, {
											classes: "col-span-2 md:col-span-1 flex gap-2 justify-center items-center py-2.5 px-6 rounded-xl\r\n                                transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-shadow-medium shadow-lg",
											route: "/about",
											func: () => void 0,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaLinkedin, { size: 16 }), " LinkedIn"]
										})
									]
								})
							]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-18 mb-18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "md:w-[20%] text-accent-text text-[11px] block mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block mr-2",
							children: "//"
						}), " EXPERIENCE"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-text-primary text-2xl font-bold mb-12",
						children: "Where I've worked"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-text-secondary md:w-[16%]",
							children: "2025 — present"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-bold text-text-primary",
									children: "Frontend Developer (Intern)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-accent-text",
									children: "TrueMindsLtd"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-text-secondary w-[90%]",
									children: "Worked with fellow interns across different tech stacks to build a performant, pixel-perfect learning management system."
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-10 mb-10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-text-secondary md:w-[16%]",
							children: "2024 — 2025"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-bold text-text-primary",
									children: "Frontend Developer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-accent-text",
									children: "Fintava"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-text-secondary w-[90%]",
									children: "Leading frontend architecture for a fintech SaaS platform serving 200k+ users across West Africa."
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-10 mb-10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-text-secondary md:w-[16%]",
							children: "2021 — 2023"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-bold text-text-primary",
									children: "Frontend Developer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-accent-text",
									children: "Raven Atlas"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-text-secondary w-[90%]",
									children: "Built and maintained the design system and core product interfaces from scratch."
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-18 mb-18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "md:w-[20%] text-accent-text text-[11px] block mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block mr-2",
							children: "//"
						}), " TECH STACK"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-text-primary text-2xl font-bold mb-6",
						children: "Tools I work With"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechStack, {
						techStack: [
							{ name: "HTML" },
							{ name: "CSS / Tailwind" },
							{ name: "JavaScript" },
							{ name: "TypeScript" },
							{ name: "React" },
							{ name: "Next.js" },
							{ name: "Framer Motion" },
							{ name: "Figma" },
							{ name: "Git / GitHub" },
							{ name: "Node.js" }
						],
						containerClass: `flex flex-wrap items-center gap-3
                    transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] duration-500`,
						classes: "block bg-surface py-1 px-4 rounded-2xl text-text-secondary\r\n                    text-xs font-bold border border-text-muted shadow-shadow-medium shadow-lg\r\n                    transition-all"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-18" })
		]
	});
}
var $$splitComponentImporter$2 = () => import("./contact-C4zJOGaZ.mjs");
var Route$2 = createFileRoute("/contact/")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Contact Me" }] })
});
var $$splitComponentImporter$1 = () => import("./projects-BqHJrjF6.mjs");
var Route$1 = createFileRoute("/projects/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./detail._projectId-CZAGgcsb.mjs");
var Route = createFileRoute("/projects/detail/$projectId")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutIndexRoute: Route$3.update({
		id: "/about/",
		path: "/about/",
		getParentRoute: () => Route$5
	}),
	ContactIndexRoute: Route$2.update({
		id: "/contact/",
		path: "/contact/",
		getParentRoute: () => Route$5
	}),
	ProjectsIndexRoute: Route$1.update({
		id: "/projects/",
		path: "/projects/",
		getParentRoute: () => Route$5
	}),
	ProjectsDetailProjectIdRoute: Route.update({
		id: "/projects/detail/$projectId",
		path: "/projects/detail/$projectId",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
}
//#endregion
export { AnimatedLink as a, useNav as i, Route as n, TechStack as r, router_exports as t };
